var acounts = [
    {
        "id": 0,
        "email": "admin@gmail.com",
        "username": "adminn",
        "password": "123456"

    }
];
var recipes = [
    {
        "id": 0,
        "name": "Мусака",
        "image": "images/recepi/musaka.jpg",
        "tag": "основни",
        "howTo":"Загрявате мазнината в дълбок тиган или тенджера. В загрятата мазнина задушете измитият, изчистен и нарязан на дребно лук, докато омекне. Добавяте нарязаните на дребно половината домати и каймата, черният пипер и чубрицата, както и една чаена лъжица сол. Може да ползвате кайма, каквато имате под ръка, но най-вкусната мусаката става с кайма смес – 50% свинско и 50 % телешко месо.След като водата от доматите изври добавяте червения пипер. Измивате, почиствате, обелвате и нарязвате на дребни кубчета картофите и ги прибавяте към месото. Намазнявате тавичка на дъното на която поставяте другата половина от доматите и върху тях изсипвате сместа за мусака. Добавяте една непълна чаена чаша гореща вода и поставяте в предварително загрята на 200 градуса фурна. Печете до докато водата изври, а картофите станат златисти.Идва моментът за приготвяне на заливката за мусаката. Тя става лесно и много бързо. Разбърквате киселото мляко и яйцата, след което при постоянно бъркане добавяте и брашното, до получаване на гладка смес. Накрая добавяте и настъргания на дребно кашкавал. Заливате мусаката и печете докато порозовее.",
        "video": ""
    },
    {
        "id": 1,
        "name": "Торта Гараш",
        "image": "images/recepi/garash.jpg",
        "tag": "десерти",
        "video": ""
    },
    {
        "id": 2,
        "name": "Картофи Соте",
        "image": "images/recepi/sote.jpg",
        "tag": "основни",
        "video": ""
    },
    {
        "id": 3,
        "name": "Пилешки крилца на фурна",
        "image": "images/recepi/krilca.jpg",
        "tag": "основни",
        "video": ""
    },
    {
        "id": 4,
        "name": "Баница",
        "image": "images/recepi/banitsa.jpg",
        "tag": "закуски",
        "video": ""
    },
    {
        "id": 5,
        "name": "Студен булков чай",
        "image": "images/recepi/StudenChai.jpg",
        "tag": "напитки",
        "video": ""
    },
    {
        "id": 6,
        "name": "Бял горещ шоколад",
        "image": "images/recepi/BqlShokolat.jpg",
        "tag": "напитки",
        "video": ""
    },
    {
        "id": 7,
        "name": "Офчарска салата",
        "image": "images/recepi/ofcharska.jpg",
        "tag": "салати",
        "video": ""
    },
    {
        "id": 8,
        "name": "Зелена салата",
        "image": "images/recepi/zelena.jpg",
        "tag": "салати",
        "video": ""
    },
    {
        "id": 9,
        "name": "Шоколадов кекс",
        "image": "images/recepi/keks.jpg",
        "tag": "десерти",
        "video": ""
    },
    {
        "id": 10,
        "name": "Шоколадови бисквити",
        "image": "images/recepi/biskviti.jpg",
        "tag": "десерти",
        "video": ""
    },
    {
        "id": 11,
        "name": "Палачинки",
        "image": "images/recepi/palachinki.jpg",
        "tag": "закуски",
        "video": ""
    },
    {
        "id": 12,
        "name": "Хляб",
        "image": "images/recepi/hlqb.jpg",
        "tag": "закуски",
        "video": ""
    },
    {
        "id": 13,
        "name": "Пилешка супа",
        "image": "images/recepi/pileshka.jpg",
        "tag": "супи",
        "video": ""
    },
    {
        "id": 14,
        "name": "Копривена супа",
        "image": "images/recepi/koprivena.jpg",
        "tag": "супи",
        "video": ""
    }
];

var object_id;

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

    let recipe = document.getElementById('allContainer');

    let length = recipes.length;

    for (let i = 0; i < length; i++) {
        let check = document.getElementById(recipes[i].id);
        if (check.classList.contains('d-none')) {
            check.classList.remove("d-none");
        }

    }

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
function Validate() {

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
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('confirmMessage');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    if (pass1.value == pass2.value) {
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
    } else {
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}
function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}
function email_validate(email) {
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if (regMail.test(email) == false) {
        document.getElementById("status").innerHTML = "<span class='warning'>Email address is not valid yet.</span>";
    }
    else {
        document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>";
    }
}

function CheckRegestration() {
    let a = document.getElementById('emailLog');
    let b = document.getElementById('user');
    let c = document.getElementById('pass3');

    var logIn = false;
    for (let i = 0; i < acounts.length; i++) {
        console.log("1");
        if (a.value == acounts[i].email && b.value == acounts[i].username && c.value == acounts[i].password) {
            console.log("2");
            alert("Sucessfully logged in.");
            logIn = true;
            break;
        }
    }
    if (logIn == false) {
        alert("Incorrect information.");
    }
    a.value = '';
    b.value = '';
    c.value = '';

    if (logIn == true) {
        changeHome();
    }
}

