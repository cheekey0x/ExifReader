/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import {getStringFromDataView} from './utils';
import ByteOrder from './byte-order';
import Heic from './image-header-heic';

const MIN_TIFF_DATA_BUFFER_LENGTH = 4;
const MIN_JPEG_DATA_BUFFER_LENGTH = 2;
const TIFF_ID = 0x2a;
const TIFF_ID_OFFSET = 2;
const TIFF_FILE_HEADER_OFFSET = 0;

const PNG_ID = '\x89\x50\x4e\x47\x0d\x0a\x1a\x0a';
const PNG_CHUNK_LENGTH_SIZE = 4;
const PNG_CHUNK_TYPE_SIZE = 4;
const PNG_CRC_SIZE = 4;
const PNG_CHUNK_LENGTH_OFFSET = 0;
const PNG_CHUNK_TYPE_OFFSET = PNG_CHUNK_LENGTH_SIZE;
const PNG_CHUNK_DATA_OFFSET = PNG_CHUNK_LENGTH_SIZE + PNG_CHUNK_TYPE_SIZE;
const PNG_CHUNK_TYPE_IMAGE_HEADER = 'IHDR';
const PNG_CHUNK_TYPE_INTERNATIONAL_TEXT = 'iTXt';
const PNG_XMP_PREFIX = 'XML:com.adobe.xmp';

const JPEG_ID = 0xffd8;
const JPEG_ID_SIZE = 2;
const APP_ID_OFFSET = 4;
const APP_MARKER_SIZE = 2;
const TIFF_HEADER_OFFSET = 10; // From start of APP1 marker.
const IPTC_DATA_OFFSET = 18; // From start of APP13 marker.
const XMP_DATA_OFFSET = 33; // From start of APP1 marker.
const XMP_EXTENDED_DATA_OFFSET = 79; // From start of APP1 marker including GUID, total length, and offset.
const APP2_ICC_DATA_OFFSET = 18; // From start of APP2 marker including marker and chunk/chunk total numbers.

const APP2_ICC_IDENTIFIER = 'ICC_PROFILE\0';
const ICC_CHUNK_NUMBER_OFFSET = APP_ID_OFFSET + APP2_ICC_IDENTIFIER.length;
const ICC_TOTAL_CHUNKS_OFFSET = ICC_CHUNK_NUMBER_OFFSET + 1;

const SOF0_MARKER = 0xffc0;
const SOF2_MARKER = 0xffc2;
const DHT_MARKER = 0xffc4;
const DQT_MARKER = 0xffdb;
const DRI_MARKER = 0xffdd;
const SOS_MARKER = 0xffda;

const APP0_MARKER = 0xffe0;
const APP1_MARKER = 0xffe1;
const APP2_MARKER = 0xffe2;
const APP13_MARKER = 0xffed;
const APP15_MARKER = 0xffef;
const COMMENT_MARKER = 0xfffe;

const APP1_EXIF_IDENTIFIER = 'Exif';
const APP1_XMP_IDENTIFIER = 'http://ns.adobe.com/xap/1.0/\x00';
const APP1_XMP_EXTENDED_IDENTIFIER = 'http://ns.adobe.com/xmp/extension/\x00';
const APP13_IPTC_IDENTIFIER = 'Photoshop 3.0';

export default {
    parseAppMarkers
};

function parseAppMarkers(dataView) {
    if (isTiffFile(dataView)) {
        return findTiffOffsets();
    }

    if (isJpegFile(dataView)) {
        return findJpegOffsets(dataView);
    }

    if (isPngFile(dataView)) {
        return findPngOffsets(dataView);
    }

    if (Heic.isHeicFile(dataView)) {
        return Heic.findHeicOffsets(dataView);
    }

    throw new Error('Invalid image format');
}

function isTiffFile(dataView) {
    return (dataView.byteLength >= MIN_TIFF_DATA_BUFFER_LENGTH) && hasTiffMarker(dataView);
}

function hasTiffMarker(dataView) {
    const littleEndian = dataView.getUint16(0) === ByteOrder.LITTLE_ENDIAN;
    return dataView.getUint16(TIFF_ID_OFFSET, littleEndian) === TIFF_ID;
}

function findTiffOffsets() {
    return {
        hasAppMarkers: true,
        tiffHeaderOffset: TIFF_FILE_HEADER_OFFSET
    };
}

function isJpegFile(dataView) {
    return (dataView.byteLength >= MIN_JPEG_DATA_BUFFER_LENGTH) && (dataView.getUint16(0, false) === JPEG_ID);
}

