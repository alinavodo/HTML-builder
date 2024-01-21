const fs = require("fs");
const path = require("path");
const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const file = path.join(__dirname,"text.txt");

const rl = readline.createInterface({ input, output });


fs.writeFile(file, '', () => { });

rl.question('Hello! Please, type your text \n', (answer) => {
    if (answer === 'exit') {
        rl.close();

    } 
    fs.writeFile(file, answer, () => { });
});

rl.on('line', (input) => {
    if (input === 'exit') {
        rl.close();
    } 
    fs.appendFile(file, '\n' + input, () => { });
});


process.on('exit', () => {
    console.log(`Thank you! Bye!`);
});
