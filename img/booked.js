var train_name = document.getElementById("train-name");
var date = document.getElementById("date");
var train_from = document.getElementById("train-from");
var train_to = document.getElementById("train-to");
var pnr_number = document.getElementById("pnr-number");
var time = document.getElementById("time");
var ticket_class = document.getElementById("ticket-class");
var ticket_status = document.getElementById("ticket-status");


train_name.innerHTML = "MGR"
date.innerHTML = "2023-04-05"
train_from.innerHTML = "CBE"
train_to.innerHTML = "CHENNAI"
pnr_number.innerHTML = "1234567890"
time.innerHTML = "22:12"
ticket_class.innerHTML = "AC1 Tier"
ticket_status.innerHTML = "Successful"


var originalDiv = document.getElementById("seat-container");
var parentContainer = originalDiv.parentNode;
var numberOfDivs = 3;

for (var i = 0; i < numberOfDivs-1; i++) 
{
    var newDiv = originalDiv.cloneNode(true);
    parentContainer.appendChild(newDiv);
}



