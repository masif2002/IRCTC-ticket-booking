import { server } from './utils.js'


const sendFormData = () => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `${server}/booking/cancel`); 
    
    // This fires up when the connection is successful
    xhr.onload = function(event) { 
        localStorage.setItem('response', xhr.response)
        console.log(xhr.response)

        var statusMessage = JSON.parse(xhr.response).status

        if (xhr.status == 200) {
            alert(statusMessage)
            window.location.href = 'dashboard.html'
        } else {
            alert("Oops! Something went wrong!")
        }
    }; 

    var form = document.getElementById("cancel-ticket")
    var formData = new FormData(form); 

    var res = localStorage.getItem('response')
    var token = JSON.parse(res).token
    
    xhr.setRequestHeader('Authorization', token)
    xhr.send(formData);
}

document.getElementById('submit').addEventListener('click', sendFormData)