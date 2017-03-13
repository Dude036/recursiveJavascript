// Initialize the HTMl and CSS file here.
document.body.onload = init;

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

function init() {
    document.write("<h1>Recursive Javascript Functions</h1><br>");

    var fib = fibbonacci(11);
    document.write("<p>Fibbonacci: " + fib + "</p>");

    var p = pell (11);
    document.write("<p>Pell: " + p + "</p>");

    var tri = tribbonacci(11);
    document.write("<p>Tribbonacci: " + tri + "</p>");
}
