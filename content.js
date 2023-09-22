// content.js

document.addEventListener("click", function (event) {
  // Check if the clicked element matches your criteria (e.g., element with a specific class or ID)
  //document.querySelectorAll('div[role="dialog"] button')
  let btns = event.target.querySelector('div[role="dialog"] button');
  window.console.log(btns);
  if (event.target.matches(".tiklanacak")) {
    // Send an XHR request here
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5240/", true);
    xhr.onreadystatechange = function () {
      console.log(xhr.responseText);
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.querySelector("body").innerHTML += xhr.responseText;
        let responseJSON = JSON.parse(xhr.responseText);
        window.console.log(responseJSON.geometry.coordinates);
      }
    };
    xhr.send();
  }
});
