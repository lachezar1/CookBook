function changeAcounts() {
    activating('acounts');
    deactivating('search');
    deactivating('write');
    deactivating('enter');
    deactivating('favourite');

}

function changeSearch() {
    activating('search');
    deactivating('acounts');
    deactivating('write');
    deactivating('enter');
    deactivating('favourite');


}

function changeWrite() {
    activating('write');
    deactivating('acounts');
    deactivating('search');
    deactivating('enter');
    deactivating('favourite');

}

function changeEnter() {
    activating('enter');
    deactivating('acounts');
    deactivating('write');
    deactivating('search');
    deactivating('favourite');

    let a = document.getElementById('mainpage');
    a.classList.add("d-none");

    let b = document.getElementById('LoginReg');
    b.classList.remove("d-none");

}

function changeFave() {
    activating('favourite');
    deactivating('acounts');
    deactivating('write');
    deactivating('enter');
    deactivating('search');

}

function changeHome() {
    deactivating('favourite');
    deactivating('acounts');
    deactivating('write');
    deactivating('enter');
    deactivating('search');


    let a = document.getElementById('mainpage');
    a.classList.remove("d-none");

    let b = document.getElementById('LoginReg');
    b.classList.add("d-none");
}

function ChangeLogIn() {
    let a = document.getElementById('logIn');
    a.classList.remove("d-none");
    let c = document.getElementById('lInbtn');
    c.style.backgroundColor = "#FFFFFF";
    c.classList.add("border-bottom-0");
    c.classList.remove("border-start-0");
    c.classList.remove("border-black");
    c.classList.remove("border-top-0");
    c.classList.remove("border-end-0");


    let b = document.getElementById('signUp');
    b.classList.add("d-none");
    let d = document.getElementById('sUpbtn');
    d.style.backgroundColor = "#EDEAD0";
    d.classList.remove("border-bottom-0");
    d.classList.add("border-start-0");
    d.classList.add("border-black");
    d.classList.add("border-top-0");
    d.classList.add("border-end-0");
}

function ChangeSignIn() {
    let b = document.getElementById('signUp');
    b.classList.remove("d-none");
    let d = document.getElementById('sUpbtn');
    d.style.backgroundColor = "#FFFFFF";
    d.classList.add("border-bottom-0");
    d.classList.remove("border-start-0");
    d.classList.remove("border-black");
    d.classList.remove("border-top-0");
    d.classList.remove("border-end-0");

    let a = document.getElementById('logIn');
    a.classList.add("d-none");
    let c = document.getElementById('lInbtn');
    c.style.backgroundColor = "#EDEAD0";
    c.classList.remove("border-bottom-0");
    c.classList.add("border-start-0");
    c.classList.add("border-black");
    c.classList.add("border-top-0");
    c.classList.add("border-end-0");
}

function activating(btn) {
    let a = document.getElementById(btn)
    a.style.backgroundColor = "#EDEAD0";
    a.style.color = "#000000";
    a.classList.remove("btn-success");
    a.classList.add("btn-outline-success");

    btn += 'Nav';

    let b = document.getElementById(btn)
    b.style.backgroundColor = "#EDEAD0";
    b.style.color = "#000000";
    b.classList.remove("btn-success");
    b.classList.add("btn-outline-success");

    btn += 'F';
    let c = document.getElementById(btn)
    c.style.backgroundColor = "#29aafe";

}

function deactivating(btn) {
    let a = document.getElementById(btn);
    a.style.backgroundColor = null;
    a.style.color = null;
    a.classList.add("btn-success");
    a.classList.remove("btn-outline-success");

    btn += 'Nav';
    let b = document.getElementById(btn);
    b.style.backgroundColor = null;
    b.style.color = null;
    b.classList.add("btn-success");
    b.classList.remove("btn-outline-success");

    btn += 'F';
    let c = document.getElementById(btn)
    c.style.backgroundColor = null;

}

function checkPass() {
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if (pass1.value == pass2.value) {
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
    } else {
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}
function validatephone(phone) {
    var maintainplus = '';
    var numval = phone.value
    if (numval.charAt(0) == '+') {
        var maintainplus = '';
    }
    curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g, '');
    phone.value = maintainplus + curphonevar;
    var maintainplus = '';
    phone.focus;
}
// validates text only
function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}
// validate email
function email_validate(email) {
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if (regMail.test(email) == false) {
        document.getElementById("status").innerHTML = "<span class='warning'>Email address is not valid yet.</span>";
    }
    else {
        document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>";
    }
}
// validate date of birth
function dob_validate(dob) {
    var regDOB = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/;

    if (regDOB.test(dob) == false) {
        document.getElementById("statusDOB").innerHTML = "<span class='warning'>DOB is only used to verify your age.</span>";
    }
    else {
        document.getElementById("statusDOB").innerHTML = "<span class='valid'>Thanks, you have entered a valid DOB!</span>";
    }
}
// validate address
function add_validate(address) {
    var regAdd = /^(?=.*\d)[a-zA-Z\s\d\/]+$/;

    if (regAdd.test(address) == false) {
        document.getElementById("statusAdd").innerHTML = "<span class='warning'>Address is not valid yet.</span>";
    }
    else {
        document.getElementById("statusAdd").innerHTML = "<span class='valid'>Thanks, Address looks valid!</span>";
    }
}

