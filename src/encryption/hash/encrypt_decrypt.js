import crypto from 'crypto';
import {pass,t} from './hash';

var key = pass.body;
var text = t.body;


function encrypt(key, data) {
    var cipher = crypto.createCipher('aes-256-cbc', key);
    var crypted = cipher.update(text, 'utf-8', 'hex');
    crypted += cipher.final('hex');

    return crypted;
}

function decrypt(key, data) {
    var decipher = crypto.createDecipher('aes-256-cbc', key);
    var decrypted = decipher.update(data, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
}
const match = (data)=>{

    if(decrypt(key,data)==text){
        return 200;
    }
    else{
        return 500;
    }
}



export {
    match
}


// var text = "123|a123123123123123";
// console.log("Original Text: " + text);

// var encryptedText = encrypt(key, text);
// console.log("Encrypted Text: " + encryptedText);
// var decryptedText = decrypt(key, encryptedText);
// console.log("Decrypted Text: " + decryptedText);

// console.log("\nAnd again...\n");

// console.log("Original Text: " + text);
// encryptedText = encrypt(key, text);
// console.log("Encrypted Text: " + encryptedText);
// decryptedText = decrypt(key, encryptedText);
// console.log("Decrypted Text: " + decryptedText);

// text = "this is another text";
// key = "this is another key";

// console.log("\nNew text: & key: " + text);

// encryptedText = encrypt(key, text);
// console.log("Encrypted Text: " + encryptedText);
// decryptedText = decrypt(key, encryptedText);
// console.log("Decrypted Text: " + decryptedText);