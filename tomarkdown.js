const fs = require('fs')
const path = require('path')
const toMarkdown = require('to-markdown');
const sanitizeHtml = require('sanitize-html');
 


function getDirectories (srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
}

function getFiles (srcpath) {
  return fs.readdirSync(srcpath)
}



if (process.argv.length <= 3) {
    console.log("Usage: " + __filename.split('/')[__filename.split('/').length-1] + " <input_directory_path> <output_directory_path>");
    process.exit(-1);
}

var baseOutputDirectory = process.argv[3];
var baseInputDirectory = process.argv[2];
 
console.log(`Reading directory ${ baseInputDirectory }`);
console.log(`Writing directory ${ baseOutputDirectory }`);


var filesToConvert = getFiles(baseInputDirectory);

filesToConvert.forEach( (filename) => {


  console.log("Leggo questo file "+path.join(baseInputDirectory, filename))
  var html = fs.readFileSync( path.join(baseInputDirectory, filename), 'utf-8');

  if ("string" !== typeof html){
   console.log("Ma che cazzo mi hai dato", html);
  process.exit(1)
  }


  //console.log(html);
  //process.exit(1)

  //html = sanitizeHtml(html);
  var markdown = toMarkdown(html, { gfm: true });

  markdown = markdown.replace(/\<div.*\>/g,'');
  markdown = markdown.replace(/\<\/div\>/g,'');
  markdown = markdown.replace(/\<a.*\>/g,'');
  markdown = markdown.replace(/\<\/a\>/g,'');

  fs.writeFileSync( path.join(baseOutputDirectory,filename.replace('ejs','md')), markdown);

})

