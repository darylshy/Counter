define(['jquery', 'require'], function CounterController($, require) {

	var getCurrentNum = function() {
		return require('view/CounterView').display.html(); //necessary to get around circular dependency
	}

	return {
		getCurrentNum : getCurrentNum
	}
});

