const stdin = require('process').stdin;
const stdout = require('process').stdout;

stdout.write("Enter the text: ");
stdin.on('data', function(data){

    let text = data.toString().trim();
    bigram(text);    
    process.exit();
});


function bigram(text) {

    text = text.toLowerCase().replace('.','');
    let bigram = {}
    let words = text.split(' ')
    for(let i = 0; i<=words.length-2; i++){

        bigram[words[i] + ' ' + words[i + 1]] = 0

        for(let x = 0; x<=i; x++){
            if( words[i] + ' ' + words[i + 1] === words[x] + ' ' + words[x + 1]){
                bigram[words[i] + ' ' + words[i + 1]] = bigram[words[i] + ' ' + words[i + 1]] + 1;
            }
        }
    }
    console.log(bigram);
   return(bigram);
}

module.exports = bigram;