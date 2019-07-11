Bundle.people = (function () {

  const visibleRep = nodecg.Replicant('namesVisible')
  const speakersArea = document.querySelector('#people')
  const addButton = document.querySelector('#addButton')
  const addName = document.querySelector('#addName')
  const addContact = document.querySelector('#addContact')
  const addContactType = document.querySelector('#addContactType')
  const errorBusy = document.querySelector('#error-busy')
  const errorDuplicate = document.querySelector('#error-duplicate')


  NodeCG.waitForReplicants(visibleRep)
  .then(() => {
    if (visibleRep.value === true) {
      speakersArea.classList.add("visible")
    }
    visibleRep.on('change', (newValue) => {
        newValue ? speakersArea.classList.add("visible") : speakersArea.classList.remove("visible")
    })
  })



  // Binding variables to replicants
  const peopleRep = nodecg.Replicant('people')
  let people
	const host1 = nodecg.Replicant('host1')
	const host2 = nodecg.Replicant('host2')
	const guest1 = nodecg.Replicant('guest1')
	const guest2 = nodecg.Replicant('guest2')
  const guest3 = nodecg.Replicant('guest3')

  peopleRep.on("change", value => {
    people = value
    render()
  })

  const render = () => {
    if (people) { renderList(people) }
  }

  // Check if it's safe to remove a person with given name from the list
  // (not currently picked on couch)

  // TODO: wait for replicants here, make prettier
  const safeToDelete = name => {
      if (name === host1.value 
        || name === host2.value 
        || name === guest1.value
        || name === guest2.value
        || name === guest3.value) {
          return false
        } else { 
          return true
        }
  }


  // Render the entire list from an array
  const renderList = (data = []) => {

    // Clear element contents every re-render
    while (speakersArea.firstChild) {
      speakersArea.removeChild(speakersArea.firstChild);
    }

    if (data.length > 0) {

      data.forEach(item => {
        // Creating person nodes
        const containerNode = document.createElement("div")
        containerNode.classList.add("person")

        const personData = document.createElement("div")
        personData.classList.add("data")

        const personName = document.createElement("span")
        personName.appendChild(document.createTextNode(item.name))
        personData.appendChild(personName)

        // Adding contact data span if exists
        if (item.contact) {
          const personContact = document.createElement("span")
          const icon = document.createElement("i")
          personContact.classList.add("contact")
          icon.classList.add("social")
          icon.classList.add(`social-${item.type}`)
          
          personContact.appendChild(document.createTextNode(item.contact))
          personContact.appendChild(icon)
          personData.appendChild(personContact)
        }

        const button = document.createElement("paper-button")
        button.appendChild(document.createTextNode("X"))

        containerNode.appendChild(button)
        containerNode.appendChild(personData)
        speakersArea.appendChild(containerNode)

        // Binding a removal to every button
        button.addEventListener('click', () => {
          if (safeToDelete(item.name) === true) {
            people = Bundle.common.removeFromArrayByProperty(people, "name", item.name)
            peopleRep.value = people
          } else {
            errorBusy.open()
          }
        })
      })

    }
  }

  const addNewPerson = () => {
    const newPerson = {
      name: addName.value,
      contact: addContact.value,
      type: addContactType.value,
    }
    if (addName.value === "") {
      addName.invalid = true
    } else {
      if (Bundle.common.isUniqueInArrayByProperty(people, "name", newPerson.name)) {
        people.push(newPerson)
        peopleRep.value = people
        addName.invalid = false
        addName.value = ""
        addContact.value = ""
        addContactType.value = ""
      } else {
        errorDuplicate.show()
      }
    }
  }

	addButton.addEventListener('click', () => {
		addNewPerson()
	})

})();