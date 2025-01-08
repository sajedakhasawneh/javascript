function storedata(event){
    event.preventDefault();


    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);

    let age = document.getElementById("age").value;
    localStorage.setItem("age", age);

    let gender = document.getElementById("gender").value;
    localStorage.setItem("gender", gender);

    let date = document.getElementById("date").value;
    localStorage.setItem("date", date);

    let file = document.getElementById("img").files[0];
    if(file){
        localStorage.setItem("img", file.name);
    }

    let description = document.getElementById("desc").value;
    localStorage.setItem("desc", description);


    let major = document.getElementById("major").value;
    localStorage.setItem("major", major);


    // let date = document.getElementById("date").value;
    // localStorage.setItem("date", date);

    let submit = document.getElementById("submit").value;
    localStorage.setItem("submit", submit);

    let html = document.getElementById("html").checked ? "Yes" : "No";
    localStorage.setItem("html", html);

    let css = document.getElementById("css").checked ? "Yes" : "No";
    localStorage.setItem("css", css);

    let jst = document.getElementById("js").checked ? "Yes" : "No";
    localStorage.setItem("js", js);

    toShowData();
}


function toShowData() {
    let showd = document.getElementById("data");
    showd.innerHTML = "<h3>show data:</h3>"
    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        showd.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;

    }

}