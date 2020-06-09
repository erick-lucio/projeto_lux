const CryptoJS = require('crypto-js');

function hashString(key,textToCrypt){
  
  return CryptoJS.AES.encrypt(textToCrypt, key);
};

function decryptString(key,textToDecrypt){
  
  const bytes = CryptoJS.AES.decrypt(textToDecrypt, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  
  return originalText;
};
export default {decryptString,hashString}
/*
const bcrypt = require("bcryptjs")




    async function comparaString(stringUnhashed,stringHashed){
        if(await bcrypt.compare(stringUnhashed,stringHashed)) {
            return true;
        } else {
            return false;
        }
    }
    async function hashString(stringUnhashed){
        const hashedPassword = await bcrypt.hash(stringUnhashed, 10)
        console.log(hashedPassword+ " : "+stringUnhashed)
        return hashedPassword;
    } 
    

export default {comparaString,hashString}
*/