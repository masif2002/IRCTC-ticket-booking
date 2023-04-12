const CreateTrainCard = (train_detail) => {
  console.log(train_detail)
  const name = train_detail['trainname']
  const id = train_detail['trainid']
  const st_time = train_detail['starttime']
  const t_from = train_detail['trainfrom']
  const st_date = train_detail['startdate']
  const dur = train_detail['duration']
  const end_time = train_detail['endtime']
  const t_to = train_detail['trainto']
  const end_date = train_detail['enddate']
  const seats = train_detail['class']
  
  // train
  const train = document.createElement('div')
  train.classList.add("train")

  // top
  const top = document.createElement('div')
  top.classList.add("top")
  // train_name
  const name_ele = document.createElement('p')
  name_ele.classList.add("name")
  const train_name = document.createTextNode(`${name}`)
  name_ele.appendChild(train_name)
  // train_id
  const id_ele = document.createElement('p')
  id_ele.classList.add("id")
  const train_id = document.createTextNode(`${id}`)
  id_ele.appendChild(train_id)

  // append to top
  top.appendChild(name_ele)
  top.appendChild(id_ele)

  // append TOP to TRAIN
  train.appendChild(top)


  // bottom
  const bottom = document.createElement('div')
  bottom.classList.add("bottom")


  // from_div
  const from_ele = document.createElement('div')
  from_ele.classList.add("from")
  // start time
  const start_time_ele = document.createElement('p')
  const train_start_time = document.createTextNode(`${st_time}`)
  start_time_ele.appendChild(train_start_time)
  from_ele.appendChild(start_time_ele)
  // split
  const split_ele_1 = document.createElement('p')
  split_ele_1.classList.add("split")
  const split_1 = document.createTextNode("|")
  split_ele_1.appendChild(split_1)
  from_ele.appendChild(split_ele_1)
  // train_from
  const train_from_ele = document.createElement('p')
  const train_from = document.createTextNode(`${t_from}`)
  train_from_ele.appendChild(train_from)
  from_ele.appendChild(train_from_ele)
  // split
  const split_ele_2 = document.createElement('p')
  split_ele_2.classList.add("split")
  const split_2 = document.createTextNode("|")
  split_ele_2.appendChild(split_2)
  from_ele.appendChild(split_ele_2)
  // start date
  const start_date_ele = document.createElement('p')
  const train_start_date = document.createTextNode(`${st_date}`)
  start_date_ele.appendChild(train_start_date)
  from_ele.appendChild(start_date_ele)
  // add from div to bottom
  bottom.appendChild(from_ele)


  // duration
  const duration_ele = document.createElement('p')
  duration_ele.classList.add('duration')
  const train_duration = document.createTextNode(`----- ${dur} -----`)
  duration_ele.appendChild(train_duration)
  bottom.appendChild(duration_ele)

  // to div
  const to_ele = document.createElement('div')
  to_ele.classList.add("to")
  // end time
  const end_time_ele = document.createElement('p')
  const train_end_time = document.createTextNode(`${end_time}`)
  end_time_ele.appendChild(train_end_time)
  to_ele.appendChild(end_time_ele)
  // split
  const split_ele_3 = document.createElement('p')
  split_ele_3.classList.add("split")
  const split_3 = document.createTextNode("|")
  split_ele_3.appendChild(split_3)
  to_ele.appendChild(split_ele_3)
  // train_to
  const train_to_ele = document.createElement('p')
  const train_to = document.createTextNode(`${t_to}`)
  train_to_ele.appendChild(train_to)
  to_ele.appendChild(train_to_ele)
  // split
  const split_ele_4 = document.createElement('p')
  split_ele_4.classList.add("split")
  const split_4 = document.createTextNode("|")
  split_ele_4.appendChild(split_4)
  to_ele.appendChild(split_ele_4)
  // end date
  const end_date_ele = document.createElement('p')
  const train_end_date = document.createTextNode(`${end_date}`)
  end_date_ele.appendChild(train_end_date)
  to_ele.appendChild(end_date_ele)
  // add to div to bottom
  bottom.appendChild(to_ele)

  // append BOTTOM to TRAIN
  train.appendChild(bottom)




  // seats
  const seats_ele = document.createElement('div')
  seats_ele.classList.add('seats')
  seats_ele.setAttribute('id','seats')
  // append SEATS to TRAIN
  train.appendChild(seats_ele)
  
  // Adding each seatype to train
  Object.keys(seats).forEach(key => {

    // seat div
    const seat_ele = document.createElement('div')
    seat_ele.classList.add("seat")
    seat_ele.setAttribute('id',`${key}`)
    // seat type
    const seat_type_ele = document.createElement('p')
    seat_type_ele.innerText=`${key}`;
    seat_type_ele.classList.add('seat-type')
    seat_ele.appendChild(seat_type_ele)
    // seat avail
    const seat_avail_ele = document.createElement('p')
    seat_avail_ele.innerText=`Available - ${seats[key][0]}`;
    seat_avail_ele.classList.add('seat-avail')
    seat_ele.appendChild(seat_avail_ele)


    // For each TRAIN remove : SeatColor, DisableBookBtn, TicketFare 
    seat_ele.addEventListener('click',(e)=>
    {
        // console.log(e.target,id)

        // disable all other book-btn
        disable_all_book_btns()
        // remove all tic fare
        remove_all_tic_fare()

        // color the seat-avail element
        if (e.target.classList.contains('seat-avail') ) {
            if(e.target.classList.contains("color") ){
              e.target.classList.remove("color");
              document.getElementById(`${id}`).classList.add("disabled");
              // removing seat-types corresponding fare amt
              tic_fare_ele.innerHTML=``
              // clear user selection from local storage
              clear_user_selection()
              
            }
            else{
              e.target.classList.add("color");
              document.getElementById(`${id}`).classList.remove("disabled");
              // setting seat-types corresponding fare amt
              tic_fare_ele.innerHTML=`${seats[`${key}`][1]} Rs/-` 
              // add user selection to local storage
              add_user_selection(name,id, key,seats[key][1])
            }
        }

        // color the corresponding seat-avail element of seat-type element
        else{
          if(e.target.nextElementSibling.classList.contains("color") ){
            e.target.nextElementSibling.classList.remove("color");
            document.getElementById(`${id}`).classList.add("disabled");
            // removing seat-types corresponding fare amt
            tic_fare_ele.innerHTML=``
            // clear user selection from local storage
            clear_user_selection()

          }
          else{
            e.target.nextElementSibling.classList.add("color");
            document.getElementById(`${id}`).classList.remove("disabled");
            // setting seat-types corresponding fare amt
            tic_fare_ele.innerHTML=`${seats[`${key}`][1]} Rs/-`
            // add user selection to local storage
            add_user_selection(name,id, key,seats[key][1])
          }

        } 
        // remove all seat color except self
        remove_siblings_seat_color(e)

    })
    
    // add to seats
    seats_ele.appendChild(seat_ele)


  })

  
  // book now
  const book_ele = document.createElement('div')
  book_ele.classList.add("book")
  // book-btn
  const book_btn = document.createElement('a')
  var linkText = document.createTextNode("Book Now");
  book_btn.appendChild(linkText);
  book_btn.setAttribute('id',`${id}`)
  book_btn.title = "Book Now"
  book_btn.classList.add('book-btn')
  book_btn.classList.add('disabled')
  book_btn.title = "Book now";
  book_btn.href = "/";
  book_ele.appendChild(book_btn)
  // tic-fare-ele
  const tic_fare_ele = document.createElement('p')  
  tic_fare_ele.classList.add('tic_price')
  tic_fare_ele.setAttribute('id','fare')
  book_ele.appendChild(tic_fare_ele);
  train.appendChild(book_ele)

  
  

  // console.log(train)
  // ADDING TRAIN TO TRAINS
  var trains = document.getElementById('trains')
  // console.log(trains)
  trains.appendChild(train)

}

