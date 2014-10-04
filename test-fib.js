require('./fibonacci.js')
f = fibonacci;
for (var i = 0; i < 100; i++) {
    var start = new Date().getTime();
    ans = f.calculate(i);
    var end = new Date().getTime();
    var millisec = end - start;
    console.log(i + "\t" + millisec + "\t" + ans);
}
