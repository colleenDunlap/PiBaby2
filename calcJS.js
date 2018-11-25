 function generatePickUpLine(){
    var flag = Math.random()*3;
    var pickUpLine;
    if(flag<1){
        pickUpLine = "Are you the derivative of x?  Because I think you're the one."
    }
    else if(flag<2){
        pickUpLine = "Are you the antiderivative?  Because you're integral to my happiness."
    }
    else if(flag<3){
        pickUpLine = "I wish I was your first derivative so I could lie tangent to your curves."
    }
    document.write(pickUpLine);
 }