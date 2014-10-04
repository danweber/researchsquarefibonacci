fibonacci = {
    cache: {0: 0, 1: 1},
    calculate: function(n) {
//	console.log(n);
	if (n in this.cache)
	    return this.cache[n];
	ret = this.calculate(n-1) + this.calculate(n-2);
	this.cache[n] = ret;
	return ret;
    }
};

