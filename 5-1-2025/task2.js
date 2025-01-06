let buttonTop = document.getElementById("btntop");
window.onscroll = function() {scrollFun()};

function scrollFun(){
    if (document.body.scrollTop >20  || document.documentElement.scrollTop >20)
            buttonTop.style.display = "block";
    else    
            buttonTop.style.display ="none";
        }


function toTheTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}