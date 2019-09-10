
var phone = document.getElementById("phone_1"),
  iframe = document.getElementById("frame_1");


function updateView(view) {
  if (view) {
    phone.className = "phone view_" + view;
  }
}


function updateIframe() {
  iframe.src = document.getElementById("iframeURL").value;

  phone.style.width = document.getElementById("iframeWidth").value + "px";
  phone.style.height = document.getElementById("iframeHeight").value + "px";


  document.getElementById("wrapper").style.perspective = (
    document.getElementById("iframePerspective").checked ? "1000px" : "none"
  );
}
updateIframe();


document.getElementById("controls").addEventListener("change", function() {
  updateIframe();
});

document.getElementById("views").addEventListener("click", function(evt) {
  updateView(evt.target.value);
});