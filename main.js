const input = document.querySelector('textarea');
const message = document.querySelector('.div-show');
const messageInitial = document.querySelector('.div-hidden');
const resultMessage = document.getElementById('result-message');
const btnCopy = document.getElementById('btnCopy');


function btnEncrypt() {
    const text = encrypt(input.value);
    messageInitial.style.display = 'none';
    message.style.display = 'block';
    resultMessage.innerHTML = text;
    btnCopy.style.display = 'block'
}

function btnDecrypt() {
    const text = decrypt(input.value);
    messageInitial.style.display = 'none';
    message.style.display = 'block';
    resultMessage.innerHTML = text;
    btnCopy.style.display = 'block'
}

function encrypt(msg) {
    msg = msg.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');

    return msg;
}

function decrypt(msg) {
    msg = msg.replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

    return msg;
}

function copy() {
    navigator.clipboard.writeText(resultMessage.innerText)
        .then(() => {
            btnCopy.style.fontWeight = 'bold'
            btnCopy.innerText = 'Copiado!'
            setTimeout(() => {
                btnCopy.style.fontWeight = '400'
                btnCopy.innerText = 'Copiar'
            }, 1500);
        }, (err) => {
            console.log('unable to write to clipboard. Error: ', err);
        });
}