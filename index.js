var canvas = document.getElementById('canv');
var body = document.body;
canvas.width = 800;
canvas.height = 800;
var ctx = canvas.getContext('2d');
var startX = 400;
var startY = 800;
var newX, newY;
var stor;
var right = 0;
var left = 0;
var angles1 = [];
var angles2 = [];
var div;
var idkmaybe, idkmaybe2;
var smX;
var smY;
var newRot;
var leafdrawtimes;
var randomval;
var r,g,b;


ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.strokeStyle = 'rgb(255, 255, 255)';

function toRadians(angle)  {
  return angle * (Math.PI / 180);
}

function drawLineStart(lineW, len) {
  if(specie == "oak"){
    ctx.strokeStyle = 'rgb(71, 41, 23)'
  }
  else{
    if(specie == "birch"){
      ctx.strokeStyle = 'rgb(225, 225, 225)'
    }
    else{
      if(specie == "california"){
        ctx.strokeStyle = 'rgb(53, 26, 12)'
      }
      else{
        ctx.strokeStyle = 'rgb(127, 72, 44)'
      }
      }
    }

  newY = len
  ctx.lineWidth =lineW
  ctx.beginPath();
  ctx.moveTo(startX, startY)
  startY -= newY
  stor = startY
  ctx.lineTo(startX, startY);
  ctx.stroke();
  ctx.closePath()

}
function drawLine1(lineW, len, rot) {
    if(specie == "oak"){
  ctx.strokeStyle = 'rgb(130, 75, 42)'
  }
  else{
    if(specie == "birch"){
      ctx.strokeStyle = 'rgb(235, 235, 235)'
    }
    else{
      if(specie == "california"){
        ctx.strokeStyle = 'rgb(66, 32, 15)'
      }
      else{
        ctx.strokeStyle = 'rgb(160, 97, 65)'
      }
      }
    }
  ctx.lineWidth =lineW

  if(rot != 0){
    newX = (Math.sin(toRadians(rot)))*len;
    newY = (Math.cos(toRadians(rot)))*len;
  }
  else{
    len = 0;
    newY = len;
  }
  ctx.beginPath();
  ctx.moveTo(startX, startY)
  ctx.lineTo(startX+=newX, startY-=(newY-lineW));
  ctx.stroke();
  ctx.closePath();
  console.log("the y val is: ", newY)
  console.log("the x val is:", newX)
  idkmaybe = newX
  idkmaybe2 = newY
  smallbranchcount = randomnumber(3, 7)
  
  for(var j = 0; j<smallbranchcount; j++){
  
    drawLine2(lineW/3, randomnumber(60,100),(randomnumber(0,360)))
  }
}

