let form = document.querySelector("form");

let nameEl = document.querySelector("#name");
let phoneEl = document.querySelector("#phone");
let msgEl = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate form fields
  let name = form.querySelector("#name").value.trim();
  let phone = form.querySelector("#phone").value.trim();
  let message = form.querySelector("#message").value.trim();

  if (name.length < 2) {
    alert("Ism kamida 2 ta harfdan iborat bo'lishi kerak!");
    return;
  }

  // Phone number validation
  let phoneRegex = /^[\d()+\- ]*$/; // Assumes a 10-digit phone number format
  if (
    (phone !== "" && !phoneRegex.test(phone)) ||
    phone.length < 8 ||
    phone.length > 25
  ) {
    alert(
      `Telefon raqam notogri kiritildi, iltimos tekshirib qaytadan kiritib ko'ring! ${phone}`
    );
    return;
  }

  form.querySelector("#phone").value = extractDigits(phone);
  form.querySelector("#message").value == "-";

  document.querySelector("#add_button").value = "Yuklanmoqda..";

  let data = new FormData(form);

  fetch(
    "https://script.google.com/macros/s/AKfycbxzztuRqlQYQQmoYLyry0nAJsFz0c6jugCaxMH3IQForRs3Pvo5c3uD_Ny84XBXYxdY/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.querySelector("#add_button").value = "Ariza qoldirish";
    })
    .then((r) => {
      nameEl.value = "";
      phoneEl.value = "+998";
      msgEl.value = "";
      // Select the modal element
      let modal = document.getElementById("exampleModal");

      // Create a new Bootstrap Modal object
      let modalInstance = new bootstrap.Modal(modal);

      // Open the modal
      modalInstance.show();
    });
});

function extractDigits(inputString) {
  // Use regular expression to match digits (\d+)
  var digitMatches = inputString.match(/\d+/g);

  // If digitMatches is not null, join the matched digits into a single string
  if (digitMatches !== null) {
    return "+" + digitMatches.join("");
  } else {
    // If no digits found, return an empty string
    return "";
  }
}
