function store(event) {

    event.preventDefault();

    var name = document.getElementById("Name").value;
    localStorage.setItem("Name", name);

    var Age = document.getElementById("Age").value;
    localStorage.setItem("Age", Age);

    var Gender = document.getElementById("Gender").value;
    localStorage.setItem("Gender", Gender);

    var date = document.getElementById("date").value;
    localStorage.setItem("date", date);

    var file = document.getElementById("file").files[0];
    if(file){
        localStorage.setItem("file", file.name);
    }


    var Discription = document.getElementById("Discription").value;
    localStorage.setItem("Discription", Discription);

    var University = document.getElementById("University").value;
    localStorage.setItem("University", University);

    var HTML = document.getElementById("HTML").checked ? "Yes" : "No";
    localStorage.setItem("HTML", HTML);

    var CSS = document.getElementById("CSS").checked ? "Yes" : "No";
    localStorage.setItem("CSS", CSS);

    var JavacSript = document.getElementById("JavacSript").checked ? "Yes" : "No";
    localStorage.setItem("JavacSript", JavacSript);

    var num = document.getElementById("num").value;
    localStorage.setItem("num", num);

    var Discription_num = document.getElementById("Discription_num").value;
    localStorage.setItem("Discription_num", Discription_num);

    var submit = document.getElementById("submit").value;
    localStorage.setItem("submit", submit);

    display_form_info();

}

function display_form_info() {
    var output_div = document.getElementById("output");
    output_div.innerHTML = "<h3>Stored Form Data:</h3>"

    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        output_div.innerHTML += <p><strong>${key}:</strong> ${value}</p>;

    }

}