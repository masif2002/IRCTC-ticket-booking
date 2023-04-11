let amount = 1000;
$("#amount").text(amount);

var containerDiv = $("#container-div");

let creditCardDetails = [];
let debitCardDetails = [];
let googlePayDetails = [];
// let phonePayDetails = []

function clearFunction() {
  containerDiv.empty();
  var heading = $("<h2>");
  heading.text("Payment Successful Thank you");
  heading.addClass("heading");
  containerDiv.append(heading);
  console.log("done");

  var homeButton = $("<button>");
  homeButton.addClass("primary");
  homeButton.attr("id", "home");
  homeButton.text("Home");
  containerDiv.append(homeButton);
}

function creditCardMethod() {
  // for heading
  containerDiv.empty();
  var heading = $("<h2>");
  heading.text("CREDIT CARD PAYMENT");
  containerDiv.append(heading);

  var forSameLine = $("<div>");
  forSameLine.css("display", "flex");
  forSameLine.css("justify-content", "space-between");
  forSameLine.css("border-bottom", "1px solid black");
  forSameLine.css("margin-left", "20px");
  forSameLine.css("margin-right", "20px");
  containerDiv.append(forSameLine);

  var leftP = $("<p>");
  leftP.text("Total");
  leftP.addClass("leftP");
  forSameLine.append(leftP);

  var rightP = $("<p>");
  rightP.text(amount + " Rs");
  rightP.addClass("rightP");
  forSameLine.append(rightP);

  var div1 = $("<div>");
  div1.addClass("to-left");
  containerDiv.append(div1);

  div1.append($("<p>").text("Enter First name :"));
  var firstName = $("<input>");
  firstName.addClass("name-info");
  firstName.attr("placeholder", "first name");
  firstName.attr("id", "first-name");
  div1.append(firstName);

  var div2 = $("<div>");
  div2.addClass("to-left");
  containerDiv.append(div2);

  div2.append($("<p>").text("Enter Last name :"));
  var lastName = $("<input>");
  lastName.addClass("name-info");
  lastName.attr("id", "last-name");
  div2.append(lastName);

  var div3 = $("<div>");
  div3.addClass("to-left");
  containerDiv.append(div3);

  div3.append($("<p>").text("Enter card number :"));
  var cardNumber = $("<input>");
  cardNumber.addClass("name-info");
  cardNumber.attr("id", "card-number");
  div3.append(cardNumber);

  var div4 = $("<div>");
  div4.addClass("to-left");
  containerDiv.append(div4);

  div4.append($("<p>").text("Enter cvv :"));
  var cvv = $("<input>");
  cvv.attr("type", "number");
  cvv.attr("id", "cvv");
  cvv.addClass("name-info");
  div4.append(cvv);

  var div5 = $("<div>");
  div5.addClass("to-left");
  containerDiv.append(div5);

  div5.append($("<p>").text("Enter date :"));
  var date = $("<input>");
  date.attr("type", "date");
  date.attr("id", "date");
  date.addClass("name-info");
  div5.append(date);

  var div6 = $("<div>");
  div6.attr("id", "btn-1");
  div6.addClass("flex");

  var submitButton = $("<button>");
  submitButton.addClass("primary");
  submitButton.attr("id", "submit-1");
  submitButton.text("Submit Payment");

  div6.append(submitButton);
  containerDiv.append(div6);

  $("#submit-1").click(function (e) {
    creditCardDetails.push($("#first-name").val());
    creditCardDetails.push($("#last-name").val());
    creditCardDetails.push($("#card-number").val());
    creditCardDetails.push($("#cvv").val());
    creditCardDetails.push($("#date").val());
    console.log(creditCardDetails);
    clearFunction();
  });
}

