var ball2;
var database,position

function setup(){
    createCanvas(500,500);
    ball2 = createSprite(250,250,10,10);
    database=firebase.database()
    
    ball2.shapeColor = "red";
    var ballpos=database.ref("ball/position")
    ballpos.on("value",readpositon,showErr)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   database.ref('ball/position').set({
       'x':position.x+x,
       'y':position.y+y
   })
   
}
function readpositon(data){
    position=data.val()
    ball2.x=position.x
    ball2.y=position.y
}
function showErr(){
    console.log("error in reading data")
}