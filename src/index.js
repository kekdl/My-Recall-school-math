module.exports = function solveEquation(equation) {
    // your implementation

    var instring = equation.replace(/x/g, "");
    instring = instring.replace(/ /g, "");
    instring = instring.replace("+", "");
    instring = instring.replace("^2", "");
    var s = instring.split("*");
    var D = Math.sqrt(s[1] * s[1] - 4 * s[0] * s[2]);
    var y = [];
    y[0] = Math.round((-s[1] - D) / (2 * s[0]));
    y[1] = Math.round((-s[1] + D) / (2 * s[0]));
    console.log(y);
    var solutions = [];
    if (y[0] < y[1]) {
        solutions[0] = y[0];
        solutions[1] = y[1];
    } else {
        solutions[0] = y[1];
        solutions[1] = y[0];
    }

    return solutions;






};