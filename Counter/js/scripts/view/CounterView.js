define(['controller/CounterController', 'model/CounterModel','jquery'], function CounterView(controller, model, $) {
	//Cache the DOM
	var $el = $("#container");
	var $display = $el.find("#display");
	var $addButton = $el.find("#addButton");
	var $subButton = $el.find("#subButton");
	var $dblButton = $el.find("#dblButton");
	var $hlfButton = $el.find("#hlfButton");

	//Bind Events
	$addButton.on('click', function() {
		render(model.add(controller.getCurrentNum()));
	});
	$subButton.on('click', function() {
		render(model.sub(controller.getCurrentNum()));
	});
	$dblButton.on('click', function() {
		render(model.dbl(controller.getCurrentNum()));
	});
	$hlfButton.on('click', function() {
		render(model.hlf(controller.getCurrentNum()));
	});
	//Render display
	function render(num) {
		$display.html(num);
	}
	
	//initialize view with initial value
	render(model.val);

	return{
		display: $display
	}
});

