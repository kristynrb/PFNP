console.log("the app.js file is connected");

// These functions are written with the use of jQuery library:
$("#name").on("mouseover", function(){
  $("#name").css("color", "lightblue");
});

$("#name").on("mouseout", function(){
  $("#name").css("color", "darkblue");
});

$("#remove").on("click", function(){
  $("#kristyn").fadeOut();
});

$("#add").on("click", function(){
  $("#kristyn").fadeIn();
});

function infoSubmit(){

// Selecting the value from the input with first_name
  var firstName = $('input[name="first_name"]').val();
  console.log(firstName);

// Selecting the value from the input with email_address
  var emailAddress = $('input[name=email_address]').val();
  console.log(emailAddress);

// Selecting the value from the input with mail
  var mailingList = $('input[name=mail]').val();
  console.log(mailingList);

// Selecting the value from the input with known status
  var knownStatus = $('select[name=known]').val();
  console.log(knownStatus);

// Selecting the confirmation message box. Adding text to our, currenty empty, confirmation message box
  var confirmBox = $('#confirmation_msg');

  confirmBox.text("You have submitted your form, " + firstName + ". Your email address is " + emailAddress);

// If someone joins the mailing list, add an additional message onto the confirmation message.n i
  if (mailingList == "true") {
    console.log("You want to join our mailing list");
    $('#confirmation_msg').append("<p>We've added you to our email list!</p>");
  } else {
    console.log("you do NOT want to joing our mailing list");
  };
};
