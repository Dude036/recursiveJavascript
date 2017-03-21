function fibbonacci(n) {
    if (n < 0) { return 0; }
    if (n <= 2) { return 1; }
    else { return fibbonacci(n-1) + fibbonacci(n-2); }
}

function pell(n) {
    if (n <= 0) { return 0; }
    if (n <= 1) { return 1; }

    return (2 * pell(n - 1) + pell(n -2));
}

function tribbonacci(n) {
    if (n <= 0) { return 0; }
    if (n < 3) { return 1; }

    return  tribbonacci(n-1) + tribbonacci(n-2) + tribbonacci(n-3);
}

function updateButton(numValue, idValue) {
    var text;
    var buttonID;
    if (idValue == "fRange") {
        text = "Fibb(";
        buttonID = document.getElementById('fButton');
    } else if (idValue == "pRange") {
        text = "Pell(";
        buttonID = document.getElementById('pButton');
    } else if (idValue == "tRange") {
        text = "Trib(";
        buttonID = document.getElementById('tButton');
    }
    text = text + numValue + ")"
    buttonID.value = text
}

function buttonClick(idValue) {
    var num;
    var buttonID;
    if (idValue == "fButton") {
        num = fibbonacci(document.getElementById('fRange').value);
        buttonID = document.getElementById('fText');
    } else if (idValue == "pButton") {
        num = pell(document.getElementById('pRange').value);
        buttonID = document.getElementById('pText');
    } else if (idValue == "tButton") {
        num = tribbonacci(document.getElementById('tRange').value);
        buttonID = document.getElementById('tText');
    }
    buttonID.value = num;
}