const remove_siblings_seat_color = (e) => {
    const CousinSeats=[...document.querySelectorAll(".seat-avail")];

    for(var Seat of CousinSeats)
    {
      // console.log(Seat == e.target)
      if (Seat == e.target || Seat == e.target.nextElementSibling ){
        continue
      }
      if( Seat.classList.contains("color")){
        Seat.classList.remove("color");
      }          
    }
}

const disable_all_book_btns = () => {
  const CousinBook = [...document.querySelectorAll(".book-btn")]

  for( var Btn of CousinBook)
  {
    Btn.classList.add("disabled")
  }
}

const remove_all_tic_fare = () => {
  const tic_fares = [...document.querySelectorAll(".tic_price")]

  for ( var tic_fare of tic_fares)
  {
    tic_fare.innerHTML=``
  }
}

const clear_user_selection = () => {
  localStorage.setItem("SelectedTrainName",null)
  localStorage.setItem("SelectedTrainId",null)
  localStorage.setItem("SelectedSeatType",null)
  localStorage.setItem("SelectedSeatFare",null)
}

const add_user_selection = (train_name,train_id,selected_seat_type,selected_seat_fare) => {
  console.log('NAME: ',train_name)
  console.log('ID: ',train_id)
  console.log('SEAT-TYPE: ',selected_seat_type)
  console.log('SEAT-FARE: ',selected_seat_fare)
  localStorage.setItem("SelectedTrainName",train_name)
  localStorage.setItem("SelectedTrainId",train_id)
  localStorage.setItem("SelectedSeatType",selected_seat_type)
  localStorage.setItem("SelectedSeatFare",selected_seat_fare)

}


const createTrains = () => {

  // RESULT DATA
  // const train_details = JSON.parse(localStorage.getItem('train_result'))
  // console.log(train_details)

  // dummy data
  const train_details = [
    {
        "class": {
            "AC1 Tier": [200,150],
            "AC2 Tier": [200,250],
            "AC3 Tier": [200,350]
        },
        "duration": "7:40",
        "enddate": "2023-01-20",
        "endtime": "16:08:02",
        "startdate": "2023-01-15",
        "starttime": "09:04:00",
        "trainfrom": "CBE",
        "trainid": 1,
        "trainname": "KOVAI EXPRESS",
        "trainto": "CHENNAI"
    },
    {
        "class": {
            "AC1 Tier": [200,150]
        },
        "duration": "7:40",
        "enddate": "2023-01-20",
        "endtime": "16:08:02",
        "startdate": "2023-01-15",
        "starttime": "09:04:00",
        "trainfrom": "CBE",
        "trainid": 2, 
        "trainname": "CHENNAI EXPRESS",
        "trainto": "CHENNAI"
    }
  ]


  localStorage.setItem("SelectedTrainName",null)
  localStorage.setItem("SelectedTrainId",null)
  localStorage.setItem("SelectedSeatType",null)
  localStorage.setItem("SelectedSeatFare",null)

  var trains = document.createElement('div')
  trains.classList.add('trains')
  trains.setAttribute('id','trains')
  document.body.appendChild(trains)
  // console.log(trains)
  var no_of_trains = train_details.length
  for (let i = 0; i < no_of_trains; i++) {
    CreateTrainCard(train_details[i])
  } 

}

window.onload = () => {
  //write your code here
  createTrains()
}