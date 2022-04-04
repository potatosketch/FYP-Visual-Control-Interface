var allimg = [];
var allimgi = 0;
var strfont; //loadimage
var cont;
//var fxonoff = false;

//----------
//spritesheet element
var cols=4;
var rows=4;
var totalCellCount = cols*rows;
var imgw = 320;
var imgh = 320;

var cellcorx =[];
var cellcory =[];
//-----------
//var of index representation of rect sprite sheet
var bbq = 0;
//-----------
//botton "edge bounce"
var btnedge;

//array of edgebounce
let rba = [];
//-----------
// botton "layerrotation"
var btnlayer;

let rt =[];
let lyt = [];
var index= 0;
//-----------
// botton "layerrotation"
var btnarm;

let art =[];
//-----------
var btniiarm;

let iiart =[];
//-----------
var btnpolarm;

let p = [];
//-----------
var btnpolara;
var anglea;

var dxa;
var dya;

let pa = [];
//-----------
var filteronoff =0;
var indexf =0;
var currFilterMode;
//-----------

var cleanbg1 = 0;
var cleanbg2 = 0;
var cleanbg3 = 0;
var cleanbg4 = 0;
var cleanbg5 = 0;
var cleanbg6 = 0;


//-----------



function preload() {
  strfont = loadImage('media_material/strfont.png');
  cont = loadImage('media_material/cont.png');
  bg4 = loadImage('media_material/bg4.png');
  bg2 = loadImage('media_material/bg2.png');
  bg1 = loadImage('media_material/bg1.png');
  buda = loadImage('media_material/buddha.png');
  bg5 = loadImage('media_material/bg5.png');
  sign = loadImage('media_material/sign.png');
  texture = loadImage('media_material/texture.png');
}

function setup() {
  //main Canvas
  createCanvas(1280, 360);
  stroke(4);
  //Canvas2
  fill(100);
  rect(640,0,640,360);
  angleMode(DEGREES);
  //----------
  allimg = [strfont,cont,bg4,bg2,bg1,buda,bg5,sign,texture];


  //----------
  var cellw = int(imgw/cols);
  var cellh = int(imgh/rows);

  for(var index= 0; index<16; index++){
    cellcorx[index] = index%cols* cellw;
    cellcory[index] = int(index/cols)* cellh;
    //fill(255,100);
  }
  //----------
  btnedge = createButton('edge bounce');
  btnedge.mousePressed(edgebounce);
  btnedge.position(width-100,10);

  btnclean1 = createButton('clean');
  btnclean1.mousePressed(clean1);
  btnclean1.position(width-150,30);

  btnallow1 = createButton('allow');
  btnallow1.mousePressed(allow1);
  btnallow1.position(width-100,30);

  lyt=[25,50,75,100,150,200,250,300,400,500];
  currlyt = lyt[index];
  btnlayer = createButton('layerrotation');
  btnlayer.mousePressed(layerrotate);
  btnlayer.position(width-100,60);
  //----------

  btnclean2 = createButton('clean');
  btnclean2.mousePressed(clean2);
  btnclean2.position(width-150,80);

  btnallow2 = createButton('allow');
  btnallow2.mousePressed(allow2);
  btnallow2.position(width-100,80);
  //----------
  btnarm = createButton('fansrotation');
  btnarm.mousePressed(armrotate);
    btnarm.position(width-100,110);

  btnclean3 = createButton('clean');
  btnclean3.mousePressed(clean3);
  btnclean3.position(width-150,130);

  btnallow3 = createButton('allow');
  btnallow3.mousePressed(allow3);
  btnallow3.position(width-100,130);
  //----------
  btniiarm = createButton('fansrotation2');
  btniiarm.mousePressed(armrotate2);
  btniiarm.position(width-100,160);

  btnclean4 = createButton('clean');
  btnclean4.mousePressed(clean4);
  btnclean4.position(width-150,180);


  btnallow4 = createButton('allow');
  btnallow4.mousePressed(allow4);
  btnallow4.position(width-100,180);

  //----------
  btnpolara = createButton('polar acc');
  btnpolara.mousePressed(polara);
    btnpolara.position(width-100,210);

  btnclean5 = createButton('clean');
  btnclean5.mousePressed(clean5);
  btnclean5.position(width-150,230);

  btnallow5 = createButton('allow');
  btnallow5.mousePressed(allow5);
  btnallow5.position(width-100,230);

  //----------

  btnclean6 = createButton('clean mouseFX');
  btnclean6.mousePressed(clean6);
  btnclean6.position(width-300,30);

  btnallow6 = createButton('allow mouseFX');
  btnallow6.mousePressed(allow6);
    btnallow6.position(width-300,55);


  //----------

  for (let i =0;i <40;i++){
        //let wc= mouseX;
        //let hc= mouseY;
    let dx;
    let dy;
    let rad = random(50,150);
    let angle =random(0,180);
    let ang;
    let speed = random(-100,505);
    let crad = random(30,75);
    p[i] = new Polar(dx,dy,rad,angle,ang,speed,crad,cellcorx,cellcory,bbq);

  }

  //----------
      filterModes = [
        GRAY,
        OPAQUE,
        INVERT,
        POSTERIZE,
        BLUR,
        ERODE,
        DILATE,
        BLUR,
        THRESHOLD
      ];

      currFilterMode = filterModes[indexf];
      btnchoice = createButton("Filter Apply");


      btnon = createButton('FX on');
      btnoff = createButton('FX off');

      btnchoice.mousePressed(switchFilter);
      btnchoice.position(width-130,height-90);
      btnon.mousePressed(fxon);
      btnon.position(width-150,height-30);
      btnoff.mousePressed(fxoff);
      btnoff.position(width-90,height-30);

      //btnchoice.mousePressed(switchFilter);

}

