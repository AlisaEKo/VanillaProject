function onDeleteClick() {
    localStorage.removeItem("username");
    
    setTimeout(() => {redirect('../../login/src/login.html')}, 1000);

}

function redirect(link) {
    window.location.assign(link);
}

