const fs = require('fs')
const path = require('path')

 


function getDirectories (srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
}

function getFiles (srcpath) {
  return fs.readdirSync(srcpath)
}


if (process.argv.length <= 2) {
    console.log("Usage: " + __filename.split('/')[__filename.split('/').length-1] + " <input_directory_path>");
    process.exit(-1);
}

Array.prototype.swapItems = function(a, b){
    this[a] = this.splice(b, 1, this[a])[0];
    return this;
}

var baseInputDirectory = process.argv[2];
 
console.log(`Reading directory ${ baseInputDirectory }`);



var filesToConvert = getFiles(baseInputDirectory);
var specialSections = ['introduction','installation','authentication','promises','sorting'];

specialSections = specialSections.map( (s) => s + '.partial.md');
specialSections.reverse()


specialSections.forEach( (item) => {
  var index = filesToConvert.indexOf(item);
  filesToConvert.splice(index,1);
  filesToConvert.unshift(item);
})

var buf = "";

filesToConvert.forEach( (filename) => {


 
  buf += fs.readFileSync( path.join(baseInputDirectory, filename), 'utf-8');
  buf += "\n\n";

 
})




var outputFileName = baseInputDirectory.split('/')[baseInputDirectory.split('/').length -1]

fs.writeFileSync('./'+outputFileName+".md",buf);

