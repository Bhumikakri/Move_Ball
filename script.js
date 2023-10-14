let ball = document.getElementById("ball");
let text = document.querySelector("h1");
left= 0;
tp = 0;
function pressed(event){
    // console.log(event);

    let heightBrowser = document.documentElement.clientHeight;
    let widthBrowser = document.documentElement.clientWidth;
    let ballwidth = ball.offsetWidth;

    let Key = event.keyCode;
    console.log(Key);

    // -----left--------------
    if(Key == 68 || Key == 39){
        if(left + ballwidth + 10 <= widthBrowser){
            ball.style.left = left+20+"px";
            left +=10;
            ball.style.background = "  radial-gradient(circle, rgba(5,6,50,1) 9%, rgba(231,220,114,1) 50%, rgba(232,55,49,1) 73%)";
            // ball.style.transform = `rotateZ(${degLR}deg)`;
            text.setAttribute("class","heading");
            text.innerText = `Move the ball`
        }
       
    }
//---------------------------down----------
    if(Key == 83 || Key == 40){
        if(tp + ballwidth + 10 <= heightBrowser){
            ball.style.top = tp+10+"px";
            tp +=10;
            ball.style.background = "radial-gradient(circle, rgba(237,142,184,1) 13%, rgba(78,243,202,1) 41%, rgba(247,7,205,1) 66%)";
            text.setAttribute("class","heading");
            text.innerText = `Move the ball`
        }
       
    }

//-----------------------top-------------------
    if(Key == 87 || Key == 38){
        if(tp - 10 >= 0){
            ball.style.top = tp-10+"px";
            tp -=10;
            ball.style.background = "radial-gradient(circle, rgba(227,251,57,1) 15%, rgb(248, 66, 66) 52%, rgba(16,18,99,1) 100%)";
            text.setAttribute("class","heading");
            text.innerText = `Move the ball`
        }
       
    }

// ---------------------right------------------------

    if(Key == 65 || Key == 37){
        if(left - 10 >= 0){
            ball.style.left = left-20+"px";
            left -=10;
            ball.style.background = "url('https://i.pinimg.com/originals/64/c3/81/64c3812700389fa9a24a6c12580c50e0.jpg')";
            text.setAttribute("class","heading");
            text.innerText = `Move the ball`
        }
       
    }



}


document.addEventListener("keydown", pressed);