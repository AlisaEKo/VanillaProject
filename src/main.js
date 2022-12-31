// main script for the web app


function redirect(link) {
    window.location.assign(link);
}

function checkUsher() {
    if(localStorage.username){
        redirect('../website/src/index.html');
    }else{
        redirect('../login/src/login.html');
    }
}

// function onDeleteClick() {
//     localStorage.removeItem("username");
//     // idH1.innerHTML = "";
//     id_h2.innerHTML = "Goodbye";
// }