var user1 = {
    username: "drunkenwhisp",
    firstname: "Kevin",
    lastname: "Karlberg",
    phone: "0733280100",
    city: "Helsingborg",
    age: 32,
};
var user2 = {
    username: "superhuman",
    firstname: "Nisse",
    lastname: "Nilsson",
    phone: "911",
    city: "Malmö",
    age: 35,
};
var user3 = {
    username: "SupahFunk",
    firstname: "Funkman",
    lastname: "Mandelsson",
    phone: "04212345",
    city: "Ängelholm",
    age: 41,
};

var users = [user1, user2, user3];

function GetUser(username) {
    for (i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            //populate form with all user attributes
            document.getElementById("firstname").value = users[i].firstname;
            document.getElementById("lastname").value = users[i].lastname;
            document.getElementById("phone").value = users[i].phone;
            document.getElementById("city").value = users[i].city;
            document.getElementById("age").value = users[i].age;
            document.getElementById("result-msg").innerHTML = "";
            break;
        }
        else
            document.getElementById("result-msg").innerHTML = "user not found!";

    };
}
