var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
   fabric.Image.fromURL(get_image, function(Img) {
      block_image_object = Img;

      player_object.scaleToWidth(700);
      player_object.scaleToHeight(510);
      player_object.set({
      top:0,
      left:0
   });
   canvas.add("block_img_object");
});
}

function playSound(){
   x.play();	
}
