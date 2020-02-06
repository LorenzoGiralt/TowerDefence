//2/// - //C/// - //BY////
///0/// - ///R/// - //SENZO///
////2/// - ///E/// -///DEV.JS///
/////0/// - ///A/// -////LORENZO.WEBCONTACT@GMAIL.COM///

/********
 ****** description of different variables for better comprehension 
 * @param canvas => allow display element of canvas
 * @param ctx => allow attribute context rendering 2d for my const canvas
 * @param width => allow attribute an value for width
 * @param height => allow attribute an value for height
 * @param ratio => allow attribute an value for ratio
 ******
 ********/
                          //CODE//
// ----------------Creation of dom element------------------- //
const canvas = document.createElement('canvas');
      ctx = canvas.getContext('2d');
      Range = 60;
// ----------Attribution of my width,height and ratio-------- //
var width = window.innerWidth;
    height = window.innerHeight;
    ratio = window.devicePixelRatio;
// --------------Attribution of resolution screen------------ //
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width+"px";
    canvas.style.height = height+"px";
    ctx.scale(ratio,ratio);
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);    
    ctx.font = '18px Arial';
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    x = width /2; y = height /2;
// --------------Attribution of img---------------------- //
    tower = new Image();
    tower.src ="sprites/td.gif";
    tower.onload = draw;
    ctx.imageSmoothingEnabled = false;
// --------------Create canvas img----------------------- //
sXS = 560; // Position de la tour sur la ligne horizontal
sXY = 400; // Position de la tour sur la ligne vertical

function drawT() {
    ctx.drawImage(tower, sXS,sXY,120,220);
}
function animate(){ 
    drawT();
    update();
    requestAnimationFrame(animate)
}
console.log(Soldier0)
//Si la range de la tour croise celle du SOLDAT

// ------------AppendChild for the display my canvas--------- //
    document.body.appendChild(canvas);
show = document.getElementById("show")
gains = document.getElementById('gains');

gains.addEventListener('click', function(){
    if(scoreX >= 50) {
    towerDps += 2;
    show.innerHTML = `dps de la tour de : ${towerDps}`
    scoreX -= 50;
    score.innerHTML = scoreX;

}
else {
    score.innerHTML = scoreX;

    show.innerHTML = "Il vous manque 50 coins pour améliorer la tour !"

}
}) 
    

























    score = document.getElementById('score');innerScore = document.getElementById('inner');
scoreX= 0;
score.style.position ="absolute";score.style.right = "5.4%";
innerScore.style.position ="absolute";innerScore.style.right = "7%";
