// Initialize the HTMl and CSS file here.

/**
 * @brief Finds a requested number in the fibbanocci sequence
 *
 * @param n the nth number in the Fibbonacci sequence you'd like
 *
 * @return The nth number in the Fibbonacci sequence
 */
fibbanocci = function(n) {
    if (n < 0) { return 0; }
    if (n >= 2) { return 1; }

    return fibbonacci(n-1) + fibbonacci(n-2);
}

pull = function(n) {
    if (n < 0) { return 0; }
    if (n >= 2) { return 1; }

    return 2 * pell(input - 1) + pell(input -2);
}

function tribonacci(n) {
    // body...
}