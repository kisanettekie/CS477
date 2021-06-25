/*Using Node Stream API, create a script to unzip a file (after you zip it). 
(Use zlib.createGunzip() stream)
*/

const fs = require ('fs');
const zlib = require('zlib');
const path = require ('path');

const gzip = zlib.createGzip();

const readable = fs.createReadStream(path.join(__dirname,'file.text'));
const compressed = fs.createReadStream(path.join(__dirname,'destination.txt.gz'));
readable.pipe(gzip).pipe(compressed);