function LogInAndClear() {
    let a = document.getElementById('email');
    let b = document.getElementById('txt');
    let c = document.getElementById('pass1');
    let d = document.getElementById('pass2');
    let message = document.getElementById('confirmMessage');
    let status = document.getElementById('status');

    //data input in database 

    a.value = '';
    b.value = '';
    c.value = '';
    d.value = '';
    d.style.backgroundColor = null;
    message.style.color = null;
    message.innerHTML = '';
    status.innerHTML = '';
}
function Load() {
    let recipe = document.getElementById('allContainer');

    let length = recipes.length;
    for (let i = 0; i < length; i++) {
        let all_div1 = document.createElement("div");
        all_div1.classList.add("col", "px-4");
        all_div1.setAttribute("id", recipes[i].id);
        recipe.appendChild(all_div1);

        let all_div2 = document.createElement("div");
        all_div2.classList.add("card", "h-100", "border", "border-success-subtle");
        all_div2.onmouseover = function () {
            all_div2.style.boxShadow = "0 .5rem 1rem #1E4847";
            all_div2.style.borderStyle = "hidden";
            all_div2.style.transitionDuration = "0.75s";
        }

        all_div2.onmouseleave = function () {
            all_div2.style.boxShadow = "none";
            all_div2.borderStyle = "solid";
            all_div2.transitionDuration = "0.75s";
        }
        all_div1.appendChild(all_div2);

        let all_image = document.createElement("img");
        all_image.classList.add("card-img-top");
        all_image.src = recipes[i].image;
        all_div2.appendChild(all_image);

        let all_div3 = document.createElement("div");
        all_div3.classList.add("card-body");
        all_div3.style.backgroundColor = "#A0E8AF";
        all_div2.appendChild(all_div3);

        let all_h = document.createElement("h5");
        all_h.classList.add("card-title");
        all_h.innerText = recipes[i].name;
        all_div3.appendChild(all_h);

        all_div1.addEventListener("click", function () {
            object_id = i;
            openOffCanva();
        });

    }
}
function FilterDes() {

    let recipe = document.getElementById('allContainer');

    let length = recipes.length;

    for (let i = 0; i < length; i++) {
        let check = document.getElementById(recipes[i].id);
        if (check.classList.contains('d-none')) {
            check.classList.remove("d-none");
        }

    }

    for (let i = 0; i < length; i++) {
        let test = document.getElementById(recipes[i].id);
        if (recipes[i].tag != "десерти") {
            test.classList.add("d-none");
        }

    }


}

function FilterOsn() {

    let recipe = document.getElementById('allContainer');

    let length = recipes.length;

    for (let i = 0; i < length; i++) {
        let check = document.getElementById(recipes[i].id);
        if (check.classList.contains('d-none')) {
            check.classList.remove("d-none");
        }

    }

    for (let i = 0; i < length; i++) {
        let test = document.getElementById(recipes[i].id);
        if (recipes[i].tag != "основни") {
            test.classList.add("d-none");
        }
    }


}

function FilterZaks() {

    let recipe = document.getElementById('allContainer');

    let length = recipes.length;

    for (let i = 0; i < length; i++) {
        let check = document.getElementById(recipes[i].id);
        if (check.classList.contains('d-none')) {
            check.classList.remove("d-none");
        }

    }

    for (let i = 0; i < length; i++) {
        let test = document.getElementById(recipes[i].id);
        if (recipes[i].tag != "закуски") {
            test.classList.add("d-none");
        }
    }

}

function FilterSal() {

    let recipe = document.getElementById('allContainer');

    let length = recipes.length;

    for (let i = 0; i < length; i++) {
        let check = document.getElementById(recipes[i].id);
        if (check.classList.contains('d-none')) {
            check.classList.remove("d-none");
        }

    }

    for (let i = 0; i < length; i++) {
        let test = document.getElementById(recipes[i].id);
        if (recipes[i].tag != "салати") {
            test.classList.add("d-none");
        }
    }


}

function FilterSup() {

    let recipe = document.getElementById('allContainer');

    let length = recipes.length;

    for (let i = 0; i < length; i++) {
        let check = document.getElementById(recipes[i].id);
        if (check.classList.contains('d-none')) {
            check.classList.remove("d-none");
        }

    }

    for (let i = 0; i < length; i++) {
        let test = document.getElementById(recipes[i].id);
        if (recipes[i].tag != "супи") {
            test.classList.add("d-none");
        }
    }


}

function FilterNap() {

    let recipe = document.getElementById('allContainer');

    let length = recipes.length;

    for (let i = 0; i < length; i++) {
        let check = document.getElementById(recipes[i].id);
        if (check.classList.contains('d-none')) {
            check.classList.remove("d-none");
        }

    }

    for (let i = 0; i < length; i++) {
        let test = document.getElementById(recipes[i].id);
        if (recipes[i].tag != "напитки") {
            test.classList.add("d-none");
        }
    }


}

// my worst nightmare part 2
function openOffCanva() {
    let page = document.getElementById('body');
    let info_object = document.getElementById("info-object");
    let name_of_offcanva = document.getElementById("name-of-offcanva");
    let image_of_offcanva = document.getElementById("image-of-offcanva");
    let location_object = document.getElementById("location-object");

   // page.classList.remove("overflow-y-auto");

    name_of_offcanva.innerText = recipes[object_id].name;
    info_object.innerText = recipes[object_id].howTo;
    image_of_offcanva.src = recipes[object_id].image;


   
    url = info_locations[object_id].url;
}

function closeOffcanva(){
    let page = document.getElementById('body');
    page.classList.add("overflow-y-auto");
}

function openMaps() {
    window.open(url, "_blank");
}

