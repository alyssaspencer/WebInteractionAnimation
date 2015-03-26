

//Slideshow on HomePage
var loaded = 0, numOfImages = 3;

//first part of chain, invoke async load
var image0 = document.createElement('img'); //this will work in new Chrome
var image1 = document.createElement('img'); //instead of new Image
var image2 = document.createElement('img');

//common event handler when images has loaded with counter
//to know that all images has loaded
image0.onload = image1.onload = 
image2.onload = function(e) {
    loaded++;
    if (loaded === numOfImages)
        draw(); 
}


image0.src = "images/bryce2.jpg";
image1.src = "images/drums.jpg";
image2.src = "images/Marshall_amp.jpg";

// this is the main function
function draw() {

    var images = new Array(image0, image1, image2),
        counter = 0,
        maxNum = images.length - 1,

        myCanvas = document.getElementById('myCanvas'),
        ctx = myCanvas.getContext('2d'),

        me = this; //this we need for setTimeout()

    //third part of chain, have a function to invoke by setTimeout
    this._draw = function() {

        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
        ctx.drawImage(images[counter++], 0, 0);
        if (counter > maxNum) counter = 0;

        setTimeout(me._draw, 3000); //here we use me instead of this
    }
    this._draw(); //START the loop
}
//End of Slideshow