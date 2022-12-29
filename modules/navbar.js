
/*
<!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
*/

let addclasses = (classes, element) => {
    let classlist = classes.split(" ")
    for(let i = 0; i < classlist.length; i++){
        element.classList.add(classlist[i]);
    }
}


// load bootstrap req
let blink = document.createElement("link");
blink.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css");
blink.setAttribute("rel", "stylesheet");;
blink.setAttribute("integrity", "sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi");
blink.setAttribute("crossorigin", "anonymous");

let bscript = document.createElement("script");
bscript.setAttribute("src", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
bscript.setAttribute("integity", "sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"); 
bscript.setAttribute("crossorigin", "anonynous");;

document.head.appendChild(blink);
document.head.appendChild(bscript);



// navbar
let navbar = document.createElement("nav")
addclasses("container-fluid d-flex align-items-center text-center", navbar);
navbar.setAttribute("id", "navbar");

let navMaindiv = document.createElement("div");
addclasses("conteiner center", navMaindiv);
navMaindiv.setAttribute("id", "nav_container");



let navInside = document.createElement("div");
addclasses("nav_inside", navInside);

// links
let navLink = document.createElement("a");
addclasses("nav-link", navLink);
navLink.textContent = "HomePage";
navLink.setAttribute("href", "../../src/index1.html")
// navLink.setAttribute("id", "inside_a")

let navLink1 = document.createElement("a");
addclasses("nav-link", navLink);
navLink1.textContent = "Projects";
navLink1.setAttribute("href", "../../src/index1.html")
// navLink1.setAttribute("id", "inside_a")

// logout Button
let navButton = document.createElement("button");
addclasses("btn btn-light", navButton);
navButton.textContent = "Logout";
navButton.setAttribute("onclick", "onDeleteClick()");
navButton.setAttribute("id", "id_button");

navMaindiv.appendChild(navInside);
navInside.appendChild(navLink1);
navInside.appendChild(navLink);
navbar.appendChild(navMaindiv);
navbar.appendChild(navButton);


document.getElementById("navbar").appendChild(navbar);


// navBrand1.setAttribute("class", "nav_inside");


// let uList = document.createElement("ul");
// addclasses("nav nav-pills flex-column flex-sm-row", uList);


// let liList = document.createElement("li");
// addclasses("nav item", liList);
// liList.setAttribute("id", "inside_li")

// let liList1 = document.createElement("li");
// addclasses("nav item", liList1);
// liList1.setAttribute("id", "inside_li")

// let liList2 = document.createElement("li");
// addclasses("nav item", liList2);
// liList2.setAttribute("id", "inside_li")









// uList.appendChild(liList);
// uList.appendChild(liList1);
// uList.appendChild(liList2);

// liList1.appendChild(navBrand)
// liList.appendChild(navBrand1);
// liList2.appendChild(navToggler);
// // end navbar

// // begin header
// let header = document.createElement("header");
// header.setAttribute("id", "inside_header");

// document.getElementById("header").appendChild(header);

// // end header


// // begin main
// let main= document.createElement("main");
// addclasses("container-fluid", main);
// main.setAttribute("id", "inside_main");



// let divMain = document.createElement("div");
// addclasses("conteiner", divMain);


// let divRow = document.createElement("div");
// addclasses("row", divRow);

// let divBox1 = document.createElement("div");
// addclasses("box1", divBox1);
// divBox1.setAttribute("id", "box1");


// main.appendChild(divMain);
// divMain.appendChild(divRow);
// divRow.appendChild(divBox1);

// document.getElementById("main").appendChild(main);