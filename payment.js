let amount = 1000;
$("#amount").text(amount);

var containerDiv = $("#container-div");
var line_1 = $("<div>");
line_1.addClass("line_1");

var line_2 = $("<div>");
line_2.addClass("line_1");

let creditCardDetails = [];
let debitCardDetails = [];
let googlePayDetails;

function clearFunction() {
  window.location.href = 'thankyou.html'

  // containerDiv.empty();
  // containerDiv.addClass("container-temp");
  // containerDiv.removeClass("container");
  // var heading = $("<h2>");
  // heading.text("Payment Successful");
  
  // var tickImage = $("<img>");
  // tickImage.attr("src","img/check.png");
  
  // tickImage.addClass("tick-image");
  // heading.addClass("heading");
  // containerDiv.append(heading);

  // var thankyou = $("<h2>");
  // thankyou.text("Thank you");
  // thankyou.addClass("thank-you");
  // var testDiv = $("<div>");
  // containerDiv.append(thankyou);
  // testDiv.append(tickImage);
  // containerDiv.append(testDiv);

  // var homeButton = $("<button>");
  // homeButton.addClass("primary-home");
  // homeButton.attr("id", "home");
  // homeButton.text("View Ticket");
  // containerDiv.append(homeButton);
}

function forGpay() {
  var heading = $("<p>");
  heading.text("Open your Gpay and scan QR code for payment");
  // heading.addClass("heading");

  var qrCode = $("<img>");
  qrCode.attr("src", "img/qr_code.png");
  qrCode.addClass("qr-code");
  containerDiv.append(qrCode);
  containerDiv.removeClass("container");
  containerDiv.addClass("container-gpay");

  containerDiv.append(heading);

  var homeButton = $("<button>");
  homeButton.addClass("primary-home primary");
  homeButton.attr("id", "home");
  homeButton.text("OK");
  containerDiv.append(homeButton);

  $("#home").click(function (e) {
    window.location.href = 'thankyou.html'
  })

}

