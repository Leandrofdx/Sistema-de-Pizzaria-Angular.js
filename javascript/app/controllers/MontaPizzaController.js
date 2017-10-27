class MontaPizzaController {
	constructor(){

		this._value = document.querySelectorAll('.value');
		this._pizza = document.querySelectorAll('.list-group.demand');
		this._precoModel = new PrecoModel();
		this._reduceModel = new ReduceModel();
		
		this._time = Math.floor(Math.random() * (60 - 20 + 1) + 20);
		console.log('Tempo: '+this._time);  // Para facilitar processo de avaliação
	}


	selectIngredient(event) {

		//var element = event.target;
		var inputsCheckbox = document.querySelectorAll("input[type='checkbox']:checked");
		var inputs = document.querySelectorAll("input:checked");
		var inputsRadioBorda = document.querySelectorAll("input[name='borda']:checked");
		var inputsRadioTamanho = document.querySelectorAll("input[name='tamanho']:checked");
		

		var arrayValueCheckbox = [];
	 	for (var i = inputsCheckbox.length - 1; i >= 0; i--) {
	 		arrayValueCheckbox.push(parseFloat((inputsCheckbox[i].value)));
	 	};
		
		var arrayValueRadioBorda = [];
	 	for (var i = inputsRadioBorda.length - 1; i >= 0; i--) {
	 		arrayValueRadioBorda.push(parseFloat((inputsRadioBorda[i].value)));
	 	};
		
		var arrayValueRadioTamanho = [];
	 	for (var i = inputsRadioTamanho.length - 1; i >= 0; i--) {
	 		arrayValueRadioTamanho.push(parseFloat((inputsRadioTamanho[i].value)));
	 	};

		var pizza = [];
	 	for (var i = 0; i < inputs.length; i++) {
	 		pizza.push((inputs[i].getAttribute('data-x')));
	 	};

	 	var newPizza = [];
	 	for (var i = 0; i < pizza.length; i++) {
	 		newPizza.push("<li class='list-group-item'>"+pizza[i]+"</li>");
	 	};

	 	for (var i = 0; i < this._pizza.length; i++) {
		 	this._pizza[i].innerHTML = newPizza.join('');
	 	};

		this._setValue(this._precoModel.calculation(
			this._reduceModel.reduce(arrayValueCheckbox),
			this._reduceModel.reduce(arrayValueRadioBorda),
			this._reduceModel.reduce(arrayValueRadioTamanho)
		));
 	
	}

	_setValue(values) {

		for (var i = 0; i < this._value.length; i++) {
			this._value[i].value = values;
		};
	
	}

	finish() { 

		var last = this._value[this._value.length - 1];
		if (this._time > 40) {

			var desconto = (last.value * 10) / 100;
			var total = (last.value - desconto);

			parseFloat(total);

			this._applyValue(desconto, total, last);
			this._mensage(this._time);
			
			return false;

		} else {
			
				var last = this._value[this._value.length - 1];
				var total = (last.value - 0); 
				var x = total+10;
				
				last.value = x;
		} 

		this._mensage(this._time);
	}

	_mensage(time) {

		let wait = document.querySelector(".wait");
		wait.innerHTML = time+" min";
		
	}

	_applyValue(desconto, total, last) { 
			
		var desc = document.querySelector('.desc');
		var tot = document.querySelector('.total');

		desc.innerHTML = 'R$ '+ (desconto).toFixed(2); 
		tot.innerHTML = 'R$ '+ (total).toFixed(2); 

		var x = (total + 10).toFixed(2);
		last.value = x;
	}
}