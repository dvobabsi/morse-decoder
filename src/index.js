const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letter = [];
    let resultStr = '';

    // const space = '**********';
    // const dot = '10';
    // const dash = '11';

    for(let i = 0; i < expr.length; i += 10) {
        letter.push((+expr.slice(i, i+10)).toString());
    }
    letter = letter.map(s => {
        return s.replace(/10/g, ".").replace(/11/g, "-").replace(/NaN/g, " ");
    });

    for(let l of letter) {
        resultStr += MORSE_TABLE[l] || ' ';
    }

    return resultStr;
    
}

module.exports = {
    decode
}