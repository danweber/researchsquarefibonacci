fibonacci = {
    // This fibonacci implementation, just to be different, only
    // caches two numbers every 20 inputs.  This is still fast enough
    // that, when counting up, each number can be calculated in less
    // than two milliseconds (in nodejs on my relatively underpowered
    // VM).

    // NB: JavaScript's integer class will start dropping digits around
    // fib(79).
    cache: {0: 0, 1: 1},
    clear_cache: function() {
	this.cache = {0: 0, 1: 1};
    },
    calculate: function(n) {
	if (n in this.cache)
	    return this.cache[n];
	ret = this.calculate(n-2) + this.calculate(n-1);
	if (n % 20 == 0 || n % 20 == 1)
	    this.cache[n] = ret;
	return ret;
    }
};

