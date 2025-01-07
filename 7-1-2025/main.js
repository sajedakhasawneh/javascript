function namevalidation(){

    let vname= document.getElementById("fname").value;
    let nameerror= document.getElementById("fncheck");
    let ragname= /^[a-zA-Z]$/;
    if(!ragname.test(vname)){
        // nameerror.innerHTML = "Numbers are not allowed"
        // return false;
        nameerror.innerHTML = "Numbers are not allowed";
       }
    else{
        nameerror.innerHTML = "";
      
    }
}


function lastnamevalidation(){

    let vlname= document.getElementById("lname").value;
    let lnameerror= document.getElementById("lncheck");
    let raglname= /^[a-zA-Z]$/;
    if(!raglname.test(vlname)){
        // nameerror.innerHTML = "Numbers are not allowed"
        // return false;
        lnameerror.innerHTML = "Numbers are not allowed";
      }
    else{
        lnameerror.innerHTML = "";
       
    }
}



function emailvalidation(){
    
    let vemail= document.getElementById("email").value;
    let emailerror = document.getElementById("emailcheck");
    const regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
    if (!regexemail.test(vemail)){
        emailerror.innerHTML= "The email is not valid";
    }
    else{
        emailerror.innerHTML = "";

    }
}


function passwordvalidation(){
    let vpassword = document.getElementById("password").value;
    let passworderror = document.getElementById("passcheck");

    const regexpassword =  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*.]).{8,}$/
    if(!regexpassword.test(vpassword)){
        passworderror.innerHTML = "Invalid Password. Must be 8+ characters, 1 number, 1 special char";
    }
    else{
        passworderror.innerHTML = "";}
}


function bdatevalidation(){
    let vdate= document.getElementById("date").value;
    let dateerror = document.getElementById("dcheck");

    const regexdate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
    if(!regexdate.test(vdate)) {
        dateerror.innerHTML= "The format should be dd/mm/yyyy";}
    else{
        dateerror.innerHTML="";}
    }


function confirmemail(){
    let femail = document.getElementById("email").value;
    let semail = document.getElementById("cemail").value;
    let conf = document.getElementById("cemailcheck");
    conf.innerHTML = ""
    if(femail != semail)
        conf.innerHTML = "not the same email";
}



function confirmpassword(){
    let fpassword = document.getElementById("password").value;
    let spassword = document.getElementById("cpassword").value;
    let confpass = document.getElementById("cpasscheck");
    confpass.innerHTML = ""
    if(fpassword != spassword)
        confpass.innerHTML = "not the same email";
}


