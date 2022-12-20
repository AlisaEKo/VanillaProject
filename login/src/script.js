let dataBase;
let dataBase2;

let json = fetch('../../assets/static/users.json')
    .then(response => response.json())
    .then(data => { dataBase = data; });

let json2 = fetch('../../assets/static/admins.json')
    .then(response => response.json())
    .then(data => { dataBase2 = data; });

   
    console.log(json);

    // function printUsers() {
    //     let arrName = [];
    //     for(let key in dataBase.Users){
    //     // console.log(Data_base.users[key].name);
    //     arrName.push("Username:" + dataBase.Users[key].username + " " + "Password:" + dataBase.Users[key].password);
    //     } 
    //     console.log(arrName);
    //     return arrName;
    // }  

    

    function redirect(link) {
        window.location.assign(link);
    }

    function login() {
        let usernameAdmin = document.getElementById("username").value;
        let passAdmin = document.getElementById("password").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let correctUsernameAndPassword = false;
        let correctUsernameAdminAndPassAdmin = false;
    
        if (usernameAdmin == dataBase2.adminUser.username && passAdmin == dataBase2.adminUser.password){
            correctUsernameAdminAndPassAdmin = true;
            localStorage.setItem("isLogin", true);
            localStorage.setItem("username", dataBase2.adminUser.username);
        } else {
            localStorage.setItem("isLogin", false);

        }

        for(let key in  dataBase.Users) {   
            if (username == dataBase.Users[key].username && password == dataBase.Users[key].password) {
                correctUsernameAndPassword = true;
                localStorage.setItem("isLogin", true);
                localStorage.setItem("username", dataBase.Users[key].username);
            } else {
                localStorage.setItem("isLogin", false);

            }
        }
    
        if (correctUsernameAdminAndPassAdmin){
            // alert("Yey");
            idH1.innerHTML = "Hello " + localStorage.username + "\nYou Will Be Transferd to Projects in a Momemnt"  ;
            setTimeout(() => {redirect('../../website/src/index1.html')}, 2000);
        }else if(correctUsernameAndPassword){
            // alert("Yey");
            idH1.innerHTML = "Welcome " + localStorage.username + "\nYou Will Be Transferd to HomePage in a Momemnt"  ;
            setTimeout(() => {redirect('../../website/src/index.html')}, 2000);}
        else{
            alert("Wrong username or password");

        }
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }



    function onDeleteClick() {
        localStorage.removeItem("username");
        idH1.innerHTML = "";
        id_h2.innerHTML = "Goodbye";
    }