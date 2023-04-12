const createStatusCard = (status_details) => {
    const train_name = status_details['trainname'] //1
    const date = status_details['date']            //2   
    const train_from = status_details['trainfrom']  //3
    const train_to = status_details['trainto']      //4
    const pnr = status_details['pnr']               //5
    const time = status_details['time']             //6
    const ticket_class = status_details['ticketclass']  //7
    const ticket_status = status_details['ticketstatus']  //8

    // inside-status-1
    const inside_status_1 = document.createElement('div')
    inside_status_1.classList.add("inside-status")
    const status_heading_1 = document.createElement('p')
    status_heading_1.classList.add('status-heading')
    status_heading_1.textContent = "TRAIN NAME"
    const status_value_1 = document.createElement("p")
    status_value_1.classList.add("status-value")
    status_value_1.textContent = train_name
    inside_status_1.appendChild(status_heading_1)
    inside_status_1.appendChild(status_value_1)

    // container-creation
    const container = document.querySelector('.status-container')
    container.appendChild(inside_status_1)


    // inside-status-2
    const inside_status_2 = document.createElement('div')
    inside_status_2.classList.add("inside-status")
    const status_heading_2 = document.createElement('p')
    status_heading_2.classList.add('status-heading')
    status_heading_2.textContent = "DATE"
    const status_value_2 = document.createElement("p")
    status_value_2.classList.add("status-value")
    status_value_2.textContent = date
    inside_status_2.appendChild(status_heading_2)
    inside_status_2.appendChild(status_value_2)
    container.appendChild(inside_status_2)

    // inside-status-3
    const inside_status_3 = document.createElement('div')
    inside_status_3.classList.add("inside-status")
    const status_heading_3 = document.createElement('p')
    status_heading_3.classList.add('status-heading')
    status_heading_3.textContent = "TRAIN FROM"
    const status_value_3 = document.createElement("p")
    status_value_3.classList.add("status-value")
    status_value_3.textContent = train_from
    inside_status_3.appendChild(status_heading_3)
    inside_status_3.appendChild(status_value_3)
    container.appendChild(inside_status_3)

    // inside-status-4
    const inside_status_4 = document.createElement('div')
    inside_status_4.classList.add("inside-status")
    const status_heading_4 = document.createElement('p')
    status_heading_4.classList.add('status-heading')
    status_heading_4.textContent = "TRAIN TO"
    const status_value_4 = document.createElement("p")
    status_value_4.classList.add("status-value")
    status_value_4.textContent = train_to
    inside_status_4.appendChild(status_heading_4)
    inside_status_4.appendChild(status_value_4)
    container.appendChild(inside_status_4)

    // inside-status-5
    const inside_status_5 = document.createElement('div')
    inside_status_5.classList.add("inside-status")
    const status_heading_5 = document.createElement('p')
    status_heading_5.classList.add('status-heading')
    status_heading_5.textContent = "PNR NUMBER"
    const status_value_5 = document.createElement("p")
    status_value_5.classList.add("status-value")
    status_value_5.textContent = pnr
    inside_status_5.appendChild(status_heading_5)
    inside_status_5.appendChild(status_value_5)
    container.appendChild(inside_status_5)

    // inside-status-6
    const inside_status_6 = document.createElement('div')
    inside_status_6.classList.add("inside-status")
    const status_heading_6 = document.createElement('p')
    status_heading_6.classList.add('status-heading')
    status_heading_6.textContent = "TIME"
    const status_value_6 = document.createElement("p")
    status_value_6.classList.add("status-value")
    status_value_6.textContent = time
    inside_status_6.appendChild(status_heading_6)
    inside_status_6.appendChild(status_value_6)
    container.appendChild(inside_status_6)

    // inside-status-7
    const inside_status_7 = document.createElement('div')
    inside_status_7.classList.add("inside-status")
    const status_heading_7 = document.createElement('p')
    status_heading_7.classList.add('status-heading')
    status_heading_7.textContent = "TICKET CLASS"
    const status_value_7 = document.createElement("p")
    status_value_7.classList.add("status-value")
    status_value_7.textContent = ticket_class
    inside_status_7.appendChild(status_heading_7)
    inside_status_7.appendChild(status_value_7)
    container.appendChild(inside_status_7)

    // inside-status-8
    const inside_status_8 = document.createElement('div')
    inside_status_8.classList.add("inside-status")
    const status_heading_8 = document.createElement('p')
    status_heading_8.classList.add('status-heading')
    status_heading_8.textContent = "TICKET STATUS"
    const status_value_8 = document.createElement("p")
    status_value_8.classList.add("status-value")
    status_value_8.textContent = ticket_status
    inside_status_8.appendChild(status_heading_8)
    inside_status_8.appendChild(status_value_8)
    container.appendChild(inside_status_8)

}

