var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var emailEntry = $('#email').val();
    var passwordEntry = $('#password').val();
    if(firstName === "") {
      $(".first-name-error").text("Error: First name not found");
    }
    if(lastName === "")
    {
      $(".last-name-error").text("Error: Last name not found");
    }
    if(emailEntry === "")
    {
      $(".email-error").text("Error: Email not found");
    }
    if(passwordEntry === "")
    {
      $(".password-error").text("Error: Password not found");
    }
    else if(passwordEntry.length <= 7)
    {
      $(".password-error").text("Error: Password too short");
    }

    return false;
  })
}

$(document).ready(main);