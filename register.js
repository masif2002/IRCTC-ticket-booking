const displayErrorMessage = (message) => {

    if (document.getElementById('error-message')) { 
        const m = document.getElementById('error-message')
        m.parentNode.removeChild(m)
    } 
        const msg = document.createElement('p')
        msg.id = "error-message"
        msg.textContent = message
        msg.classList.add('shake')


    const node = document.getElementById('btn')
    const parent = node.parentNode

    parent.insertBefore(msg, node)
}

const confirmPassword = () => {
    const password = document.getElementById('password').value
    const confirm = document.getElementById('re-password').value

    if (password != confirm) {
        displayErrorMessage('Passwords do not match')
    } else {
        sendFormData()
    }
}

const sendFormData = () => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "YOUR_API_ENDPOINT"); 

    // This fires up when the connection is successful
    xhr.onload = function(event){ 
        localStorage.setItem('response', xhr.response)
        console.log(xhr.response)

        var statusCode
        var statusMessage = JSON.parse(xhr.response).status

        if (xhr.status == 200) {
            window.location.href = "login.html"
        }
    }; 

    var form = document.getElementById("signup-form")
    console.log(form)
    var formData = new FormData(form); 

    xhr.send(formData);
}

document.getElementById('submit').addEventListener('click', confirmPassword)