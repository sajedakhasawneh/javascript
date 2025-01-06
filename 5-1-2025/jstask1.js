function savetolocalstorage(){
    localStorage.setItem("", document.getElementById("name").value);
    localStorage.setItem("", document.getElementById("age").value);
    localStorage.setItem("", document.getElementById("gender").value);
    localStorage.setItem("", document.getElementById("date").value);
    // localStorage.setItem("", document.getElementById("name").value);//img
    localStorage.setItem("", document.getElementById("desc").value);
    localStorage.setItem("", document.getElementById("major").value);
    localStorage.setItem("", document.getElementById("name").value);
}


function savetolocalstorage(){
let name = document.getElementById("Name").value;
localStorage.setItem("Name", name);

let age = document.getElementById("Age").value;
localStorage.setItem("Age", Age);

let gender = document.getElementById("Gender").value;
localStorage.setItem("Gender", Gender);

let date = document.getElementById("date").value;
localStorage.setItem("date", date);

// let file = document.getElementById("file").files[0];
// if(file){
//     localStorage.setItem("file", file.name);
// }


let Discription = document.getElementById("Discription").value;
localStorage.setItem("Discription", Discription);

let University = document.getElementById("University").value;
localStorage.setItem("University", University);

let HTML = document.getElementById("HTML").checked ? "Yes" : "No";
localStorage.setItem("HTML", HTML);

let CSS = document.getElementById("CSS").checked ? "Yes" : "No";
localStorage.setItem("CSS", CSS);

let JavacSript = document.getElementById("JavacSript").checked ? "Yes" : "No";
localStorage.setItem("JavacSript", JavacSript);

let num = document.getElementById("num").value;
localStorage.setItem("num", num);

let Discription_Sibilings = document.getElementById("dessbi").value;
localStorage.setItem("dessbi", Discription_Sibilings);

// let submit = document.getElementById("submit").value;
// localStorage.setItem("submit", submit);
}