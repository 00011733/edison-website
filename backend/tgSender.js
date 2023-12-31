{
  /* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<input type="text" id="fname" name="fname" placeholder="fullname">
<input type="text" id="country" name="country" placeholder="country">
<input type="button" id="add_button" value="Submit">
<div id="response"></div> */
}
let messageOrder = 1;
const token = "6227607314:AAGdd6aJokc_u6bgtNBwdnK-vidOWQbDWWA";
const receivers = [
  "957597889", // Asilbek
  "875072364", // Me
  "977986028", // Jahongir
  "-4049587102", // Group
  "-1002020282417", // Zayavka Channel
];
const chatId = "875072364";
const btnAdd = document.getElementById("add_button");
let nameEl = document.querySelector("#name");
let phoneEl = document.querySelector("#phone");
let msgEl = document.querySelector("#message");

$(document).ready(function () {
  btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    execute();
    nameEl.value = "";
    phoneEl.value = "";
    msgEl.value = "";
    messageOrder++;
    console.log("Xabar jo'natildi!");
  });

  function execute() {
    let name = nameEl.value;
    let phone = phoneEl.value;
    let msg = msgEl.value;
    name = name === "" ? "---" : name;
    phone = phone === "" ? "---" : phone;
    msg = msg === "" ? "---" : msg;
    const txt = `🔔 Yangi xabar\n\n📌 Xabar raqami: #${messageOrder}\n\n****************\nIsm: ${name}\nTel raqam: ${phone}\nXabar: ${msg}\n\n****************`;

    for (let r of receivers) {
      console.log(r);
      $.ajax({
        type: "POST",
        url: `https://api.telegram.org/bot${token}/sendMessage`,
        data: {
          chat_id: r,
          text: txt,
          parse_mode: "html",
        },
        success: function (res) {
          console.debug(res);
          $("#response").text("Message sent");
        },
        error: function (error) {
          console.error(error);
          //   alert("error failed");
        },
      });
    }
  }
});
