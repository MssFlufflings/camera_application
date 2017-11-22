document.getElementById('takeaphoto').addEventListener("click", function(){
init();
});

function init(){
navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });


function onSuccess(imageURI) {
   var image = document.getElementById('Image');
   image.src = imageURI;
}

function onFail(message) {
   alert('Failed because: ' + message);
}

}