function drawLine2(lineW2, len2, rot2){
  if(specie == "oak"){
  ctx.strokeStyle = 'rgb(99, 60, 37)'
  }
  else{
    if(specie == "birch"){
      ctx.strokeStyle = 'rgb(220, 220, 220)'
    }
    else{
      if(specie == "california"){
        ctx.strokeStyle = 'rgb(53, 29, 17)'
      }
      else{
        ctx.strokeStyle = 'rgb(114, 69, 47)'
      }
      }
    }
  ctx.lineWidth = lineW2

  if(rot2 != 0){
    newX = (Math.sin(toRadians(rot2)))*len2;
    newY = (Math.cos(toRadians(rot2)))*len2;
  }
  else{
    newY = len2
  }
  ctx.beginPath();
  div = Math.random()
  smX = startX-idkmaybe*div;
  smY = startY+idkmaybe2*div;
  ctx.moveTo(smX, smY);
  //ctx.lineTo(startX+newX, startY-newY);
  smX -= newX;
  smY += newY;
  ctx.lineTo(smX, smY);
  ctx.stroke();
  ctx.closePath();
  leafdrawtimes = 80
  console.log(randomnumber(-500, 500))
  for(var ss = 0; ss<leafdrawtimes; ss++){
    randomval = randomnumber(-200, 200)
    drawleaf((smX+randomnumber(-100, 100)), smY+(randomnumber(-100,100)), randomnumber(3,10),randomnumber(3,10))
  }

}
function drawleaf(x ,y ,radX, radY){
  ctx.beginPath();
  if(specie == "oak"){
    r = randomnumber(0,20)
    g = randomnumber(220,255)
    b = randomnumber(0,20)
  }
  else{
    if(specie == "birch"){
      r = randomnumber(200,220)
      g = randomnumber(240,255)
      b = randomnumber(80,100)
    }
    else{
      if(specie == "california"){
        r = randomnumber(15,20)
        g = randomnumber(65,80)
        b = randomnumber(20,35)
      }
      else{
        r = randomnumber(210,225)
        g = randomnumber(170,190)
        b = randomnumber(35,50)
      }
      }
    }
  
  g = g.toString()
  r = r.toString()
  b = b.toString()

  ctx.fillStyle = `rgb(${r},${g},${b})`
  //void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
  ctx.ellipse(x,y,radX,radY,randomnumber(0,360), 0, 20, false);
  ctx.fill();
  ctx.closePath();
}
function randomnumber(start, end){
  var gen;
  if(start >= 0 && end >= 0){
    gen = Math.floor(Math.random()*(end-start))+start
  }
  else{
    gen = Math.floor(Math.random()*end) + start; // this will get a number between 1 and 99;
    gen *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

  }
  return gen
}

// function withinRange(one, two, range){
//   if(two>one){
//     if(one>(two-range)){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
//   else if(one>two){
//     if(two>(one-range)){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
//   else{
//     return true;
//   }  
// }
function isSameSide(angle1, angle2){
  if(angle1>200){
    if(angle2>200){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    if(angle2 < 100){
      return true;
    }
    else{
      return false;
    }
  }
}
// function checkshit(ang1, ang2){
//   for(var c = 0; c<x; c++){
//         if(isSameSide(angle, angle[x-c])){
//           while(withinRange(angle, angle[x-c], 30)){
//             angle = randomnumber(ang1,ang2)
//         }
//       }
//     }
// }
function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function chooseRight(){
      angle = choose(angles2)
      angind = angles2.indexOf(angle)
      angles2.splice(angind, 20)
      angles2.splice((angind-20), 20)
  }

  function chooseLeft(){
      angle = choose(angles1)
      angind = angles1.indexOf(angle)
      angles1.splice(angind, 20)
      angles1.splice((angind-20), 20)
  }
function drawTrunk(){
  startX = 400;
  startY = 800;
  trunkWidth = randomnumber(100,150)
  treeLen = trunkWidth*2 + randomnumber(50, 100)
  drawLineStart(trunkWidth, treeLen);
}
function drawTree(){
  ctx.clearRect(0,0,800,800)
  for(var first = 0; first <90; first++){
    angles1.push(first)
  }
  for(var second = 270; second < 360; second++){
    angles2.push(second)

}

  //draws trunk
  drawTrunk();
//---------------------------
//draws branches
  runtimes = 10
  for(var x = 0; x<runtimes; x++){
    startX = 400
    startY = stor
    branchW = (trunkWidth/3)+randomnumber(-10, 10)
    branchL = trunkWidth + randomnumber(0, 200)
  //makes sure the number of branches on each side are balanced
    if(right>=runtimes/2){
      chooseRight();
      
}
    else if(left>=runtimes/2){
      chooseLeft();
      
}
    else{
      if(randomnumber(1,3) == 1){
        chooseLeft();
        
        right+=1
      }
      else{
        chooseRight();
        
        left+=1
      }
    }
    //----------
  //draws smaller branches and leaves
    drawLine1(branchW, branchL, angle)
  }
  right = 0
  left = 0
  angles1 =[]
  angles2 =[]
}