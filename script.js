const coffeeContainer = document.querySelector('main')

function setLoading() {
    coffeeContainer.innerHTML = ''
    const h2 = document.createElement('h2')
    const loading = document.createTextNode('Loading...')
    h2.appendChild(loading)
    coffeeContainer.appendChild(h2)
}

function displayCoffeeList(coffeeList) {  // coffeeList is what is coming back from the API
    coffeeContainer.innerHTML = ''
    coffeeList.map(coffee => {
        const card = document.createElement('div')   // For whicheve
        const img = document.createElement('img')
        const title = document.createElement('h3')
        const description = document.createElement('p')
        title.appendChild(document.createTextNode(coffee.title))
        description.appendChild(document.createTextNode(coffee.description))
        card.appendChild(title)
        card.appendChild(description)
        coffeeContainer.appendChild(card)
    })
}

function getCoffee() {
    setLoading()
    fetch(`https://api.sampleapis.com/coffee/hot`)
        .then(response => response.json()) // returns a promise
        .then(coffeeList => displayCoffeeList(coffeeList)) //printing out the coffee list
        .catch(console.error) //TO DO: display error for user
}


getCoffee()