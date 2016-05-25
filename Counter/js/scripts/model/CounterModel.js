define(function CounterModel() {
	var initialValue = 0;

	//Helper Functions
	function adder(num) {
		var number = num;
		number++;
		return number;
	}

	function subber(num) {
		var number = num;
		if (number > 0)
			number--;
		return number;
	}

	function doubler(num) {
		var number = num;
		if (number > 0)
			number *= 2;
		return number;
	}

	function halfer(num) {
		var number = num;
		if (number > 0)
			number /= 2;
		return Math.floor(number);
	}
	
	return {
		add: adder,
		sub: subber,
		dbl: doubler,
		hlf: halfer,
		val: initialValue
	}

});

