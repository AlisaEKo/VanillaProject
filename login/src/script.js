let dataBase;
let dataBase2;

let json = fetch('../../assets/static/users.json')
    .then(response => response.json())
    .then(data => { dataBase = data; });

    json = fetch('../../assets/static/users.json')
    .then(response => response.json())
    .then(data => { dataBase2 = data; });

   
    // console.log(json);

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
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        // setTimeout(() => {}, 2000);
        // console.log(Data_base4.test_user[0].username);
        let correctUsernameAndPassword = false;
        for(let key in  dataBase.Users)
        {
            if (username == dataBase.Users[key].username && password == dataBase.Users[key].password) {
                correctUsernameAndPassword = true;
                localStorage.setItem("isLogin", true);
                localStorage.setItem("username", dataBase.Users[key].username);
            } else {
                localStorage.setItem("isLogin", false);

            }
        }
        if (correctUsernameAndPassword){
            // alert("Yey");
            idH1.innerHTML = "Welcome " + localStorage.username + "\nYou Will Be Transferd to HomePage in a Momemnt"  ;
            setTimeout(() => {redirect('../../website/src/index.html')}, 1000);
        }else{
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

    // async function get_data() {
    //     const response = await fetch("../assets/static/users.json");
    //     const data = await response.json();
    //     console.log(data.users_page);
    //     let user_login ;
    //     let user_password ;
    //     for (let key in data.users_page){
    //         user_login = data.users_page[key].username55;
    //         user_password = data.users_page[key].password55;
        
    //     const user_val = document.getElementById("user").value;
    //     const password_val = document.getElementById("pass").value;
    //     // console.log(user_login);
    //     if (user_val == user_login && password_val == user_password){
    //         alert(`${user_login}`);
    //     }else{
    //         alert("try again");
    //     }
    // }
    // }
    