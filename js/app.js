function alertUser(message) {
  alert(message);
}

document.addEventListener("DOMContentLoaded", function () {
  // Check if the page has been scrolled
  var location = window.location.hash.replace("#", "");
  console.log("Location: ", location);
  setTimeout(() => {
    if (location.length > 0) {
      removeHash();
    }
    if (window.scrollY > 0) {
      // If it has been scrolled, reset the scroll position to the top
      window.scrollTo(0, 0);
    }
  }, 500);
  // alert("Y: ", window);
  console.log("window: ", window.scrollY);
});
function removeHash() {
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
}
