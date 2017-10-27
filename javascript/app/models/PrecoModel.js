class PrecoModel {
	
	constructor() {
		
	}

	calculation (valueIngredient, valueBorda, valueTamanho) {

		var pizza = valueIngredient + valueBorda;

		if (valueTamanho === 0) {

			pizza.toFixed(2);
			return pizza;

		} else {

			var result = (pizza * valueTamanho).toFixed(2);
			return parseFloat(result);

		}

	}
}