////////////////////////////////////////////////////////////////////////////////////////

function draw() {
  //Early setting
  cellw = int(imgw/cols);
  cellh = int(imgh/rows);



  //Canvas3

  //rect(cellcorx,cellcory,cellw,cellh);
  if(key === "a"){
    allimgi = 0;
  } else if (key === "s"){
    allimgi = 1;
  } else if (key === "d"){
    allimgi = 2;
  } else if (key === "f"){
    allimgi = 3;
  } else if (key === "g"){
    allimgi = 4;
  } else if (key === "h"){
    allimgi = 5;
  } else if (key === "j"){
    allimgi = 6;
  } else if (key === "k"){
    allimgi = 7;
  } else if (key === "l"){
    allimgi = 8;
  }

  image(allimg[allimgi], 680,80,200,200,cellcorx[0],cellcory[0],320,320);

  var idcc = 4;
  var idcr = 4;
  var idcw = 200;
  var idch = 200;
  var idcx = [];
  var idcy = [];
  var idccellw = int(idcw/idcc);
  var idccellh = int(idch/idcr);

  for (var idci=0; idci<16; idci++){
    idcx[idci] = idci%idcc* idccellw;
    idcy[idci] = int(idci/idcc)* idccellh;
    fill(255,100);
    rect(680 + idcx[idci],80+idcy[idci],idccellw, idccellh);
  }




  if (key === "1"){
    push();
    image(allimg[allimgi],920,80,200,200, cellcorx[0],cellcory[0],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[0],80+idcy[0],idccellw, idccellh);
    bbq = 0;
    pop();
  } else if (key === "2"){
    push();
    image(allimg[allimgi],920,80,200,200, cellcorx[1],cellcory[1],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[1],80+idcy[1],idccellw, idccellh);
    bbq = 1;
    pop();
  } else if (key === "3"){
    image(allimg[allimgi],920,80,200,200, cellcorx[2],cellcory[2],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[2],80+idcy[2],idccellw, idccellh);
    bbq = 2;
  } else if (key === "4"){
    image(allimg[allimgi],920,80,200,200, cellcorx[3],cellcory[3],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[3],80+idcy[3],idccellw, idccellh);
    bbq = 3;
  } else if (key === "5"){
    image(allimg[allimgi],920,80,200,200, cellcorx[4],cellcory[4],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[4],80+idcy[4],idccellw, idccellh);
    bbq = 4;
  } else if (key === "6"){
    image(allimg[allimgi],920,80,200,200, cellcorx[5],cellcory[5],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[5],80+idcy[5],idccellw, idccellh);
    bbq = 5;
  } else if (key === "7"){
    image(allimg[allimgi],920,80,200,200, cellcorx[6],cellcory[6],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[6],80+idcy[6],idccellw, idccellh);
    bbq = 6;
  } else if (key === "8"){
    image(allimg[allimgi],920,80,200,200, cellcorx[7],cellcory[7],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[7],80+idcy[7],idccellw, idccellh);
    bbq = 7;
  } else if (key === "9"){
    image(allimg[allimgi],920,80,200,200, cellcorx[8],cellcory[8],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[8],80+idcy[8],idccellw, idccellh);
    bbq = 8;
  } else if (key === "q"){
    image(allimg[allimgi],920,80,200,200, cellcorx[9],cellcory[9],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[9],80+idcy[9],idccellw, idccellh);
    bbq = 9;
  } else if (key === "w"){
    image(allimg[allimgi],920,80,200,200, cellcorx[10],cellcory[10],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[10],80+idcy[10],idccellw, idccellh);
    bbq = 10;
  } else if (key === "e"){
    image(allimg[allimgi],920,80,200,200, cellcorx[11],cellcory[11],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[11],80+idcy[11],idccellw, idccellh);
    bbq = 11;
  } else if (key === "r"){
    image(allimg[allimgi],920,80,200,200, cellcorx[12],cellcory[12],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[12],80+idcy[12],idccellw, idccellh);
    bbq = 12;
  } else if (key === "t"){
    image(allimg[allimgi],920,80,200,200, cellcorx[13],cellcory[13],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[13],80+idcy[13],idccellw, idccellh);
    bbq = 13;
  } else if (key === "y"){
    image(allimg[allimgi],920,80,200,200, cellcorx[14],cellcory[14],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[14],80+idcy[14],idccellw, idccellh);
    bbq = 14;
  } else if (key === "u"){
    image(allimg[allimgi],920,80,200,200, cellcorx[15],cellcory[15],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[15],80+idcy[15],idccellw, idccellh);
    bbq = 15;
  } else {
    image(allimg[allimgi],920,80,200,200, cellcorx[0],cellcory[0],cellw,cellh);
    fill(255,0,0,200);
    rect(680 + idcx[0],80+idcy[0],idccellw, idccellh);
    bbq = 0;
  }

//-----------------------------------------------------------------------
//print(cleanbg);

  //Canvas1
  fill(0,20);
  rect(0,0,640,360);


  fill(150,90);
  rect(640,0,640,360);



  if (cleanbg6 === 0){

      for (let i =0;i <p.length;i++){

      p[i].show();
      p[i].move();
    }
  }else if (cleanbg6 === 1){
    fill(0);
    rect(0,0,640,360);
  }








//---------

if (cleanbg4 === 0){
for (let i =0;i <iiart.length;i++){
//rt[i].show();
iiart[i].move();
}
}else if (cleanbg4 ===1){
    fill(0);
    rect(0,0,640,360);

}




if (cleanbg3 === 0){
for (let i =0;i <art.length;i++){
//rt[i].show();
art[i].move();
}
}else if (cleanbg3 ===1){
    fill(0);
    rect(0,0,640,360);
}

if (cleanbg2 === 0){
for (let i =0;i <rt.length;i++){
  fill(0,20);
  rect(0,0,640,360);
    rt[i].move();

}

}else if (cleanbg2 ===1){
    fill(0);
    rect(0,0,640,360);

}



if (cleanbg5 === 0){
  for (let i =0; i <pa.length; i++){
    //pa[i].cal();
    pa[i].show();
    pa[i].move();
  }
}else if (cleanbg5 === 1){
  fill(0);
  rect(0,0,640,360);
}



  //if(fxonoff= true){
if (cleanbg1 === 0){
  for (let i =0;i <rba.length;i++){
    rba[i].show();
    rba[i].move();
  }
}else if (cleanbg1 === 1){
  fill(0);
  rect(0,0,640,360);
}



  //}
  //if(key = "m"){
    //fill(0,0,0,20);
    //rect(0,0,640,360);
  //}
  //clear();
  if(filteronoff===1) {
    filter(currFilterMode);
  } else if (filteronoff === 0) {
    fill(255,0,0,20);
    rect(0,0,640,360);
  }
  push();
  rectMode(CENTER);
  rect(width-100, height - 50, 120, 20);
  labal(currFilterMode);
  pop();
}
////////////////////////////////////////////////////////////////////////////////////////