const insertSeatDetails = (seat_details) => {
    let passenger_name = seat_details['passengername']
    let passenger_age = seat_details['passengerage']
    let _position = seat_details['position']
    let seat_no = seat_details['seatno']
    let _status = seat_details['status']

    const container = document.querySelector('.passenger-container')

    let total_container = document.createElement('div')
    total_container.classList.add('seat-container')
    
    // val-1
    let seat_container_1 = document.createElement('div')
    seat_container_1.classList.add('inside-seat')

    let seat_content_heading_1 = document.createElement('pre')
    seat_content_heading_1.textContent = "PASSENGER NAME : "

    let seat_value_1 = document.createElement('p')
    seat_value_1.textContent = passenger_name

    seat_container_1.appendChild(seat_content_heading_1)
    seat_container_1.appendChild(seat_value_1)
    total_container.appendChild(seat_container_1)

    // val-2
    let seat_container_2 = document.createElement('div')
    seat_container_2.classList.add('inside-seat')

    let seat_content_heading_2 = document.createElement('pre')
    seat_content_heading_2.textContent = "AGE            : "

    let seat_value_2 = document.createElement('p')
    seat_value_2.textContent = passenger_age

    seat_container_2.appendChild(seat_content_heading_2)
    seat_container_2.appendChild(seat_value_2)
    total_container.appendChild(seat_container_2)

    // val-3
    let seat_container_3 = document.createElement('div')
    seat_container_3.classList.add('inside-seat')

    let seat_content_heading_3 = document.createElement('pre')
    seat_content_heading_3.textContent = "POSITION       : "

    let seat_value_3 = document.createElement('p')
    seat_value_3.textContent = _position

    seat_container_3.appendChild(seat_content_heading_3)
    seat_container_3.appendChild(seat_value_3)
    total_container.appendChild(seat_container_3)

    // val-4
    let seat_container_4 = document.createElement('div')
    seat_container_4.classList.add('inside-seat')

    let seat_content_heading_4 = document.createElement('pre')
    seat_content_heading_4.textContent = "SEAT no.       : "

    let seat_value_4 = document.createElement('p')
    seat_value_4.textContent = seat_no

    seat_container_4.appendChild(seat_content_heading_4)
    seat_container_4.appendChild(seat_value_4)
    total_container.appendChild(seat_container_4)

    // val-5
    let seat_container_5 = document.createElement('div')
    seat_container_5.classList.add('inside-seat')

    let seat_content_heading_5 = document.createElement('pre')
    seat_content_heading_5.textContent = "STATUS         : "

    let seat_value_5 = document.createElement('p')
    seat_value_5.textContent = _status

    seat_container_5.appendChild(seat_content_heading_5)
    seat_container_5.appendChild(seat_value_5)
    total_container.appendChild(seat_container_5)

    container.appendChild(total_container)


}



const booking_fun = () => {
    const statusDetails = {
        "date": "2023-04-25",
        "pnr": 717633351,
        "seat": [
            {
                "passengerage": "12",
                "passengername": "bala",
                "position": "no choice",
                "seatno": 9,
                "status": "Successfull"
            },
            {
                "passengerage": "31",
                "passengername": "ba_",
                "position": "no choice",
                "seatno": 10,
                "status": "Successfull"
            }
        ],
        "ticketclass": "AC1 Tier",
        "ticketstatus": "Successfull",
        "time": "09:04:00",
        "trainfrom": "CBE",
        "trainname": "MGRR",  
        "trainto": "CHENNAI"
    } //const booking_fun end

    localStorage.setItem('bookedTicket', JSON.stringify(statusDetails))
    const status_details = JSON.parse(localStorage.getItem('bookedTicket'))
    const seat_details = statusDetails.seat

    var status_1 = document.createElement('div')
    status_1.classList.add('status-container')
    var passenger_div = document.createElement('div')
    passenger_div.classList.add('passenger-container')
    document.body.appendChild(status_1)
    document.body.appendChild(passenger_div)
    createStatusCard(status_details)

    let seat_len = seat_details.length
    // console.log(seat_len)

    // appending the heading
    const seat_heading_div = document.createElement("div")
    seat_heading_div.classList.add('status-head2')
    const seat_heading = document.createElement('p')
    seat_heading.textContent = "PASSENGER DETAILS"
    seat_heading_div.appendChild(seat_heading)
    passenger_div.appendChild(seat_heading_div)

    for (let i = 0; i < seat_len; i++){
        insertSeatDetails(seat_details[i])
    }

    const home_button = document.createElement('div')
    home_button.classList.add('btn')
    home_button.textContent = "OK"
    home_button.onclick = () => window.location.href = 'index.html'
    passenger_div.appendChild(home_button)    
}





window.onload = () => {
    booking_fun()
}
