window.addEventListener("load", function(){

var counter = 0;
var images = ["chester.jpg", "dubai.jpg", "florida.jpg", "halifax.jpg", "singapore.jpg"];
            
var galleryImage = document.getElementById("galleryImage");
    
    
     
window.addEventListener("click", function() {
    
  counter++;
  var url = images[counter];
    galleryImage.src = "img/" + url;
    
    if (counter == 4) {
        counter = -1;
    }
    
    
});
});                        
                        