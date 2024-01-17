



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

