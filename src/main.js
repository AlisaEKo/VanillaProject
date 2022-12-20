// main script for the web app


function redirect(link) {
    window.location.assign(link);
}

function checkUsher() {
    if(localStorage.username){
        redirect('../../website/src/index.html');
    }else{
        redirect('../../login/src/login.html');
    }
}
