const getPassengerCount = () => {
    const passengers = document.getElementById('passengers')
    return Number(passengers.value)
}


const renderPassengerCards = () => {

    const fare = localStorage.getItem('fare')
    var val = getPassengerCount()

    if (val > currentValue) {    
        for (let i = currentValue; i < val; i++) {
            createPassengerCard(Number(i)+1)
        }
    } else {
        const toRemove = currentValue - val
        removeCards(currentValue, val)
    }   
    currentValue = val
    updateFare(fare*val)
}

const removeCards = (currentValue, val) => {
    for (let i = currentValue; i > val; i--) {
        document.getElementById(`passenger_details_container${i}`).remove()
    }
}

const createPassengerCard = (num) => {

    // Root node
    const container = document.createElement('div')
    container.classList.add('flex')
    container.classList.add('center')
    container.id = `passenger_details_container${num}`

    const div = document.createElement('div')
    div.classList.add('passenger_details')
    div.id = `card${num}`
    container.appendChild(div)

    // Title
    const title = document.createElement('h3')
    title.textContent = `Passenger ${num}`
    title.classList.add('title')
    div.appendChild(title)

    // Name Field
    const name = document.createElement('div')
    name.classList.add('flex-row')

    var label = document.createElement('label')
    label.setAttribute('for', 'name')
    label.textContent = "Name"
    label.classList.add('name')


    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'name')
    input.setAttribute('id', `name${num}`)
    input.setAttribute('placeholder', 'Enter name')

    name.appendChild(label)
    name.appendChild(input)
    div.appendChild(name)

    // Age Field
    const age = document.createElement('div')
    age.classList.add('flex-row')

    label = document.createElement('label')
    label.setAttribute('for', 'age')
    label.textContent = "Age"
    label.classList.add('age')

    input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'age')
    input.setAttribute('id', `age${num}`)
    input.setAttribute('placeholder', 'Enter age')

    age.appendChild(label)
    age.appendChild(input)
    div.appendChild(age)

    // Gender
    const gender = document.createElement('div')
    gender.classList.add('flex-row')
    
    label = document.createElement('label')
    label.setAttribute('for', 'gender')
    label.textContent = "Gender"
    label.classList.add('gender')

    const select = document.createElement('select')
    select.name = "gender"
    select.id = `gender${num}`

    const option1 = document.createElement('option')
    option1.value = "Male"
    option1.textContent = "Male"

    const option2 = document.createElement('option')
    option2.value = "Female"
    option2.textContent = "Female"

    select.appendChild(option1)
    select.appendChild(option2)

    gender.appendChild(label)
    gender.appendChild(select)
    div.append(gender)


    // Mobile
    // const mobile = document.createElement('div')
    // mobile.classList.add('flex-row')

    // label = document.createElement('label')
    // label.setAttribute('for', 'mobile')
    // label.textContent = "Mobile"
    // label.classList.add('mobile')

    // input = document.createElement('input')
    // input.setAttribute('type', 'text')
    // input.setAttribute('name', 'mobile')
    // input.setAttribute('id', `mobile${num}`)
    // input.setAttribute('placeholder', 'Enter mobile number')

    // mobile.appendChild(label)
    // mobile.appendChild(input)
    // div.appendChild(mobile)

    // Appending Root Node to Parent
    const parent = document.getElementById('cards')
    const child = document.querySelector('.fare')
    parent.insertBefore(container, child)
}

const intializeTotalFare = () => {
    const fare = localStorage.getItem('fare');
    // To be sent by backend

    const div = document.createElement('div')
    div.textContent = "Total Fare: "
    div.classList.add('fare')

    const rupee = document.createElement('span')
    rupee.classList.add('rupee')
    rupee.textContent = '₹'
    div.appendChild(rupee)

    const parent = document.getElementById('cards')
    const child = document.getElementById('submit-btn')
    parent.insertBefore(div, child)

    updateFare(fare)
}

const updateFare = (value) => {
    const parent = document.querySelector('.fare')
    const prevFare = parent.lastChild
    if (prevFare.id == "amount") {
        prevFare.remove()
    }

    const fare = document.createElement('span')
    fare.id = "amount"
    fare.textContent = `${value}`
    parent.appendChild(fare) 
}

const handleSubmit = (event) => {
    // Prevent Submit by default
    event.preventDefault()

    // Array to store details of multiple passengers
    const passengerDetails = []

    
    const passengerCount = getPassengerCount()
    var name = ''
    var age = ''

    // Get names and ages of all passengers
    for (let i=1; i < passengerCount+1; i++) {
        name = document.getElementById(`name${i}`).value
        age = document.getElementById(`age${i}`).value

        passengerDetails.push({
            id: i,
            name,
            age
        })
    }

    // Get the existing ticket details and update it with passenger details
    const details = JSON.parse(localStorage.getItem('ticketDetails'))
    const ticketDetails = JSON.stringify({...details, passengerCount, passengerDetails})

    localStorage.setItem('ticketDetails', ticketDetails)

    // Redirect to review booking details page
    window.location.href = 'payment.html'
}

var currentValue = 1;

localStorage.setItem('fare', '220')
intializeTotalFare()

document.getElementById('passengers').addEventListener('click', renderPassengerCards)
document.getElementById('submit-btn').addEventListener('click', handleSubmit)