function edgebounce(){

  //if(fxonoff=true){
    let rbx = random(100,300);
    let rby = random(100,300);
    let speedx = random(-1,1);
    let speedy = random(-1,1);

    let rbarba = new Rtbounce(rbx, rby, 50, 50, speedx,speedy,cellcorx,cellcory,bbq);

    rba.push(rbarba);
  //}
}

function layerrotate(){


  let angle1 =0;
  let rrx = 0;
  let rry =0;

  let rtmove = 1;


  if (index < lyt.length-1){
    index++;
    if(index==1  ||index ==3||index ==5||index==7||index==9){
      rtmove =-1;
    }
  }else{
    index = 0;
  }
  currlyt = lyt[index];

  let rtrt = new Rotrec(rrx,rry,angle1,currlyt,rtmove,cellcorx,cellcory,bbq);
  rt.push(rtrt);
//}
}

function armrotate(){

  let aangle1 =random(0,45);
  let arrx = 0;
  let arry =0;

  let artrt = new ARotrec(arrx,arry,aangle1,cellcorx,cellcory,bbq);
  art.push(artrt);

}

function armrotate2(){

  let iiaangle1 =random(0,45);
  let iiarrx = 0;
  let iiarry =0;

  let iiartrt = new AARotrec(iiarrx,iiarry,iiaangle1,cellcorx,cellcory,bbq);
  iiart.push(iiartrt);

}

