var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var prvYear = yyyy - 1;
var prvTwoYr = yyyy - 2;
var currentDate;
var lastYear;
var twoYearsAgo;

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
console.log('mik')
}

//var today = new Date('2/24/2018');
var winStart = new Date('12/20/' + yyyy);
var newYear = yyyy + 1;
var winEnd = new Date('03/19/' + newYear);

if(today >= winStart && today <= winEnd){

   //win();

}

function fall() {
    TweenLite.set("#Sec",{perspective:600});

    var total = 60;
    var warp = document.getElementById("Sec"),	w = window.innerWidth , h = window.innerHeight;

    for (i=0; i<total; i++){
        var Div = document.createElement('div');
        TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
        warp.appendChild(Div);
        animm(Div);
    }

    function animm(elm){
        TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
        TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
        TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
    }

    function R(min,max) {return min+Math.random()*(max-min)}

}


function win() {
    $.snowfall.start({
        content: '<i class="fa fa-snowflake-o"></i>',
        size: {
            min: 20,
            max: 50
        }
    });
}


