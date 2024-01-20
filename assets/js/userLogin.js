// Login Text Field Validation

function loginFieldValidation() {
  const email = $("#userEmail").val();
  const password = $("#userPassword").val();

  if (email == "") {
    $("#emailError").css("display", "block");
    $("#userEmail").css("border-color", "#e72438");
  }

  if (password == "") {
    $("#passwordError").css("display", "block");
    $("#userPassword").css("border-color", "#e72438");
  }
}

$(document).ready(function () {
  $("#userEmail").on("input", function () {
    var email = $("#userEmail").val();
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    var matchResult = email.match(pattern);

    if (matchResult) {
      $("#emailError").css("display", "none");
      $("#userEmail").css("border", "2px solid rgba(255, 255, 255, .2)");
    } else {
      $("#emailError").css("display", "block");
      $("#userEmail").css("border-color", "#e72438");
    }
  });

  $("#userPassword").on("input", function () {
    var email = $("#userPassword").val();

    if (email == "") {
      $("#passwordError").css("display", "block");
      $("#userPassword").css("border-color", "#e72438");
    } else {
      $("#passwordError").css("display", "none");
      $("#userPassword").css("border", "2px solid rgba(255, 255, 255, .2)");
    }
  });
});

// User Login Function

var loginBaseUrl = "http://localhost:8085/travelPlanning/user/userlogin";

$("#userLoginBtn").click(function () {
  loginFieldValidation();
  userLogin();
});

function userLogin() {
  var data = {
    email: $("#userEmail").val(),
    password: $("#userPassword").val(),
  };

  $.ajax({
    url: loginBaseUrl,
    method: "POST",
    data: JSON.stringify(data),
    dataType: "json",
    contentType: "application/json",
    success: function (res) {
      if (res.status == true) {
        window.location.href = "../pages/package.html";
      } else {
        if (res.message != "Password Not Match") {
          $("#emailError").text(res.message);
          $("#emailError").css("display", "block");
        } else {
          $("#passwordError").text(res.message);
          $("#passwordError").css("display", "block");
        }
      }
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    },
  });
}
