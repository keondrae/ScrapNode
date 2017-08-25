var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if(dd < 10){
    dd = '0' + dd
}

if(mm < 10){
    mm = '0' + mm
}

//var today = new Date('11/24/2017');
var fallStart = new Date('11/22/' + yyyy);
var fallEnd = new Date('12/20/' + yyyy);

if(today >= fallStart && today <= fallEnd){

    fall();
}

//var today = new Date('2/24/2018');
var winStart = new Date('12/20/' + yyyy);
var newYear = yyyy + 1;
var winEnd = new Date('03/19/' + newYear);

if(today >= winStart && today <= winEnd){

    win();
}

function fall() {
    TweenLite.set("#Sec",{perspective:600});

    var total = 30;
    var warp = document.getElementById("Sec"),	w = window.innerWidth , h = window.innerHeight;

    for (var i=0; i<total; i++){
        var Div = document.createElement('div');
        TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
        warp.appendChild(Div);
        animm(Div);
    }

    function animm(elm){
        TweenMax.to(elm,R(6,15),{
            y:h+100,
            ease:Linear.easeNone,
            repeat:-1,
            delay:-15
        });
        TweenMax.to(elm,R(4,8),{
            x:'+=100',
            rotationZ:R(0,180),
            repeat:-1,
            yoyo:true,
            ease:Sine.easeInOut
        });
        TweenMax.to(elm,R(2,8),{
            rotationX:R(0,360),
            rotationY:R(0,360),
            repeat:-1,
            yoyo:true,
            ease:Sine.easeInOut,
            delay:-5
        });
    }

    function R(min,max) {return min+Math.random()*(max-min)}


}

function fallLimited() {
    TweenLite.set("#Sec",{perspective:600});

    var total = 60;
    var warp = document.getElementById("Sec"),	w = window.innerWidth , h = window.innerHeight;

    for (var i=0; i<total; i++){
        var Div = document.createElement('div');
        TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
        warp.appendChild(Div);
        animm(Div);
    }

    function animm(elm){
        TweenMax.to(elm,R(6,15),{
            y:h+100,
            ease:Linear.easeNone,
            repeat: 1,
            delay:-15
        });
        TweenMax.to(elm,R(4,8),{
            x:'+=100',
            rotationZ:R(0,180),
            repeat: 1,
            yoyo:true,
            ease:Sine.easeInOut
        });
        TweenMax.to(elm,R(2,8),{
            rotationX:R(0,360),
            rotationY:R(0,360),
            repeat: 1,
            yoyo:true,
            ease:Sine.easeInOut,
            delay:-5
        });
    }

    function R(min,max) {return min+Math.random()*(max-min)}
}

function win() {

    TweenLite.set("#Sec",{perspective:600});

    var total = 30;
    var warp = document.getElementById("Sec"),	w = window.innerWidth , h = window.innerHeight;

    for (var i=0; i<total; i++){
        var Div = document.createElement('div');
        TweenLite.set(Div,{attr:{class:'cop'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
        warp.appendChild(Div);
        animm(Div);
    }

    function animm(elm){
        TweenMax.to(elm,R(6,15),{
            y:h+100,
            ease:Linear.easeNone,
            repeat:-1,
            delay:-15
        });
        TweenMax.to(elm,R(4,8),{
            x:'+=100',
            rotationZ:R(0,180),
            repeat:-1,
            yoyo:true,
            ease:Sine.easeInOut
        });
        TweenMax.to(elm,R(2,8),{
            rotationX:R(0,360),
            rotationY:R(0,360),
            repeat:-1,
            yoyo:true,
            ease:Sine.easeInOut,
            delay:-5
        });
    }

    function R(min,max) {return min+Math.random()*(max-min)}

}

function winLimided() {

    TweenLite.set("#Sec",{perspective:600});

    var total = 60;
    var warp = document.getElementById("Sec"),	w = window.innerWidth , h = window.innerHeight;

    for (var i=0; i<total; i++){
        var Div = document.createElement('div');
        TweenLite.set(Div,{attr:{class:'cop'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
        warp.appendChild(Div);
        animm(Div);
    }

    function animm(elm){
        TweenMax.to(elm,R(6,15),{
            y:h+100,
            ease:Linear.easeNone,
            repeat: 1,
            delay:-15
        });
        TweenMax.to(elm,R(4,8),{
            x:'+=100',
            rotationZ:R(0,180),
            repeat: 1,
            yoyo:true,
            ease:Sine.easeInOut
        });
        TweenMax.to(elm,R(2,8),{
            rotationX:R(0,360),
            rotationY:R(0,360),
            repeat: 1,
            yoyo:true,
            ease:Sine.easeInOut,
            delay:-5
        });
    }

    function R(min,max) {return min+Math.random()*(max-min)}

}

$('#DashboardLogo').click(function () {

    var time = 0;
    var canvas = document.getElementById("emp").appendChild(document.createElement('canvas'));

    var ctx = canvas.getContext('2d');
    var fontSize = 18;
    var chars = generateChars();
    var columns;
    var drops; // Current position of last letter (for each column)
    var drawnToBottom;

// Generate Matrix code characters
    function generateChars() {
        var chars = '0123456789';

        // Get ALL half-width katakana characters by unicode value
        // I love katakana
        for (var i = 0; i <= 55; i++) {
            chars += String.fromCharCode(i + 65382);
        }

        return chars.split('');
    }

// Initialize default canvas state
    function initCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        columns = Math.round(canvas.width / fontSize);
        drops = [];

        // Set initial position on y coordinate for each column
        for (var i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        drawnToBottom = false;
    }

    window.onresize = function() {
        initCanvas();
    };

    function draw() {
        // Set nearly transparent background so character trail is visible
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set color and font of falling letters
        ctx.fillStyle = '#19FF19';
        ctx.font = 'bold ' + fontSize + 'px monospace';

        var dropCount = drops.length;
        var charCount = chars.length;

        for (var i = 0; i < dropCount; i++) {
            // Choose a random letter
            var text = chars[Math.floor(Math.random() * charCount)];
            // Get the y position of the letter
            var rowNum = drops[i] * fontSize;
            // Draw it!
            ctx.fillText(text, i * fontSize, rowNum);

            // Check if the canvas has been drawn to the bottom
            if (rowNum > canvas.height) drawnToBottom = true;

            // Randomly reset the y position of a column
            if ((!drawnToBottom && Math.random() > 0.925) || (drawnToBottom && Math.random() > 0.95)) drops[i] = 0;

            drops[i]++;
        }
        //Run for 100 Something...
        time++;
        if(time > 100){
            clearInterval(int);
            $('#emp').empty();
        }
    }

    initCanvas();
    var int = setInterval(draw, 45);
});