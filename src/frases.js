const frases = [
    'My name is Eduardo',
    'I go to school',
    'I like programming',
    'I am seventeen years',
]

function fraseRandom() {
    let numeroRandom = Math.floor(Math.random()*3);
    let frase = frases[numeroRandom];
    return frase
}


