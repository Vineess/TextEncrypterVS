const alphabet = "ABCDEFGHIJKLMNOPQRSTUVXYWZabcdefghijklmnopqrstuvxywz.,!'_-@#$%*()/:<>+=";

function encryptText(text, key) {
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        const textChar = text[i];
        const keychar = key[i % key.length];

        const textIndex = alphabet.indexOf(textChar);
        const keyIndex = alphabet.indexOf(keychar);

        if (textIndex === -1) {
            encryptedText += textChar;
        } else {
            const newIndex = (textIndex + keyIndex) % alphabet.length;
            encryptedText += alphabet[newIndex];
        }
    }

    return encryptedText;
}

function decryptText(encryptedText, key) {
    let decryptedText = "";

    for (let i = 0; i < encryptedText.length; i++) {
        const encryptedChar = encryptedText[i];
        const keychar = key[i % key.length];

        const encryptedIndex = alphabet.indexOf(encryptedChar);
        const keyIndex = alphabet.indexOf(keychar);

        if (encryptedIndex === -1) {
            decryptedText += encryptedChar;
        } else {
            let newIndex = (encryptedIndex - keyIndex + alphabet.length) % alphabet.length;
            decryptedText += alphabet[newIndex];
        }
    }

    return decryptedText;
}


function updateResult(isEncrypting){
    const text = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    let result = "";

    if(isEncrypting){
        result = encryptText(text, key);
    }else{
        result = decryptText(text, key);
    }

    document.getElementById("result").textContent = result;
}

document.getElementById("enc-btn").addEventListener('click', function(){
    updateResult(true);
});

document.getElementById("dec-btn").addEventListener('click', function(){
    updateResult(false);
});


document.addEventListener('DOMContentLoaded', () =>{
    updateResult(true);
});