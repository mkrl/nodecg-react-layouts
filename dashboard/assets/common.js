// Global dashboard JS object.
// Since they are scoped to iframes it doesn't make much sense, but just for clarity this is how it is done here.
const Bundle = {}

// Not using any kind of build system for dashboard => we don't need to lint this "unused" IIFE
// eslint-disable-next-line
Bundle.common = (function () {
  // To be used with <nodecg-typeahead-input>, accepts current value replicant and element selector
  const replicateListAndValue = (repl, element) => {
    const replicant = window.nodecg.Replicant(repl)
    const input = document.querySelector(element)
    window.NodeCG.waitForReplicants(replicant)
      .then(() => {
        input.value = replicant.value
      })
    input.addEventListener('value-changed', () => {
      replicant.value = input.value
    })
    replicant.on('change', value => {
      input.value = value
    })
  }

  // Toggle "visible" class on an area depending on a boolean replicant value. Accepts replicant object and area node.
  // TODO: make this more consistent and accept name and selector instead
  const replicateBooleanToDisableArea = (replicant, area) => {
    window.NodeCG.waitForReplicants(window.visibleRep)
      .then(() => {
        if (window.visibleRep.value === true) {
          area.classList.add('visible')
        }
        window.visibleRep.on('change', (newValue) => {
          if (newValue === true) {
            area.classList.add('visible')
          } else {
            area.classList.remove('visible')
          }
        })
      })
  }

  // Used with stuff like "people" replicant object. Removes an object with given property/value and returns a new array
  const removeFromArrayByProperty = (array, property, value) => array.filter(item => item[property] !== value)

  // Check if there is an item with given property/value
  const isUniqueInArrayByProperty = (array = [], property, value) => {
    let unique = true
    array.some(element => {
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
    replicateBooleanToDisableArea: replicateBooleanToDisableArea
  }
})()
