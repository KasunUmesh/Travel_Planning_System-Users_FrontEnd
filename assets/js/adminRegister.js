// Image Upload and view

const inputFile1 = document.querySelector("#input-file1");
const imageView1 = document.querySelector("#img-view1");

const inputFile2 = document.querySelector("#input-file2");
const imageView2 = document.querySelector("#img-view2");

const inputFile3 = document.querySelector("#input-file3");
const imageView3 = document.querySelector("#img-view3");

inputFile1.addEventListener("change", function () {
  let imgLink = URL.createObjectURL(inputFile1.files[0]);
  imageView1.style.backgroundImage = `url(${imgLink})`;
  imageView1.textContent = "";
  imageView1.style.border = 0;
});

inputFile2.addEventListener("change", function () {
  let imgLink = URL.createObjectURL(inputFile2.files[0]);
  imageView2.style.backgroundImage = `url(${imgLink})`;
  imageView2.textContent = "";
  imageView2.style.border = 0;
});

inputFile3.addEventListener("change", function () {
  let imgLink = URL.createObjectURL(inputFile3.files[0]);
  imageView3.style.backgroundImage = `url(${imgLink})`;
  imageView3.textContent = "";
  imageView3.style.border = 0;
});

// Frontend and backend functions

var baseUrl = "http://localhost:8085/travelPlanning/user/save";

$("#saveUserBtn").click(function () {
  saveUser();
});

function saveUser() {
  const formData = new FormData();

  const UserName = $("#username").val();
  const address = $("#address").val();
  const email = $("#email").val();
  const nicNo = $("#nicNo").val();
  const phone = $("#phoneNumber").val();
  const gender = $("#gender").val();
  const age = $("#age").val();
  const remark = $("#remark").val();
  const password = $("#password").val();
  const profileIMG = $("#input-file1")[0].files[0];
  const nicFIMG = $("#input-file1")[0].files[0];
  const nicBIMG = $("#input-file1")[0].files[0];

  formData.append("userName", UserName);
  formData.append("address", address);
  formData.append("email", email);
  formData.append("nicNo", nicNo);
  formData.append("phone", phone);
  formData.append("gender", gender);
  formData.append("age", age);
  formData.append("remark", remark);
  formData.append("password", password);
  formData.append("profileImg", profileIMG);
  formData.append("nicFImg", nicFIMG);
  formData.append("nicBImg", nicBIMG);

  console.log(formData);

  $.ajax({
    url: baseUrl,
    processData: false,
    contentType: false,
    cache: false,
    method: "POST",
    data: formData,
    success: function (res) {
      if (res.code == 200) {
        alert(res.message);
      }
    },
    error: function (res) {
      alert(res.message);
    },
  });
}