function debitCardMethod() {
  containerDiv.empty();
  var heading = $("<h2>");
  heading.text("DEBIT CARD PAYMENT");
  containerDiv.append(heading);

  var forSameLine = $("<div>");
  forSameLine.css("display", "flex");
  forSameLine.css("justify-content", "space-between");
  forSameLine.css("border-bottom", "1px solid black");
  forSameLine.css("margin-left", "20px");
  forSameLine.css("margin-right", "20px");
  containerDiv.append(forSameLine);

  var leftP = $("<p>");
  leftP.text("Total");
  leftP.addClass("leftP");
  forSameLine.append(leftP);

  var rightP = $("<p>");
  rightP.text(amount + " Rs");
  rightP.addClass("rightP");
  forSameLine.append(rightP);

  var div1 = $("<div>");
  div1.addClass("to-left");
  containerDiv.append(div1);

  // firstname
  div1.append($("<p>").text("Enter First name :"));
  var firstName = $("<input>");
  firstName.addClass("name-info");
  firstName.attr("placeholder", "first name");
  firstName.attr("id", "first-name");
  div1.append(firstName);

  var div2 = $("<div>");
  div2.addClass("to-left");
  containerDiv.append(div2);

  div2.append($("<p>").text("Enter Last name :"));
  var lastName = $("<input>");
  lastName.addClass("name-info");
  lastName.attr("id", "last-name");
  div2.append(lastName);

  var div3 = $("<div>");
  div3.addClass("to-left");
  containerDiv.append(div3);

  div3.append($("<p>").text("Enter card number :"));
  var cardNumber = $("<input>");
  cardNumber.addClass("name-info");
  cardNumber.attr("id", "card-number");
  div3.append(cardNumber);

  var div4 = $("<div>");
  div4.addClass("to-left");
  containerDiv.append(div4);

  div4.append($("<p>").text("Enter cvv :"));
  var cvv = $("<input>");
  cvv.attr("type", "number");
  cvv.attr("id", "cvv");
  cvv.addClass("name-info");
  div4.append(cvv);

  var div5 = $("<div>");
  div5.addClass("to-left");
  containerDiv.append(div5);

  div5.append($("<p>").text("Enter date :"));
  var date = $("<input>");
  date.attr("type", "date");
  date.attr("id", "date");
  date.addClass("name-info");
  div5.append(date);

  var div6 = $("<div>");
  div6.attr("id", "btn-1");
  div6.addClass("flex");

  var submitButton = $("<button>");
  submitButton.addClass("primary");
  submitButton.attr("id", "submit-1");
  submitButton.text("Submit Payment");

  div6.append(submitButton);
  containerDiv.append(div6);

  $("#submit-1").click(function (e) {
    debitCardDetails.push($("#first-name").val());
    debitCardDetails.push($("#last-name").val());
    debitCardDetails.push($("#card-number").val());
    debitCardDetails.push($("#cvv").val());
    debitCardDetails.push($("#date").val());
    console.log(debitCardDetails);
    clearFunction();
  });
}

function googlePayMethod() {
  containerDiv.empty();
  var heading = $("<h2>");
  heading.text("GOOGLE PAY");
  containerDiv.append(heading);

  var forSameLine = $("<div>");
  forSameLine.css("display", "flex");
  forSameLine.css("justify-content", "space-between");
  forSameLine.css("border-bottom", "1px solid black");
  forSameLine.css("margin-left", "20px");
  forSameLine.css("margin-right", "20px");
  containerDiv.append(forSameLine);

  var leftP = $("<p>");
  leftP.text("Total");
  leftP.addClass("leftP");
  forSameLine.append(leftP);

  var rightP = $("<p>");
  rightP.text(amount + " Rs");
  rightP.addClass("rightP");
  forSameLine.append(rightP);

  var div1 = $("<div>");
  div1.addClass("to-left");
  containerDiv.append(div1);

  // firstname
  div1.append($("<p>").text("Enter First name :"));
  var firstName = $("<input>");
  firstName.addClass("name-info");
  firstName.attr("placeholder", "first name");
  firstName.attr("id", "first-name");
  div1.append(firstName);

  var div2 = $("<div>");
  div2.addClass("to-left");
  containerDiv.append(div2);

  div2.append($("<p>").text("Enter Last name :"));
  var lastName = $("<input>");
  lastName.addClass("name-info");
  lastName.attr("id", "last-name");
  div2.append(lastName);

  var div3 = $("<div>");
  div3.addClass("to-left");
  containerDiv.append(div3);

  div3.append($("<p>").text("Enter mobile number :"));
  var mobileNumber = $("<input>");
  mobileNumber.addClass("name-info");
  mobileNumber.attr("id", "mobile-number");
  div3.append(mobileNumber);

  var div4 = $("<div>");
  div4.addClass("to-left");
  containerDiv.append(div4);

  div4.append($("<p>").text("Enter bank name :"));
  var bankName = $("<input>");
  bankName.attr("id", "bank-name");
  bankName.addClass("name-info");
  div4.append(bankName);

  var div5 = $("<div>");
  div5.addClass("to-left");
  containerDiv.append(div5);

  div5.append($("<p>").text("Enter UPI id :"));
  var upi = $("<input>");
  upi.attr("id", "upi");
  upi.addClass("name-info");
  div5.append(upi);

  var div6 = $("<div>");
  div6.attr("id", "btn-1");
  div6.addClass("flex");

  var submitButton = $("<button>");
  submitButton.addClass("primary");
  submitButton.attr("id", "submit-1");
  submitButton.text("Submit Payment");

  div6.append(submitButton);
  containerDiv.append(div6);

  $("#submit-1").click(function (e) {
    debitCardDetails.push($("#first-name").val());
    debitCardDetails.push($("#last-name").val());
    debitCardDetails.push($("#mobile-number").val());
    debitCardDetails.push($("#bank-name").val());
    debitCardDetails.push($("#upi").val());
    console.log(debitCardDetails);
    clearFunction();
  });
}

// function phonePayMethod() {
//     $("#container-div").empty();
// }

$(document).ready(function () {
  // creditCardMethod();
  // googlePayMethod();

  // testing
  $("#btn").click(function (e) {
    e.preventDefault();

    let paymentMethod = $("#payment-method").val();

    console.log(paymentMethod);

    if (paymentMethod == "credit-card") {
      creditCardMethod();
    } else if (paymentMethod == "debit-card") {
      debitCardMethod();
    } else if (paymentMethod == "google-pay") {
      googlePayMethod();
    }

    // else if (paymentMethod == "phone-pay"){
    //     phonePayMethod();
    // }
  });
});
