// This runs in nodejs.
require('./fibonacci.js')

f = fibonacci;
for (var i = 0; i < 100; i++) {
    // around fib(79) exceed JavaScript's Integer range so precision will be lost.
    var start = new Date().getTime();
    ans = f.calculate(i);
    var end = new Date().getTime();
    var millisec = end - start;
    console.log(i + "\t" + millisec + "\t" + ans);
}