function creditCardMethod() {
  // for heading
  containerDiv.empty();
  var heading = $("<h3>");
  heading.text(" CREDIT CARD PAYMENT");
  heading.prepend('<i class="fa-regular fa-credit-card"></i>');
  heading.addClass("heading");
  containerDiv.append(heading);
  containerDiv.append(line_1);

  var div1 = $("<div>");
  div1.addClass("to-left");
  containerDiv.append(div1);

  var firstName = $("<input>");
  firstName.addClass("name-info");
  firstName.attr("placeholder", "first name");
  firstName.attr("id", "first-name");
  firstName.attr("type", "text");

  var divStyle1 = $("<div>");
  containerDiv.append(divStyle1);
  div1.append($("<p>").text("Enter First name :"));
  div1.append(firstName);
  div1.addClass("div-one-line");
  divStyle1.append(div1);

  var div2 = $("<div>");
  div2.addClass("to-left");

  var lastName = $("<input>");
  lastName.addClass("name-info");
  lastName.attr("id", "last-name");
  lastName.attr("placeholder", "last name");
  // containerDiv.append(div2);
  div2.append($("<p>").text("Enter Last name :"));
  div2.append(lastName);
  div2.addClass("div-one-line");
  divStyle1.append(div2);
  divStyle1.addClass("single-line");

  var div3 = $("<div>");
  div3.addClass("to-left");
  containerDiv.append(div3);

  div3.append(
    $("<p>").text("Enter card number :").css("margin-left", "2.5rem")
  );
  var cardNumber = $("<input>");
  cardNumber.addClass("name-info");
  cardNumber.attr("id", "card-number");
  cardNumber.attr("type", "tel");
  cardNumber.attr("placeholder", "xxxx xxxx xxxx xxxx");
  cardNumber.attr("pattern", "d*");
  cardNumber.attr("maxlength", "19");
  cardNumber.attr("required");
  cardNumber.css("margin-left", "2.5rem");
  cardNumber.css("width", "535px");
  div3.append(cardNumber);

  var div4 = $("<div>");
  div4.addClass("to-left");

  var cvv = $("<input>");
  cvv.attr("type", "tel");
  cvv.attr("id", "cvv");
  cvv.attr("placeholder", "xxx");
  cvv.addClass("name-info");

  containerDiv.append(div4);
  div4.append($("<p>").text("Enter cvv :"));
  div4.append(cvv);
  div4.addClass("div-one-line");

  var div5 = $("<div>");
  div5.addClass("to-left");

  div5.append($("<p>").text("Enter date :"));
  var date = $("<input>");
  date.attr("type", "date");
  date.attr("id", "date");
  date.addClass("name-info");
  div5.append(date);
  div5.addClass("div-one-line");

  var divStyle2 = $("<div>");
  containerDiv.append(divStyle2);
  divStyle2.addClass("single-line");

  divStyle2.append(div4);
  divStyle2.append(div5);

  containerDiv.append(line_2);

  var div6 = $("<div>");
  div6.attr("id", "btn-1");
  div6.addClass("flex");

  var submitButton = $("<button>");
  submitButton.addClass("primary");
  submitButton.attr("id", "submit-1");
  submitButton.text("Make Payment");

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
  var heading = $("<h3>");
  heading.text(" DEBIT CARD PAYMENT");
  heading.prepend('<i class="fa-regular fa-credit-card"></i>');
  heading.addClass("heading");
  containerDiv.append(heading);
  containerDiv.append(line_1);

  var div1 = $("<div>");
  div1.addClass("to-left");
  containerDiv.append(div1);

  var firstName = $("<input>");
  firstName.addClass("name-info");
  firstName.attr("placeholder", "first name");
  firstName.attr("id", "first-name");
  firstName.attr("type", "text");

  var divStyle1 = $("<div>");
  containerDiv.append(divStyle1);
  div1.append($("<p>").text("Enter First name :"));
  div1.append(firstName);
  div1.addClass("div-one-line");
  divStyle1.append(div1);

  var div2 = $("<div>");
  div2.addClass("to-left");

  var lastName = $("<input>");
  lastName.addClass("name-info");
  lastName.attr("id", "last-name");
  lastName.attr("placeholder", "last name");
  // containerDiv.append(div2);
  div2.append($("<p>").text("Enter Last name :"));
  div2.append(lastName);
  div2.addClass("div-one-line");
  divStyle1.append(div2);
  divStyle1.addClass("single-line");

  var div3 = $("<div>");
  div3.addClass("to-left");
  containerDiv.append(div3);

  div3.append(
    $("<p>").text("Enter card number :").css("margin-left", "2.5rem")
  );
  var cardNumber = $("<input>");
  cardNumber.addClass("name-info");
  cardNumber.attr("id", "card-number");
  cardNumber.attr("type", "tel");
  cardNumber.attr("placeholder", "xxxx xxxx xxxx xxxx");
  cardNumber.attr("pattern", "d*");
  cardNumber.attr("maxlength", "19");
  cardNumber.attr("required");
  cardNumber.css("margin-left", "2.5rem");
  cardNumber.css("width", "535px");
  div3.append(cardNumber);

  var div4 = $("<div>");
  div4.addClass("to-left");

  var cvv = $("<input>");
  cvv.attr("type", "tel");
  cvv.attr("id", "cvv");
  cvv.attr("placeholder", "xxx");
  cvv.addClass("name-info");

  containerDiv.append(div4);
  div4.append($("<p>").text("Enter cvv :"));
  div4.append(cvv);
  div4.addClass("div-one-line");

  var div5 = $("<div>");
  div5.addClass("to-left");

  div5.append($("<p>").text("Enter date :"));
  var date = $("<input>");
  date.attr("type", "date");
  date.attr("id", "date");
  date.addClass("name-info");
  div5.append(date);
  div5.addClass("div-one-line");

  var divStyle2 = $("<div>");
  containerDiv.append(divStyle2);
  divStyle2.addClass("single-line");

  divStyle2.append(div4);
  divStyle2.append(div5);

  containerDiv.append(line_2);

  var div6 = $("<div>");
  div6.attr("id", "btn-1");
  div6.addClass("flex");

  var submitButton = $("<button>");
  submitButton.addClass("primary");
  submitButton.attr("id", "submit-1");
  submitButton.text("Make Payment");

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
  heading.text(" GOOGLE PAY");
  heading.prepend('<i class="fa-brands fa-google-pay fa-spin"></i>');
  heading.addClass("heading");
  containerDiv.append(heading);
  containerDiv.append(line_1);

  var div5 = $("<div>");
  div5.addClass("to-center");
  containerDiv.append(div5);

  div5.append($("<p>").text("Enter UPI id :").css("margin-top","1rem"));
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
  submitButton.text("Submit");

  div6.append(submitButton);
  containerDiv.append(div6);

  $("#submit-1").click(function (e) {
    googlePayDetails = $("#upi").val();
    console.log(googlePayDetails);
    forGpay();
  });
}


$(document).ready(function () {
  // creditCardMethod();
  // debitCardMethod();
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
  });
});
