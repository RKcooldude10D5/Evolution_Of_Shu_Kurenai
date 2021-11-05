var canvas= new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 333;
block_image_height = 333;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_y,left:block_x
        });
        canvas.add(block_image_object);
    });
    
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '66')
	{
		new_image('skbb.png');
            console.log("Shu Kurenai from Beyblade Burst");
	}
	if(e.shiftKey==true && keyPressed=='69')
	{
		block_x = 200;
        new_image('skrebbe.png');
            console.log("Red Eye(Shu Kurenai) from Beyblade Burst Evolution");
	}
	if(keyPressed=='69')
	{
		block_x =300;
		new_image('skbbe.png');
            console.log("Shu Kurenai from Beyblade Burst Evolution");
	}
	if(keyPressed == '84')
	{
		block_x = 400;
		new_image('skbbt.png');
            console.log("Shu Kurenai from Beyblade Burst Turbo");
	}
	if(e.shiftKey==true && keyPressed=='83')
	{
		block_x = 500;
	    new_image('skbbs1.png');
            console.log("Shu Kurenai from Beyblade Burst Surge");
	}
	if(keyPressed=='83')
	{
		block_x = 600;
		new_image('skbbs2.png');
		console.log("Shu Kurenai from Beyblade Burst Surge");
	}
	if(keyPressed == '81')
	{
		block_x = 700;
	    new_image('skbbq.png');
		console.log("Shu Kurenai from Beyblade Burst QuadDrive");
	}
}