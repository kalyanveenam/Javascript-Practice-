const loginValidate = function (userName, password, listUsers) {
    var isValidUser = false;
    var isValidPassword = false;
    for (var x in listUsers) {
        if (listUsers[x]["name"] == userName) {
            isValidUser = true;
        }
        if (listUsers[x][password] == password) {
            isValidPassword = true;
            break;
        }
    }
    if (isValidUser && isValidPassword) {
        alert("Logged in successfully");
    } else if (isValidUser == false && isValidPassword == false) {
        alert("User is not valid");
    } else if (isValidPassword == false && isValidUser == true) {
        alert("Invalid password");
    }
};

var userName = window.prompt("Enter username");
var password = window.prompt("Enter password");
loginValidate(userName, password, usersList);
