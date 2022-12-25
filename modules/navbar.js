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
addclasses("container-fluid navbar-expand-lg d-flex align-items-center text-center bg-primary", navbar);
navbar.setAttribute("id", "center");

let navMaindiv = document.createElement("div");
addclasses("conteiner", navMaindiv);

let uList = document.createElement("ul");
addclasses("nav nav-pills flex-column flex-sm-row", uList);


let liList = document.createElement("li");
addclasses("nav item", liList);
liList.setAttribute("id", "inside_li")

let liList1 = document.createElement("li");
addclasses("nav item", liList1);
liList1.setAttribute("id", "inside_li")

let liList2 = document.createElement("li");
addclasses("nav item", liList2);
liList2.setAttribute("id", "inside_li")



let navBrand = document.createElement("a");
addclasses("nav-link", navBrand);


navBrand.textContent = "HomePage";
navBrand.setAttribute("href", "../../src/index1.html")
navBrand.setAttribute("id", "inside_a")

let navBrand1 = document.createElement("a");
addclasses("nav-link", navBrand1);
navBrand1.textContent = "Projects";
navBrand1.setAttribute("href", "../../src/index1.html")
navBrand1.setAttribute("id", "inside_a")


let navToggler = document.createElement("button");
addclasses("btn btn-light", navToggler);
navToggler.textContent = "Logout";
navToggler.setAttribute("onclick", "onDeleteClick()");
navToggler.setAttribute("id", "id_button");



navMaindiv.appendChild(uList);
uList.appendChild(liList);
uList.appendChild(liList1);
uList.appendChild(liList2);
liList1.appendChild(navBrand)
liList.appendChild(navBrand1);
liList2.appendChild(navToggler);
navbar.appendChild(navMaindiv);


document.getElementById("navbar").appendChild(navbar);
// end navbar

// begin header
let header = document.createElement("header");
header.setAttribute("id", "inside_header");

document.getElementById("header").appendChild(header);

// end header


// begin main
let main= document.createElement("main");
addclasses("container-fluid", main);
main.setAttribute("id", "inside_main");



let divMain = document.createElement("div");
addclasses("conteiner", divMain);


let divRow = document.createElement("div");
addclasses("row", divRow);

let divBox1 = document.createElement("div");
addclasses("box1", divBox1);
divBox1.setAttribute("id", "box1");


main.appendChild(divMain);
divMain.appendChild(divRow);
divRow.appendChild(divBox1);

document.getElementById("main").appendChild(main);
