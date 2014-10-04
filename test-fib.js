require('./fibonacci.js')
f = fibonacci;
for (var i = 0; i < 10; i++) {
    console.log(i + "\t" + f.calculate(i));
}
