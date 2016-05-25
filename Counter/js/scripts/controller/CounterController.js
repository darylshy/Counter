define(['jquery', 'require'], function CounterController($, require) {

	var getCurrentNum = function() {
		return require('view/CounterView').display.html();
	}

	return {
		getCurrentNum : getCurrentNum
	}
});

