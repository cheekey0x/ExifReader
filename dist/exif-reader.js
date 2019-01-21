!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ExifReader=t():e.ExifReader=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t,n){var r,i,o;i=[t],void 0===(o="function"==typeof(r=function(e){"use strict";function t(e){return e.map(function(e){return String.fromCharCode(e)}).join("")}Object.defineProperty(e,"__esModule",{value:!0}),e.getStringValue=t,e.getEncodedString=function(e){if(e.length>=8){var n=t(e.slice(0,8));if("ASCII\0\0\0"===n)return t(e.slice(8));if("JIS\0\0\0\0\0"===n)return"[JIS encoded text]";if("UNICODE\0"===n)return"[Unicode encoded text]";if("\0\0\0\0\0\0\0\0"===n)return"[Undefined encoding]"}return"Undefined"},e.getCharacterArray=function(e){return e.split("").map(function(e){return e.charCodeAt(0)})}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t],void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=18761,n=19789;e.default={BIG_ENDIAN:n,LITTLE_ENDIAN:t,getByteOrder:function(e,r){if(e.getUint16(r)===t)return t;if(e.getUint16(r)===n)return n;throw new Error("Illegal byte order value. Faulty image.")}}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t],void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getStringFromDataView=function(e,t,n){for(var r=[],i=0;i<n&&t+i<e.byteLength;i++)r.push(e.getUint8(t+i,!1));return function(e){return e.map(function(e){return String.fromCharCode(e)})}(r).join("")}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t],void 0===(o="function"==typeof(r=function(e){"use strict";function t(e){this.name="MetadataMissingError",this.message=e||"No Exif data",this.stack=(new Error).stack}Object.defineProperty(e,"__esModule",{value:!0}),t.prototype=new Error,e.default={MetadataMissingError:t}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t],void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function n(e){var n=e.split(","),r=t(n,2),i=r[0],o=r[1];if(void 0!==i&&void 0!==o){var a=parseFloat(i),u=parseFloat(o),c=o.charAt(o.length-1);if(!Number.isNaN(a)&&!Number.isNaN(u))return""+(a+u/60)+c}return e}e.default={"tiff:Orientation":function(e){return"1"===e?"Horizontal (normal)":"2"===e?"Mirror horizontal":"3"===e?"Rotate 180":"4"===e?"Mirror vertical":"5"===e?"Mirror horizontal and rotate 270 CW":"6"===e?"Rotate 90 CW":"7"===e?"Mirror horizontal and rotate 90 CW":"8"===e?"Rotate 270 CW":e},"exif:GPSLatitude":n,"exif:GPSLongitude":n}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t,n(2),n(4)],void 0===(o="function"==typeof(r=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=function(e){for(var t=[],n=0;n<e.childNodes.length;n++)t.push(e.childNodes[n]);return t}(e);return function(e){return 1===e.length&&"#text"===e[0].nodeName}(n)?t?{}:function(e){return e.nodeValue}(n[0]):function(e){var t={};return e.forEach(function(e){if(function(e){return e.nodeName&&"#text"!==e.nodeName}(e)){var n=function(e){return{attributes:function(e){for(var t={},n=0;n<e.attributes.length;n++)t[e.attributes[n].nodeName]=e.attributes[n].value;return t}(e),value:o(e)}}(e);void 0!==t[e.nodeName]?(Array.isArray(t[e.nodeName])||(t[e.nodeName]=[t[e.nodeName]]),t[e.nodeName].push(n)):t[e.nodeName]=n}}),t}(n)}function a(e){var t={};if("string"==typeof e)return e;for(var n in e){var r=e[n];Array.isArray(r)||(r=[r]),r.forEach(function(e){Object.assign(t,u(e.attributes)),"object"===i(e.value)&&Object.assign(t,p(e.value))})}return t}function u(e){var t={};for(var n in e)c(n)&&(t[f(n)]={value:e[n],attributes:{},description:s(e[n],n)});return t}function c(e){return"rdf:parseType"!==e&&!d(e)}function d(e){return"xmlns"===e.split(":")[0]}function f(e){return e.split(":")[1]}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(Array.isArray(e))return function(e){return e.map(function(e){return void 0!==e.value?s(e.value):s(e)}).join(", ")}(e);if("object"===(void 0===e?"undefined":i(e)))return function(e){var t=[];for(var n in e)t.push(l(n)+": "+e[n].value);return t.join("; ")}(e);try{return t&&"function"==typeof r.default[t]?r.default[t](e):decodeURIComponent(escape(e))}catch(t){return e}}function l(e){return"CiAdrCity"===e?"CreatorCity":"CiAdrCtry"===e?"CreatorCountry":"CiAdrExtadr"===e?"CreatorAddress":"CiAdrPcode"===e?"CreatorPostalCode":"CiAdrRegion"===e?"CreatorRegion":"CiEmailWork"===e?"CreatorWorkEmail":"CiTelWork"===e?"CreatorWorkPhone":"CiUrlWork"===e?"CreatorWorkUrl":e}function p(e){var t={};for(var n in e)d(n)||(t[f(n)]=m(e[n],n));return t}function m(e,t){return g(e)?v(e,t):function(e){return"Resource"===e.attributes["rdf:parseType"]||void 0!==e.value["rdf:Description"]&&void 0===e.value["rdf:Description"].value["rdf:value"]}(e)?function(e,t){var n={value:{},attributes:{}};return void 0!==e.value["rdf:Description"]&&(Object.assign(n.value,u(e.value["rdf:Description"].attributes)),Object.assign(n.attributes,y(e)),e=e.value["rdf:Description"]),Object.assign(n.value,p(e.value)),n.description=s(n.value,t),n}(e,t):function(e){return 0===Object.keys(e.value).length&&void 0===e.attributes["rdf:resource"]}(e)?function(e,t){var n=u(e.attributes);return{value:n,attributes:{},description:s(n,t)}}(e,t):function(e){return void 0!==h(e.value)}(e)?function(e,t){var n=h(e.value).value["rdf:li"],r=y(e),i=[];return Array.isArray(n)||(n=[n]),n.forEach(function(e){i.push(function(e){return g(e)?v(e):function(e){return"Resource"===e.attributes["rdf:parseType"]}(e)?p(e.value):{value:e.value,attributes:y(e),description:s(e.value)}}(e))}),{value:i,attributes:r,description:s(i,t)}}(e,t):function(e,t){var n=S(e)||a(e.value);return{value:n,attributes:y(e),description:s(n,t)}}(e,t)}function g(e){return"Resource"===e.attributes["rdf:parseType"]&&void 0!==e.value["rdf:value"]||void 0!==e.value["rdf:Description"]&&void 0!==e.value["rdf:Description"].value["rdf:value"]}function v(e,t){var n=y(e);void 0!==e.value["rdf:Description"]&&(e=e.value["rdf:Description"]),Object.assign(n,y(e),function(e){var t={};for(var n in e.value)"rdf:value"===n||d(n)||(t[f(n)]=e.value[n].value);return t}(e));var r=function(e){return S(e.value["rdf:value"])||e.value["rdf:value"].value}(e);return{value:r,attributes:n,description:s(r,t)}}function y(e){var t={};for(var n in e.attributes)"rdf:parseType"===n||"rdf:resource"===n||d(n)||(t[f(n)]=e.attributes[n]);return t}function h(e){return e["rdf:Bag"]||e["rdf:Seq"]||e["rdf:Alt"]}function S(e){return e.attributes&&e.attributes["rdf:resource"]}e.default={read:function(e,n,r){try{var i=function(e,n,r){if("undefined"==typeof DOMParser)throw console.warn("Warning: DOMParser is not available. If you're using Node.js you probably want to do this:\n  1. Install a DOM parser, e.g. xmldom: npm install --save xmldom\n  2. Require that at the top of your script: global.DOMParser = require('xmldom').DOMParser;\nSee an example of this in the ExifReader example directory."),new Error;var i=new DOMParser,o=(0,t.getStringFromDataView)(e,n,r),a=i.parseFromString(o,"application/xml");if("parsererror"===a.documentElement.nodeName)throw new Error;return a}(e,n,r),u=function e(t){for(var n=0;n<t.childNodes.length;n++){if("x:xmpmeta"===t.childNodes[n].tagName)return e(t.childNodes[n]);if("rdf:RDF"===t.childNodes[n].tagName)return t.childNodes[n]}throw new Error}(i);return a(o(u,!0))}catch(e){return{}}}}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t],void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={get:function(){if("undefined"!=typeof TextDecoder)return TextDecoder}}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t,n(6)],void 0===(o="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(t);e.default={decode:function(e,t){var r=n.default.get();if(void 0!==r&&void 0!==e)try{return new r(e).decode(Uint8Array.from(t))}catch(e){}return function(e){try{return decodeURIComponent(escape(e))}catch(t){return e}}(t.map(function(e){return String.fromCharCode(e)}).join(""))},TAG_HEADER_SIZE:5}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t,n(0)],void 0===(o="function"==typeof(r=function(e,t){"use strict";function n(e){var n=(0,t.getStringValue)(e);return n.length>=8?n.substr(0,4)+"-"+n.substr(4,2)+"-"+n.substr(6,2):n}function r(e){var n=(0,t.getStringValue)(e),r=n;return n.length>=6&&(r=n.substr(0,2)+":"+n.substr(2,2)+":"+n.substr(4,2),11===n.length&&(r+=n.substr(6,1)+n.substr(7,2)+":"+n.substr(9,2))),r}function i(e){var n=(0,t.getStringValue)(e);return"%G"===n?"UTF-8":"%5"===n?"Windows-1252":"%/G"===n?"UTF-8 Level 1":"%/H"===n?"UTF-8 Level 2":"%/I"===n?"UTF-8 Level 3":"/A"===n?"ISO-8859-1":"/B"===n?"ISO-8859-2":"/C"===n?"ISO-8859-3":"/D"===n?"ISO-8859-4":"/@"===n?"ISO-8859-5":"/G"===n?"ISO-8859-6":"/F"===n?"ISO-8859-7":"/H"===n?"ISO-8859-8":"Unknown"}Object.defineProperty(e,"__esModule",{value:!0}),e.default={iptc:{256:{name:"Model Version",description:function(e){return((e[0]<<8)+e[1]).toString()}},261:{name:"Destination",repeatable:!0},276:{name:"File Format",description:function(e){return((e[0]<<8)+e[1]).toString()}},278:{name:"File Format Version",description:function(e){return((e[0]<<8)+e[1]).toString()}},286:"Service Identifier",296:"Envelope Number",306:"Product ID",316:"Envelope Priority",326:{name:"Date Sent",description:n},336:{name:"Time Sent",description:r},346:{name:"Coded Character Set",description:i,encoding_name:i},356:"UNO",376:{name:"ARM Identifier",description:function(e){return((e[0]<<8)+e[1]).toString()}},378:{name:"ARM Version",description:function(e){return((e[0]<<8)+e[1]).toString()}},512:{name:"Record Version",description:function(e){return((e[0]<<8)+e[1]).toString()}},515:"Object Type Reference",516:"Object Attribute Reference",517:"Object Name",519:"Edit Status",520:{name:"Editorial Update",description:function(e){return"01"===(0,t.getStringValue)(e)?"Additional Language":"Unknown"}},522:"Urgency",524:{name:"Subject Reference",repeatable:!0,description:function(e){var n=(0,t.getStringValue)(e).split(":");return n[2]+(n[3]?"/"+n[3]:"")+(n[4]?"/"+n[4]:"")}},527:"Category",532:{name:"Supplemental Category",repeatable:!0},534:"Fixture Identifier",537:{name:"Keywords",repeatable:!0},538:{name:"Content Location Code",repeatable:!0},539:{name:"Content Location Name",repeatable:!0},542:"Release Date",547:"Release Time",549:"Expiration Date",550:"Expiration Time",552:"Special Instructions",554:{name:"Action Advised",description:function(e){var n=(0,t.getStringValue)(e);return"01"===n?"Object Kill":"02"===n?"Object Replace":"03"===n?"Object Append":"04"===n?"Object Reference":"Unknown"}},557:{name:"Reference Service",repeatable:!0},559:{name:"Reference Date",repeatable:!0},562:{name:"Reference Number",repeatable:!0},567:{name:"Date Created",description:n},572:{name:"Time Created",description:r},574:{name:"Digital Creation Date",description:n},575:{name:"Digital Creation Time",description:r},577:"Originating Program",582:"Program Version",587:{name:"Object Cycle",description:function(e){var n=(0,t.getStringValue)(e);return"a"===n?"morning":"p"===n?"evening":"b"===n?"both":"Unknown"}},592:{name:"By-line",repeatable:!0},597:{name:"By-line Title",repeatable:!0},602:"City",604:"Sub-location",607:"Province/State",612:"Country/Primary Location Code",613:"Country/Primary Location Name",615:"Original Transmission Reference",617:"Headline",622:"Credit",627:"Source",628:"Copyright Notice",630:{name:"Contact",repeatable:!0},632:"Caption/Abstract",634:{name:"Writer/Editor",repeatable:!0},637:{name:"Rasterized Caption",description:function(e){return e}},642:"Image Type",643:{name:"Image Orientation",description:function(e){var n=(0,t.getStringValue)(e);return"P"===n?"Portrait":"L"===n?"Landscape":"S"===n?"Square":"Unknown"}},647:"Language Identifier",662:{name:"Audio Type",description:function(e){var n=(0,t.getStringValue)(e),r=n.charAt(0),i=n.charAt(1),o="";return"1"===r?o+="Mono":"2"===r&&(o+="Stereo"),"A"===i?o+=", actuality":"C"===i?o+=", question and answer session":"M"===i?o+=", music, transmitted by itself":"Q"===i?o+=", response to a question":"R"===i?o+=", raw sound":"S"===i?o+=", scener":"V"===i?o+=", voicer":"W"===i&&(o+=", wrap"),""!==o?o:n}},663:{name:"Audio Sampling Rate",description:function(e){return parseInt((0,t.getStringValue)(e),10)+" Hz"}},664:{name:"Audio Sampling Resolution",description:function(e){var n=parseInt((0,t.getStringValue)(e),10);return n+(1===n?" bit":" bits")}},665:{name:"Audio Duration",description:function(e){var n=(0,t.getStringValue)(e);return n.length>=6?n.substr(0,2)+":"+n.substr(2,2)+":"+n.substr(4,2):n}},666:"Audio Outcue",698:"Short Document ID",699:"Unique Document ID",700:"Owner ID",712:{name:function(e){return 2===e.length?"ObjectData Preview File Format":"Record 2 destination"},description:function(e){if(2===e.length){var n=(e[0]<<8)+e[1];return 0===n?"No ObjectData":1===n?"IPTC-NAA Digital Newsphoto Parameter Record":2===n?"IPTC7901 Recommended Message Format":3===n?"Tagged Image File Format (Adobe/Aldus Image data)":4===n?"Illustrator (Adobe Graphics data)":5===n?"AppleSingle (Apple Computer Inc)":6===n?"NAA 89-3 (ANPA 1312)":7===n?"MacBinary II":8===n?"IPTC Unstructured Character Oriented File Format (UCOFF)":9===n?"United Press International ANPA 1312 variant":10===n?"United Press International Down-Load Message":11===n?"JPEG File Interchange (JFIF)":12===n?"Photo-CD Image-Pac (Eastman Kodak)":13===n?"Microsoft Bit Mapped Graphics File [*.BMP]":14===n?"Digital Audio File [*.WAV] (Microsoft & Creative Labs)":15===n?"Audio plus Moving Video [*.AVI] (Microsoft)":16===n?"PC DOS/Windows Executable Files [*.COM][*.EXE]":17===n?"Compressed Binary File [*.ZIP] (PKWare Inc)":18===n?"Audio Interchange File Format AIFF (Apple Computer Inc)":19===n?"RIFF Wave (Microsoft Corporation)":20===n?"Freehand (Macromedia/Aldus)":21===n?'Hypertext Markup Language "HTML" (The Internet Society)':22===n?"MPEG 2 Audio Layer 2 (Musicom), ISO/IEC":23===n?"MPEG 2 Audio Layer 3, ISO/IEC":24===n?"Portable Document File (*.PDF) Adobe":25===n?"News Industry Text Format (NITF)":26===n?"Tape Archive (*.TAR)":27===n?"Tidningarnas Telegrambyrå NITF version (TTNITF DTD)":28===n?"Ritzaus Bureau NITF version (RBNITF DTD)":29===n?"Corel Draw [*.CDR]":"Unknown format "+n}return(0,t.getStringValue)(e)}},713:{name:"ObjectData Preview File Format Version",description:function(e,n){var r={"00":{"00":"1"},"01":{"01":"1","02":"2","03":"3","04":"4"},"02":{"04":"4"},"03":{"01":"5.0","02":"6.0"},"04":{"01":"1.40"},"05":{"01":"2"},"06":{"01":"1"},11:{"01":"1.02"},20:{"01":"3.1","02":"4.0","03":"5.0","04":"5.5"},21:{"02":"2.0"}},i=(0,t.getStringValue)(e);if(n["ObjectData Preview File Format"]){var o=(0,t.getStringValue)(n["ObjectData Preview File Format"].value);if(r[o]&&r[o][i])return r[o][i]}return i}},714:"ObjectData Preview Data",1802:{name:"Size Mode",description:function(e){return e[0].toString()}},1812:{name:"Max Subfile Size",description:function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<8)+e[n];return t.toString()}},1882:{name:"ObjectData Size Announced",description:function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<8)+e[n];return t.toString()}},1887:{name:"Maximum ObjectData Size",description:function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<8)+e[n];return t.toString()}}}}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t,n(8),n(7)],void 0===(o="function"==typeof(r=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(t),i=o(n);function o(e){return e&&e.__esModule?e:{default:e}}var a=943868237,u=4,c=u+8,d=1028,f=5;function s(e,t){if(e.getUint32(t,!1)!==a)throw new Error("Not an IPTC resource block.");return{type:e.getUint16(t+u,!1),size:e.getUint16(t+10,!1)}}function l(e){return e.type===d}function p(e){return e.size%2!=0?1:0}function m(e,t,n,o){if(function(e,t){return 28!==e.getUint8(t)}(e,t))return{tag:null,tagSize:0};var a=e.getUint16(t+1,!1),u=e.getUint16(t+3,!1),c=function(e,t,n){for(var r=[],i=0;i<n;i++)r.push(e.getUint8(t+i));return r}(e,t+f,u),d={id:a,name:function(e,t,n){return e?function(e){return"string"==typeof e}(e)?e:function(e){return"function"==typeof e.name}(e)?e.name(n):e.name:"undefined-"+t}(r.default.iptc[a],a,c),value:c,description:function(e,t,n,r){return function(e){return e&&void 0!==e.description}(e)?e.description(t,n):function(e,t){return e&&t instanceof Array}(e,t)?i.default.decode(r,t):t}(r.default.iptc[a],c,n,o)};return function(e){return r.default.iptc[e]&&r.default.iptc[e].repeatable}(a)&&(d.repeatable=!0),function(e){return r.default.iptc[e]&&void 0!==r.default.iptc[e].encoding_name}(a)&&(d.encoding=r.default.iptc[a].encoding_name(c)),{tag:d,tagSize:u}}e.default={read:function(e,t){try{var n=function(e,t){for(;t+c<=e.byteLength;){var n=s(e,t);if(l(n))return{naaBlock:n,dataOffset:t};t+=c+n.size+p(n)}throw new Error("No IPTC NAA resource block.")}(e,t),r=n.naaBlock,i=n.dataOffset;return function(e,t,n){for(var r={},i=void 0,o=(n+=c)+t.size;n<o&&n<e.byteLength;){var a=m(e,n,r,i),u=a.tag,d=a.tagSize;if(null===u)break;"encoding"in u&&(i=u.encoding),void 0===r[u.name]||void 0===u.repeatable?r[u.name]={id:u.id,value:u.value,description:u.description}:(r[u.name]instanceof Array||(r[u.name]=[{id:r[u.name].id,value:r[u.name].value,description:r[u.name].description}]),r[u.name].push({id:u.id,value:u.value,description:u.description})),n+=f+d}return r}(e,r,i)}catch(e){return{}}}}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t],void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={1:"InteroperabilityIndex"}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t,n(0)],void 0===(o="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={0:{name:"GPSVersionID",description:function(e){return 2===e[0]&&2===e[1]&&0===e[2]&&0===e[3]?"Version 2.2":"Unknown"}},1:{name:"GPSLatitudeRef",description:function(e){var t=e.join("");return"N"===t?"North latitude":"S"===t?"South latitude":"Unknown"}},2:{name:"GPSLatitude",description:function(e){return e[0]+e[1]/60+e[2]/3600}},3:{name:"GPSLongitudeRef",description:function(e){var t=e.join("");return"E"===t?"East longitude":"W"===t?"West longitude":"Unknown"}},4:{name:"GPSLongitude",description:function(e){return e[0]+e[1]/60+e[2]/3600}},5:{name:"GPSAltitudeRef",description:function(e){return 0===e?"Sea level":1===e?"Sea level reference (negative value)":"Unknown"}},6:{name:"GPSAltitude",description:function(e){return e+" m"}},7:{name:"GPSTimeStamp",description:function(e){return e.map(function(e){return 1===(""+e).length?"0"+e:e}).join(":")}},8:"GPSSatellites",9:{name:"GPSStatus",description:function(e){var t=e.join("");return"A"===t?"Measurement in progress":"V"===t?"Measurement Interoperability":"Unknown"}},10:{name:"GPSMeasureMode",description:function(e){var t=e.join("");return"2"===t?"2-dimensional measurement":"3"===t?"3-dimensional measurement":"Unknown"}},11:"GPSDOP",12:{name:"GPSSpeedRef",description:function(e){var t=e.join("");return"K"===t?"Kilometers per hour":"M"===t?"Miles per hour":"N"===t?"Knots":"Unknown"}},13:"GPSSpeed",14:{name:"GPSTrackRef",description:function(e){var t=e.join("");return"T"===t?"True direction":"M"===t?"Magnetic direction":"Unknown"}},15:"GPSTrack",16:{name:"GPSImgDirectionRef",description:function(e){var t=e.join("");return"T"===t?"True direction":"M"===t?"Magnetic direction":"Unknown"}},17:"GPSImgDirection",18:"GPSMapDatum",19:{name:"GPSDestLatitudeRef",description:function(e){var t=e.join("");return"N"===t?"North latitude":"S"===t?"South latitude":"Unknown"}},20:{name:"GPSDestLatitude",description:function(e){return e[0]+e[1]/60+e[2]/3600}},21:{name:"GPSDestLongitudeRef",description:function(e){var t=e.join("");return"E"===t?"East longitude":"W"===t?"West longitude":"Unknown"}},22:{name:"GPSDestLongitude",description:function(e){return e[0]+e[1]/60+e[2]/3600}},23:{name:"GPSDestBearingRef",description:function(e){var t=e.join("");return"T"===t?"True direction":"M"===t?"Magnetic direction":"Unknown"}},24:"GPSDestBearing",25:{name:"GPSDestDistanceRef",description:function(e){var t=e.join("");return"K"===t?"Kilometers":"M"===t?"Miles":"N"===t?"Knots":"Unknown"}},26:"GPSDestDistance",27:{name:"GPSProcessingMethod",description:t.getEncodedString},28:{name:"GPSAreaInformation",description:t.getEncodedString},29:"GPSDateStamp",30:{name:"GPSDifferential",description:function(e){return 0===e?"Measurement without differential correction":1===e?"Differential correction applied":"Unknown"}}}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t,n(0)],void 0===(o="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};e.default={33434:"ExposureTime",33437:"FNumber",34850:{name:"ExposureProgram",description:function(e){return 0===e?"Undefined":1===e?"Manual":2===e?"Normal program":3===e?"Aperture priority":4===e?"Shutter priority":5===e?"Creative program":6===e?"Action program":7===e?"Portrait mode":8===e?"Landscape mode":"Unknown"}},34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:{name:"OECF",description:function(){return"[Raw OECF table data]"}},36864:{name:"ExifVersion",description:function(e){return(0,t.getStringValue)(e)}},36867:"DateTimeOriginal",36868:"DateTimeDigitized",37121:{name:"ComponentsConfiguration",description:function(e){return e.map(function(e){return 49===e?"Y":50===e?"Cb":51===e?"Cr":52===e?"R":53===e?"G":54===e?"B":void 0}).join("")}},37122:"CompressedBitsPerPixel",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBiasValue",37381:"MaxApertureValue",37382:"SubjectDistance",37383:{name:"MeteringMode",description:function(e){return 1===e?"Average":2===e?"CenterWeightedAverage":3===e?"Spot":4===e?"MultiSpot":5===e?"Pattern":6===e?"Partial":255===e?"Other":"Unknown"}},37384:{name:"LightSource",description:function(e){return 1===e?"Daylight":2===e?"Fluorescent":3===e?"Tungsten (incandescent light)":4===e?"Flash":9===e?"Fine weather":10===e?"Cloudy weather":11===e?"Shade":12===e?"Daylight fluorescent (D 5700 – 7100K)":13===e?"Day white fluorescent (N 4600 – 5400K)":14===e?"Cool white fluorescent (W 3900 – 4500K)":15===e?"White fluorescent (WW 3200 – 3700K)":17===e?"Standard light A":18===e?"Standard light B":19===e?"Standard light C":20===e?"D55":21===e?"D65":22===e?"D75":23===e?"D50":24===e?"ISO studio tungsten":255===e?"Other light source":"Unknown"}},37385:{name:"Flash",description:function(e){return 0===e?"Flash did not fire":1===e?"Flash fired":5===e?"Strobe return light not detected":7===e?"Strobe return light detected":9===e?"Flash fired, compulsory flash mode":13===e?"Flash fired, compulsory flash mode, return light not detected":15===e?"Flash fired, compulsory flash mode, return light detected":16===e?"Flash did not fire, compulsory flash mode":24===e?"Flash did not fire, auto mode":25===e?"Flash fired, auto mode":29===e?"Flash fired, auto mode, return light not detected":31===e?"Flash fired, auto mode, return light detected":32===e?"No flash function":65===e?"Flash fired, red-eye reduction mode":69===e?"Flash fired, red-eye reduction mode, return light not detected":71===e?"Flash fired, red-eye reduction mode, return light detected":73===e?"Flash fired, compulsory flash mode, red-eye reduction mode":77===e?"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected":79===e?"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected":89===e?"Flash fired, auto mode, red-eye reduction mode":93===e?"Flash fired, auto mode, return light not detected, red-eye reduction mode":95===e?"Flash fired, auto mode, return light detected, red-eye reduction mode":"Unknown"}},37386:"FocalLength",37396:{name:"SubjectArea",description:function(e){return 2===e.length?"Location; X: "+e[0]+", Y: "+e[1]:3===e.length?"Circle; X: "+e[0]+", Y: "+e[1]+", diameter: "+e[2]:4===e.length?"Rectangle; X: "+e[0]+", Y: "+e[1]+", width: "+e[2]+", height: "+e[3]:"Unknown"}},37500:{name:"MakerNote",description:function(){return"[Raw maker note data]"}},37510:{name:"UserComment",description:t.getEncodedString},37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",40960:{name:"FlashpixVersion",description:function(e){return e.map(function(e){return String.fromCharCode(e)}).join("")}},40961:{name:"ColorSpace",description:function(e){return 1===e?"sRGB":65535===e?"Uncalibrated":"Unknown"}},40962:"PixelXDimension",40963:"PixelYDimension",40964:"RelatedSoundFile",40965:"Interoperability IFD Pointer",41483:"FlashEnergy",41484:{name:"SpatialFrequencyResponse",description:function(){return"[Raw SFR table data]"}},41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:{name:"FocalPlaneResolutionUnit",description:function(e){return 2===e?"inches":3===e?"centimeters":"Unknown"}},41492:{name:"SubjectLocation",description:function(e){var t=n(e,2),r=t[0],i=t[1];return"X: "+r+", Y: "+i}},41493:"ExposureIndex",41495:{name:"SensingMethod",description:function(e){return 1===e?"Undefined":2===e?"One-chip color area sensor":3===e?"Two-chip color area sensor":4===e?"Three-chip color area sensor":5===e?"Color sequential area sensor":7===e?"Trilinear sensor":8===e?"Color sequential linear sensor":"Unknown"}},41728:{name:"FileSource",description:function(e){return 3===e?"DSC":"Unknown"}},41729:{name:"SceneType",description:function(e){return 1===e?"A directly photographed image":"Unknown"}},41730:{name:"CFAPattern",description:function(){return"[Raw CFA pattern table data]"}},41985:{name:"CustomRendered",description:function(e){return 0===e?"Normal process":1===e?"Custom process":"Unknown"}},41986:{name:"ExposureMode",description:function(e){return 0===e?"Auto exposure":1===e?"Manual exposure":2===e?"Auto bracket":"Unknown"}},41987:{name:"WhiteBalance",description:function(e){return 0===e?"Auto white balance":1===e?"Manual white balance":"Unknown"}},41988:{name:"DigitalZoomRatio",description:function(e){return 0===e?"Digital zoom was not used":e}},41989:{name:"FocalLengthIn35mmFilm",description:function(e){return 0===e?"Unknown":e}},41990:{name:"SceneCaptureType",description:function(e){return 0===e?"Standard":1===e?"Landscape":2===e?"Portrait":3===e?"Night scene":"Unknown"}},41991:{name:"GainControl",description:function(e){return 0===e?"None":1===e?"Low gain up":2===e?"High gain up":3===e?"Low gain down":4===e?"High gain down":"Unknown"}},41992:{name:"Contrast",description:function(e){return 0===e?"Normal":1===e?"Soft":2===e?"Hard":"Unknown"}},41993:{name:"Saturation",description:function(e){return 0===e?"Normal":1===e?"Low saturation":2===e?"High saturation":"Unknown"}},41994:{name:"Sharpness",description:function(e){return 0===e?"Normal":1===e?"Soft":2===e?"Hard":"Unknown"}},41995:{name:"DeviceSettingDescription",description:function(){return"[Raw device settings table data]"}},41996:{name:"SubjectDistanceRange",description:function(e){return 1===e?"Macro":2===e?"Close view":3===e?"Distant view":"Unknown"}},42016:"ImageUniqueID"}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t],void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={256:"ImageWidth",257:"ImageLength",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",270:"ImageDescription",271:"Make",272:"Model",273:"StripOffsets",274:{name:"Orientation",description:function(e){return 1===e?"top-left":2===e?"top-right":3===e?"bottom-right":4===e?"bottom-left":5===e?"left-top":6===e?"right-top":7===e?"right-bottom":8===e?"left-bottom":"Undefined"}},277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:{name:"ResolutionUnit",description:function(e){return 2===e?"inches":3===e?"centimeters":"Unknown"}},301:"TransferFunction",305:"Software",306:"DateTime",315:"Artist",318:"WhitePoint",319:"PrimaryChromaticities",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:{name:"YCbCrPositioning",description:function(e){return 1===e?"centered":2===e?"co-sited":"undefined "+e}},532:"ReferenceBlackWhite",33432:{name:"Copyright",description:function(e){return e.join("; ")}},34665:"Exif IFD Pointer",34853:"GPS Info IFD Pointer"}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t,n(13),n(12),n(11),n(10)],void 0===(o="function"==typeof(r=function(e,t,n,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=d(t),a=d(n),u=d(r),c=d(i);function d(e){return e&&e.__esModule?e:{default:e}}e.default={"0th":o.default,exif:a.default,gps:u.default,interoperability:c.default}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t,n(1)],void 0===(o="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(t),r={1:1,2:1,3:2,4:4,5:8,7:1,9:4,10:8},i={BYTE:1,ASCII:2,SHORT:3,LONG:4,RATIONAL:5,UNDEFINED:7,SLONG:9,SRATIONAL:10};function o(e,t){return e.getUint8(t)}function a(e,t,r){return e.getUint32(t,r===n.default.LITTLE_ENDIAN)}function u(e,t,r){return e.getInt32(t,r===n.default.LITTLE_ENDIAN)}e.default={getAsciiValue:function(e){return e.map(function(e){return String.fromCharCode(e)})},getByteAt:o,getAsciiAt:function(e,t){return e.getUint8(t)},getShortAt:function(e,t,r){return e.getUint16(t,r===n.default.LITTLE_ENDIAN)},getLongAt:a,getRationalAt:function(e,t,n){return a(e,t,n)/a(e,t+4,n)},getUndefinedAt:function(e,t){return o(e,t)},getSlongAt:u,getSrationalAt:function(e,t,n){return u(e,t,n)/u(e,t+4,n)},typeSizes:r,tagTypes:i,getTypeSize:function(e){if(void 0===i[e])throw new Error("No such type found.");return r[i[e]]}}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t,n(1),n(15),n(14)],void 0===(o="function"==typeof(r=function(e,t,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(t),o=u(n),a=u(r);function u(e){return e&&e.__esModule?e:{default:e}}var c="Exif IFD Pointer",d="GPS Info IFD Pointer",f="Interoperability IFD Pointer",s={1:o.default.getByteAt,2:o.default.getAsciiAt,3:o.default.getShortAt,4:o.default.getLongAt,5:o.default.getRationalAt,7:o.default.getUndefinedAt,9:o.default.getSlongAt,10:o.default.getSrationalAt};function l(e,t,n){return p(e,"0th",t,function(e,t,n){return t+o.default.getLongAt(e,t+4,n)}(e,t,n),n)}function p(e,t,n,r,i){var a=o.default.getTypeSize("SHORT"),u={},c=o.default.getShortAt(e,r,i);r+=a;for(var d=0;d<c;d++){var f=m(e,t,n,r,i);void 0!==f&&(u[f.name]={id:f.id,value:f.value,description:f.description}),r+=12}return u}function m(e,t,n,r,i){var u=o.default.getTypeSize("SHORT"),c=u+o.default.getTypeSize("SHORT"),d=c+o.default.getTypeSize("LONG"),f=o.default.getShortAt(e,r,i),s=o.default.getShortAt(e,r+u,i),l=o.default.getLongAt(e,r+c,i),p=void 0;if(void 0!==o.default.typeSizes[s]){if(function(e,t){return o.default.typeSizes[e]*t<=o.default.getTypeSize("LONG")}(s,l))p=g(e,r+d,s,l,i);else{var m=o.default.getLongAt(e,r+d,i);p=function(e,t,n,r,i){return t+n+o.default.typeSizes[r]*i<=e.byteLength}(e,n,m,s,l)?g(e,n+m,s,l,i):"<faulty value>"}if(s===o.default.tagTypes.ASCII&&(p=function(e){try{return e.map(function(e){return decodeURIComponent(escape(e))})}catch(t){return e}}(p=function(e){var t=[],n=0,r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){var c=a.value;"\0"!==c?(void 0===t[n]&&(t[n]=""),t[n]+=c):n++}}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return t}(p))),void 0!==a.default[t][f]){var v=void 0,y=void 0;return void 0!==a.default[t][f].name&&void 0!==a.default[t][f].description?(v=a.default[t][f].name,y=a.default[t][f].description(p)):(v=a.default[t][f],y=p instanceof Array?p.join(", "):p),{id:f,name:v,value:p,description:y}}return{id:f,name:"undefined-"+f,value:p,description:p}}}function g(e,t,n,r,i){for(var a=[],u=0;u<r;u++)a.push(s[n](e,t,i)),t+=o.default.typeSizes[n];return n===o.default.tagTypes.ASCII?a=o.default.getAsciiValue(a):1===a.length&&(a=a[0]),a}e.default={read:function(e,t){var n=i.default.getByteOrder(e,t),r=l(e,t,n);return r=function(e,t,n,r){return void 0!==e[f]?Object.assign(e,p(t,"interoperability",n,n+e[f].value,r)):e}(r=function(e,t,n,r){return void 0!==e[d]?Object.assign(e,p(t,"gps",n,n+e[d].value,r)):e}(r=function(e,t,n,r){return void 0!==e[c]?Object.assign(e,p(t,"exif",n,n+e[c].value,r)):e}(r,e,t,n),e,t,n),e,t,n)}}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t,n(2)],void 0===(o="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=2,r=65496,i=2,o=4,a=2,u=10,c=18,d=33,f=65472,s=65474,l=65476,p=65499,m=65501,g=65498,v=65504,y=65505,h=65517,S=65519,b=65534,A="Exif",P="http://ns.adobe.com/xap/1.0/",w="Photoshop 3.0";function D(e,n){var r=A.length;return e.getUint16(n,!1)===y&&(0,t.getStringFromDataView)(e,n+o,r)===A&&0===e.getUint8(n+o+r,!1)}function C(e,n){var r=P.length;return e.getUint16(n,!1)===y&&(0,t.getStringFromDataView)(e,n+o,r)===P&&0===e.getUint8(n+o+r,!1)}function I(e,n){var r=w.length;return e.getUint16(n,!1)===h&&(0,t.getStringFromDataView)(e,n+o,r)===w&&0===e.getUint8(n+o+r,!1)}function O(e,t){var n=e.getUint16(t,!1);return n>=v&&n<=S||n===b||n===f||n===s||n===l||n===p||n===m||n===g}e.default={check:function(e){if(e.byteLength<n||e.getUint16(0,!1)!==r)throw new Error("Invalid image format")},parseAppMarkers:function(e){for(var t=i,n=void 0,r=void 0,f=void 0,s=void 0,l=void 0;t+o+5<=e.byteLength;){if(D(e,t))n=e.getUint16(t+a,!1),r=t+u;else if(C(e,t))n=e.getUint16(t+a,!1),s=t+d,l=n-(d-a);else if(I(e,t))n=e.getUint16(t+a,!1),f=t+c;else{if(!O(e,t))break;n=e.getUint16(t+a,!1)}t+=a+n}return{hasAppMarkers:t>i,tiffHeaderOffset:r,iptcDataOffset:f,xmpDataOffset:s,xmpFieldLength:l}}}})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){var r,i,o;i=[t,n(17),n(16),n(9),n(5),n(3)],void 0===(o="function"==typeof(r=function(e,t,n,r,i,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.load=l,e.loadView=p;var a=s(t),u=s(n),c=s(r),d=s(i),f=s(o);function s(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{expanded:!1},n=void 0;try{n=new DataView(e)}catch(e){return console.warn("Warning: A full DataView implementation is not available. If you're using Node.js you probably want to do this:\n  1. Install a DataView polyfill, e.g. jdataview: npm install --save jdataview\n  2. Require that at the top of your script: global.DataView = require('jdataview');\nSee an example of this in the ExifReader example directory."),{}}return p(n,t)}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{expanded:!1},n=!1,r={};a.default.check(e);var i=a.default.parseAppMarkers(e),o=i.tiffHeaderOffset,s=i.iptcDataOffset,l=i.xmpDataOffset,p=i.xmpFieldLength;if(function(e){return void 0!==e}(o)){n=!0;var m=u.default.read(e,o);t.expanded?r.exif=m:r=Object.assign({},r,m)}if(function(e){return void 0!==e}(s)){n=!0;var g=c.default.read(e,s);t.expanded?r.iptc=g:r=Object.assign({},r,g)}if(function(e){return void 0!==e}(l)){n=!0;var v=d.default.read(e,l,p);t.expanded?r.xmp=v:r=Object.assign({},r,v)}if(!n)throw new f.default.MetadataMissingError;return r}e.default={load:l,loadView:p,errors:f.default}})?r.apply(t,i):r)||(e.exports=o)}])});
//# sourceMappingURL=exif-reader.js.map