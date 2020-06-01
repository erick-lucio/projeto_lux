import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
 
//const message, nonce, path, privateKey; // ...
//const hashDigest = sha256(nonce + message);
//const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));

var CryptoJS = require("crypto-js");
 
// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
 
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);
 
console.log(originalText); // 'my message'


    export function encrypt(msg1,key1){
        var CryptoJS = require("crypto-js");
            // Encrypt
            //var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
        return  CryptoJS.AES.encrypt(msg1,key1).toString();
    }
    export function  decrypt(msg_c,key12){
        var CryptoJS = require("crypto-js");
        var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
     
        // Decrypt
        var bytes  = CryptoJS.AES.decrypt(msg_c,key12);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        
        return  originalText; // 'my message'
    
    }
    