function polara(){
  for (let i =0;i <20;i++){
  let rada = random(20,150);
  let anglea = random(-90,0);
  //let anglead = random(-90,0);
  pa[i] = new Polara(dxa,dya,rada,anglea,0,0.05,cellcorx,cellcory,bbq);
  }
}

function fxon() {

  filteronoff = 1;

}

function fxoff() {

  filteronoff = 0;

}


function switchFilter() {
  if (indexf < filterModes.length - 1)
    indexf++;
  else
    indexf = 0;
  currFilterMode = filterModes[indexf];
}

function labal(currFilterMode) {
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(16);
  text(currFilterMode, width-100, height - 50);
}

function clean1() {
cleanbg1 = 1;
print(cleanbg1);
}

function allow1() {
cleanbg1 = 0;
print(cleanbg1);
}

function clean2() {
cleanbg2 = 1;
print(cleanbg2);
}

function allow2() {
cleanbg2 = 0;
print(cleanbg2);
}

function clean3() {
cleanbg3 = 1;
print(cleanbg3);
}

function allow3() {
cleanbg3 = 0;
print(cleanbg3);
}

function clean4() {
cleanbg4 = 1;
print(cleanbg4);
}

function allow4() {
cleanbg4 = 0;
print(cleanbg4);
}

function clean5() {
cleanbg5 = 1;
print(cleanbg5);
}

function allow5() {
cleanbg5 = 0;
print(cleanbg5);
}

function clean6() {
cleanbg6 = 1;
print(cleanbg6);
}

function allow6() {
cleanbg6 = 0;
print(cleanbg6);
}






////////////////////////////////////////////////////////////////////////////////////////

class Rtbounce{
  constructor(rbx,rby,rw,rh, speedx, speedy,cellcorx,cellcory,bbq) {
    this.rbx = rbx;
    this.rby = rby;
    this.rw = rw;
    this.rh = rh;
    this.speedx = speedx;
    this.speedy = speedy;
    this.cellcorx =cellcorx
    this.cellcory =cellcory
    this.bbq = bbq;
  }

  show(){
    cellw = int(imgw/cols);
    cellh = int(imgh/rows);
    //noStroke();
    //fill(255,0,0);
    //rect(this.rbx,this.rby,this.rw,this.rh);
    image(allimg[allimgi],this.rbx,this.rby,this.rw,this.rw, this.cellcorx[this.bbq],this.cellcory[this.bbq],cellw,cellh);

  }