function findJpegOffsets(dataView) {
    let appMarkerPosition = JPEG_ID_SIZE;
    let fieldLength;
    let sof0DataOffset;
    let sof2DataOffset;
    let tiffHeaderOffset;
    let iptcDataOffset;
    let xmpChunks;
    let iccChunks;

    while (appMarkerPosition + APP_ID_OFFSET + 5 <= dataView.byteLength) {
        if (isSOF0Marker(dataView, appMarkerPosition)) {
            sof0DataOffset = appMarkerPosition + APP_MARKER_SIZE;
        } else if (isSOF2Marker(dataView, appMarkerPosition)) {
            sof2DataOffset = appMarkerPosition + APP_MARKER_SIZE;
        } else if (isApp1ExifMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
            tiffHeaderOffset = appMarkerPosition + TIFF_HEADER_OFFSET;
        } else if (isApp1XmpMarker(dataView, appMarkerPosition)) {
            if (!xmpChunks) {
                xmpChunks = [];
            }
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
            xmpChunks.push(getXmpChunkDetails(appMarkerPosition, fieldLength));
        } else if (isApp1ExtendedXmpMarker(dataView, appMarkerPosition)) {
            if (!xmpChunks) {
                xmpChunks = [];
            }
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
            xmpChunks.push(getExtendedXmpChunkDetails(appMarkerPosition, fieldLength));
        } else if (isApp13PhotoshopMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
            iptcDataOffset = appMarkerPosition + IPTC_DATA_OFFSET;
        } else if (isApp2ICCMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
            const iccDataOffset = appMarkerPosition + APP2_ICC_DATA_OFFSET;
            const iccDataLength = fieldLength - (APP2_ICC_DATA_OFFSET - APP_MARKER_SIZE);

            const iccChunkNumber = dataView.getUint8(appMarkerPosition + ICC_CHUNK_NUMBER_OFFSET, false);
            const iccChunksTotal = dataView.getUint8(appMarkerPosition + ICC_TOTAL_CHUNKS_OFFSET, false);
            if (!iccChunks) {
                iccChunks = [];
            }
            iccChunks.push({offset: iccDataOffset, length: iccDataLength, chunkNumber: iccChunkNumber, chunksTotal: iccChunksTotal});
        } else if (isAppMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
        } else {
            break;
        }
        appMarkerPosition += APP_MARKER_SIZE + fieldLength;
    }

    return {
        hasAppMarkers: appMarkerPosition > JPEG_ID_SIZE,
        fileDataOffset: sof0DataOffset || sof2DataOffset,
        tiffHeaderOffset,
        iptcDataOffset,
        xmpChunks,
        iccChunks
    };
}

function isSOF0Marker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition, false) === SOF0_MARKER);
}

function isSOF2Marker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition, false) === SOF2_MARKER);
}

function isApp2ICCMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP2_ICC_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition, false) === APP2_MARKER)
        && (getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP2_ICC_IDENTIFIER);
}

function isApp1ExifMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP1_EXIF_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition, false) === APP1_MARKER)
        && (getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_EXIF_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength, false) === 0x00);
}

function isApp1XmpMarker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition, false) === APP1_MARKER)
        && isXmpIdentifier(dataView, appMarkerPosition);
}

function isXmpIdentifier(dataView, appMarkerPosition) {
    const markerIdLength = APP1_XMP_IDENTIFIER.length;
    return getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_XMP_IDENTIFIER;
}

function isApp1ExtendedXmpMarker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition, false) === APP1_MARKER)
        && isExtendedXmpIdentifier(dataView, appMarkerPosition);
}

function isExtendedXmpIdentifier(dataView, appMarkerPosition) {
    const markerIdLength = APP1_XMP_EXTENDED_IDENTIFIER.length;
    return getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_XMP_EXTENDED_IDENTIFIER;
}

function getXmpChunkDetails(appMarkerPosition, fieldLength) {
    return {
        dataOffset: appMarkerPosition + XMP_DATA_OFFSET,
        length: fieldLength - (XMP_DATA_OFFSET - APP_MARKER_SIZE)
    };
}

function getExtendedXmpChunkDetails(appMarkerPosition, fieldLength) {
    return {
        dataOffset: appMarkerPosition + XMP_EXTENDED_DATA_OFFSET,
        length: fieldLength - (XMP_EXTENDED_DATA_OFFSET - APP_MARKER_SIZE)
    };
}

function isApp13PhotoshopMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP13_IPTC_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition, false) === APP13_MARKER)
        && (getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP13_IPTC_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength, false) === 0x00);
}

function isAppMarker(dataView, appMarkerPosition) {
    const appMarker = dataView.getUint16(appMarkerPosition, false);
    return ((appMarker >= APP0_MARKER) && (appMarker <= APP15_MARKER))
        || (appMarker === COMMENT_MARKER)
        || (appMarker === SOF0_MARKER)
        || (appMarker === SOF2_MARKER)
        || (appMarker === DHT_MARKER)
        || (appMarker === DQT_MARKER)
        || (appMarker === DRI_MARKER)
        || (appMarker === SOS_MARKER);
}

function isPngFile(dataView) {
    return getStringFromDataView(dataView, 0, PNG_ID.length) === PNG_ID;
}

function findPngOffsets(dataView) {
    const offsets = {
        hasAppMarkers: false
    };
    let offset = PNG_ID.length;

    while (offset + PNG_CHUNK_LENGTH_SIZE + PNG_CHUNK_TYPE_SIZE <= dataView.byteLength) {
        if (isPngImageHeaderChunk(dataView, offset)) {
            offsets.hasAppMarkers = true;
            offsets.pngHeaderOffset = offset + PNG_CHUNK_DATA_OFFSET;
        } else if (isPngXmpChunk(dataView, offset)) {
            offsets.hasAppMarkers = true;
            offsets.xmpChunks = [{
                dataOffset: offset + PNG_CHUNK_DATA_OFFSET + PNG_XMP_PREFIX.length,
                length: dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET) - PNG_XMP_PREFIX.length
            }];
        }

        offset += dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET)
            + PNG_CHUNK_LENGTH_SIZE
            + PNG_CHUNK_TYPE_SIZE
            + PNG_CRC_SIZE;
    }

    return offsets;
}

function isPngImageHeaderChunk(dataView, offset) {
    return getStringFromDataView(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === PNG_CHUNK_TYPE_IMAGE_HEADER;
}

function isPngXmpChunk(dataView, offset) {
    return (getStringFromDataView(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === PNG_CHUNK_TYPE_INTERNATIONAL_TEXT)
        && (getStringFromDataView(dataView, offset + PNG_CHUNK_DATA_OFFSET, PNG_XMP_PREFIX.length) === PNG_XMP_PREFIX);
}
