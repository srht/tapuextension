// content.js

document.addEventListener("click", function (event) {
  // Check if the clicked element matches your criteria (e.g., element with a specific class or ID)
  //document.querySelectorAll('div[role="dialog"] button')
  let btn = event.target.querySelector('div[role="dialog"] button');
  window.console.log(btn.attributes['aria-label'].value);
  let coords=btn.attributes['aria-label'].value;
  //if (event.target.matches(".tiklanacak")) {
    // Send an XHR request here
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5240/?c="+coords, true);
    xhr.onreadystatechange = function () {
      console.log(xhr.responseText);
      if (xhr.readyState === 4 && xhr.status === 200) {
        //document.querySelector("body").innerHTML += xhr.responseText;
        let modalDiv= document.createElement('div');
        modalDiv.className='pointmodal';
        document.querySelector('button[jsaction="reveal.marker"]').parentElement.appendChild(modalDiv);
        let responseJSON = JSON.parse(xhr.responseText);
        //window.console.log(responseJSON.geometry.coordinates);
        modalDiv.innerHTML="<p><strong>"+responseJSON.properties.nitelik+"</strong></p>"
        modalDiv.innerHTML+="<p><strong>Alan:</strong> "+responseJSON.properties.alan+"</p>"
        let firstCoord=responseJSON.geometry.coordinates[0]
        modalDiv.innerHTML+="<p>"+firstCoord[0]+"</p>";
        modalDiv.innerHTML+=drawPoly()
      }
    };
    xhr.send();
  //}
});

const drawPoly=()=>{
  return `<svg height="250" width="500">
  <polygon points="220,10 300,210 170,250 123,234" style="fill:lime;stroke:purple;stroke-width:1" />
</svg>`
}