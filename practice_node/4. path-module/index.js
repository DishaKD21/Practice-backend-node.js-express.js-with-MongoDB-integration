const path = require('path');

console.log("directory:", path.dirname (__filename));
console.log("directory:", path.basename(__filename));
console.log("Extention:", path.extname(__filename));

//joins paths
const joinPath = path.join('/user','documents','node','projects');
console.log("JOin Path", joinPath);

//resolve absolute path
const resolvePath = path.resolve('/user', 'documents', 'node', 'projects');
console.log("Resolve Path", resolvePath);

//nosmalize irregular path
const normalizePath = path.normalize('/user//node/../projects');
console.log("Normalize Path", normalizePath);