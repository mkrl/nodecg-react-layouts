// Global dashboard JS object. 
// Since they are scoped to iframes it doesn't make much sense, but just for clarity this is how it is done here.
const Bundle = {}

Bundle.common = (function () {

	// To be used with <nodecg-typeahead-input>, accepts current value replicant and element selector
	const replicateListAndValue = (repl, element) => {
		const replicant = nodecg.Replicant(repl)
		const input = document.querySelector(element)
		NodeCG.waitForReplicants(replicant)
		.then(() => {
			input.value = replicant.value
		})
		input.addEventListener('value-changed', () => {
			replicant.value = input.value
		})
		replicant.on("change", value => {
			input.value = value
		})
	}

	// Used with stuff like "people" replicant object. Removes an object with given property/value and returns a new array
	const removeFromArrayByProperty = (array, property, value) => array.filter( item => item[property] !== value )

	// Check if there is an item with given property/value
	const isUniqueInArrayByProperty = (array = [], property, value) => {
		let unique = true
		array.some( element => {
			if (element[property] === value) {
				unique = false
				return true
			}
		})
		return unique
	}

	return {
		replicateListAndValue: replicateListAndValue,
		removeFromArrayByProperty: removeFromArrayByProperty,
		isUniqueInArrayByProperty: isUniqueInArrayByProperty,
	}

})();