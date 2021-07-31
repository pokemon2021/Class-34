var lucapetaball,database,position;

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    lucapetaball = createSprite(250,250,10,10);
    lucapetaball.shapeColor = "red";
    var lucapetaballposition = database.ref("ball/position")
    lucapetaballposition.on("value",readposition,showerror)
    
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
    database.ref("ball/position").set({
        "x": position.x + x,
        "y" : position.y + y
    })
    
}

function readposition(data){
    position = data.val()
    lucapetaball.x = position.x
    lucapetaball.y = position.y
    
}

function showerror(){
    console.log("error in reading data from database")
}