  move(){
    this.rbx += this.speedx;
    this.rby += this.speedy;
    if(this.rbx+this.rw> 640 || this.rbx<0){
      this.speedx = this.speedx *-1;

    }

    if(this.rby+this.rh>360||this.rby<0){
      this.speedy = this.speedy *-1;
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////
class Rotrec{
  constructor(rrx,rry,angle1,currlyt,rtmove,cellcorx,cellcory,bbq) {
    this.rrx = rrx;
    this.rry = rry;
    this.angle1 = angle1;
    this.currlyt = currlyt;
    this.cellcorx = cellcorx;
    this.cellcory = cellcory;
    this.bbq = bbq;
    //this.img = img;
    this.rtmove = rtmove;

  }



  move(){
    push();
    translate(width/4,height/2);
    rotate(this.angle1);
    imageMode(CENTER);
    image(allimg[allimgi],this.rrx,this.rry,this.currlyt,this.currlyt,this.cellcorx[this.bbq],this.cellcory[this.bbq],cellw,cellh);
    this.angle1 = this.angle1 + this.rtmove;
    pop();
  }
}

////////////////////////////////////////////////////////////////////////////////////////
class ARotrec{
  constructor(arrx,arry,aangle1,cellcorx,cellcory,bbq) {
    this.arrx = arrx;
    this.arry = arry;
    this.aangle1 = aangle1;
    this.cellcorx = cellcorx;
    this.cellcory = cellcory;
    this.bbq = bbq;
  }



  move(){
    push();
    translate(width/4,height/2);
    rotate(this.aangle1);
    //rectMode(CENTER);
    image(allimg[allimgi],this.arrx,this.arry,100,100,this.cellcorx[this.bbq],this.cellcory[this.bbq],cellw,cellh);
    this.aangle1 = this.aangle1 +1;
    pop();
  }
}


////////////////////////////////////////////////////////////////////////////////////////
class AARotrec{
  constructor(iiarrx,iiarry,iiaangle1,cellcorx,cellcory,bbq) {
    this.iiarrx = iiarrx;
    this.iiarry = iiarry;
    this.iiaangle1 = iiaangle1;
    this.cellcorx = cellcorx;
    this.cellcory = cellcory;
    this.bbq = bbq;
  }



  move(){
    push();
    translate(width/4,height/2);
    rotate(this.iiaangle1);
    //rectMode(CENTER);
    image(allimg[allimgi],this.iiarrx,this.iiarry,200,200,this.cellcorx[this.bbq],this.cellcory[this.bbq],cellw,cellh);
    this.iiaangle1 = this.iiaangle1 -1;
    pop();
  }
}

////////////////////////////////////////////////////////////////////////////////////////

class Polar{
  constructor(dx,dy,rad,angle,ang,speed,crad,cellcorx,cellcory,bbq) {
    this.dx = dx;
    this.dy = dy;

    this.rad = rad;
    this.angle = angle;
    this.ang =ang;
    this.speed=speed;
    this.crad = crad;
    this.cellcorx = cellcorx;
    this.cellcory = cellcory;
    this.bbq = bbq;
  }

  show(){
    push();
    this.ang = radians(this.angle);
    this.dx = mouseX + this.rad * cos(this.ang);
    this.dy = mouseY + this.rad * sin(this.ang);
    fill(0,255,0);
    rectMode(CENTER);
    image(allimg[allimgi],this.dx,this.dy,this.crad,this.crad,this.cellcorx[this.bbq],this.cellcory[this.bbq],cellw,cellh);
    //ellipse(this.dx,this.dy, this.crad,this.crad);
    pop();
  }
  move(){
    this.angle += this.speed;
  }
}

////////////////////////////////////////////////////////////////////////////////////////
class Polara {
  constructor(dxa,dya,rada,anglea,anglevel,anglespeed,cellcorx,cellcory,bbq) {
    this.dxa = dxa;
    this.dya = dya;
    this.rada = rada;
    this.anglea = anglea;
    this.anglevel = anglevel;
    this.anglespeed = anglespeed;
    this.cellcorx = cellcorx;
    this.cellcory = cellcory;
    this.bbq = bbq;
    //this.anglead =anglead;
  }



  show(){
    push();
    translate(width/4, height/2);
    //this.anglea;
    //this.anglead;
    //this.rada;
    this.dxa = this.rada*cos(this.anglea);
    this.dya = this.rada*sin(this.anglea);
    fill(0,255,0);
    //ellipse(this.dxa,this.dya,10,10);
    rectMode(CENTER);
    image(allimg[allimgi],this.dxa,this.dya,35,35,this.cellcorx[this.bbq],this.cellcory[this.bbq],cellw,cellh);

    pop();
  }

  move(){
    this.anglevel += this.anglespeed;
    this.anglea += this.anglevel;
  }
}
