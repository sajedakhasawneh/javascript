function changefont(){
    let chfont = document.getElementById("text")
    chfont.style.fontFamily ='fantasy';
}

function changesize(){
    let chsize = document.getElementById("text");
        chsize.style.fontSize = '15px';
  
}

function changeToItalic(stylefont){
    let italicFont = document.getElementById("text").style.fontStyle = "italic";
}


function changeToBold(){
    let boldFont = document.getElementById("text").style.fontWeight = "bold";
}

function changeToul(){
    let boldFont = document.getElementById("text").style.textDecoration = "underline";
}