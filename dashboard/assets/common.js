
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

}