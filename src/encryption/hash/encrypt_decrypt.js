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
