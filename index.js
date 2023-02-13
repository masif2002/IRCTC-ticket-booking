// min date fixer for calender
var date_pick = document.getElementById("datePickerId")
if (date_pick)
{
    datePickerId.min = new Date().toISOString().split("T")[0];
    document.getElementById("datePickerId").valueAsDate = new Date()
}

// function display missing fields
function displayStatus2()
{
    var from = document.getElementById("From").value;
    var to = document.getElementById("To").value;
    if (from == "" || to == "")
    {
        var status2 = document.getElementById('status2') 
        if (status2) {
            const displayMessage = document.getElementById('status2')
            displayMessage.parentNode.removeChild(displayMessage)
        }
        
        var status2 = "*Missing Fields"
        const newNode = document.createElement('p')
        newNode.id = 'status2'
        newNode.classList.add('shake') 
    
        const displayText = document.createTextNode(status2)
        newNode.appendChild(displayText)
    
        const buttons = document.getElementById('search')   
        const parent = buttons.parentNode
        parent.insertBefore(newNode, buttons)
        return false
               
    }
    var status2 = document.getElementById('status2') 
    if (status2) {
        const displayMessage = document.getElementById('status2')
        displayMessage.parentNode.removeChild(displayMessage)
    }
    return true
}

// form to json serialize
function json_serialize()
{

    let val =  displayStatus2();
    if (val)
    {
        let form_result = {}
        form_result.trainfrom = document.getElementById("From").value;    
        form_result.trainto = document.getElementById("To").value;    
        form_result.type = document.getElementById("TicketType").value;    
        form_result.class = document.getElementById("TicketClass").value;    
        form_result.date = document.getElementById("datePickerId").value;  
        if (document.getElementById("AvailableTrain").checked)  
        {
            form_result.trainavailable = document.getElementById("AvailableTrain").value;  
        }
        else
        {
            form_result.AvailableTrain = "no";
        }
        // console.log(form_result);
        let jsonStringObj = JSON.stringify(form_result);
        console.log(jsonStringObj);
        console.log("from+index.js "+localStorage.getItem("token"))
        let url = "http://192.168.7.203:5000/"

        fetch(url+'user/home', {
    
        method: 'POST', // or 'PUT'
        headers: {    
            'Authorization':'Bearer '+localStorage.getItem("token"),
                'Accept': 'application/json,text/plain,*/*',
                'Content-Type': 'application/json'      
            },
            body: jsonStringObj
    
        }).then((response) => response.json())
        .then((data) => {
            
                
                localStorage.setItem("response",data)
                console.log(data)
                if(data)
                {
                    displayTrains(data)
                }
                else
                {
                    displayNoresult()
                }
                
                // console.log(data[0]['time'])
                // localStorage.setItem('time',data[0]['time'])
                // window.location.href="/trains.html"
                // var dur=document.createElement('p');
                // dur.innerHTML='html'



            }).catch((error) => {
                console.dir('Error:', error);
        });
    



    }
}

// function showdata()
// {
//     let data  = localStorage.getItem("response")
//     const newNode = createElement("p")
//     newNode.id = "data"
//     const displayText = document.createTextNode(data)


// }


function switch_inputs()
{
    var from = document.getElementById("From").value;
    var to = document.getElementById("To").value;

    var temp = from;
    from = to;
    to = temp;

    document.getElementById("From").value = from;
    document.getElementById("To").value = to;
       
}
    


var switch_input = document.getElementById("switch_inputs")
if (switch_input)
{
    document.getElementById("switch_inputs").addEventListener('click',switch_inputs)  
}


var search_btn = document.getElementById("search")
if (search_btn)
{
    document.getElementById("search").addEventListener('click',json_serialize)    
    
}

function displayTrains(data)
{
    data.forEach(ele => { 
        let train = document.createElement("div")
        train.classList.add("train")

        // trainname trainid duration starttime startdate trainfrom trainto enddate endtime
        
        // top
        let top = document.createElement("div")
        top.classList.add("top")

        let train_name = document.createElement("p")
        train_name.innerHTML = ele["trainname"]
        let train_id = document.createElement("p")
        train_id.innerHTML = ele["trainid"]
        top.appendChild(train_name)
        top.appendChild(train_id)

        // bottom

        // start
        let bottom = document.createElement("div")
        top.classList.add("bottom")

        let start_time = document.createElement("p")
        train_from.innerHTML = ele["starttime"]
        let train_from = document.createElement("p")
        train_from.innerHTML = ele["trainfrom"]
        let start_date = document.createElement("p")
        train_from.innerHTML = ele["startdate"]

        // duration
        let duration = document.createElement("p")
        duration.innerHTML = ele["duration"]

        // to
        let end_time = document.createElement("p")
        train_from.innerHTML = ele["endtime"]
        let train_to = document.createElement("p")
        train_to.innerHTML = ele["trainto"]
        let end_date = document.createElement("p")
        train_from.innerHTML = ele["enddate"]


        bottom.appendChild(start_time)
        bottom.appendChild(train_from)
        bottom.appendChild(start_date)
        bottom.appendChild(duration)
        bottom.appendChild(end_time)
        bottom.appendChild(train_to)
        bottom.appendChild(end_date)



        train.appendChild(top)
        train.appendChild(bottom)

        document.querySelector("trains").appendChild(train)

    });
}