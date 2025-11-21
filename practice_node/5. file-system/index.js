const fs = require('fs');
const path= require("path");

const dataFolder = path.join(__dirname, "data");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
}

const filePath = path.join(dataFolder,'example.txt');
//sync way of creating the file
fs.writeFileSync(filePath,"hello from node js");
console.log('file created successfully');

const readContenctFromFile = fs.readFileSync(filePath,"utf8");
console.log('File content:',readContenctFromFile);

fs.appendFileSync(filePath,'\n this is a new line added to that file');
console.log("new file content added");


//async way of creating the file
const asyncFile = path.join(dataFolder, 'asyncExample.txt');

fs.writeFile(asyncFile, 'Hello Async Node.js!', err => {
    if (err) throw err;
    console.log('Async file created successfully.');

    // Reading asynchronously
    fs.readFile(asyncFile, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Async File Content:', data);

        // Appending asynchronously
        fs.appendFile(asyncFile, '\nThis is another line added async.', err => {
            if (err) throw err;
            console.log('New line added to async file.');

            // Reading updated content
            fs.readFile(asyncFile, 'utf8', (err, updatedData) => {
                if (err) throw err;
                console.log('Updated File Content:', updatedData);
            });
        });
    });
});
