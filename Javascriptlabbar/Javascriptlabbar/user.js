var user1 = {
    username: "kebabmaster",
    firstname: "Adam",
    lastname: "Svensson",
    phone: "07023347",
    city: "Helsingborg",
    age: 31,
};
var user2 = {
    username: "tacomaster",
    firstname: "Sven",
    lastname: "Adamsson",
    phone: "07047328",
    city: "Malmö",
    age: 35,
};
var user3 = {
    username: "pizzamaster",
    firstname: "Anders",
    lastname: "Andersson",
    phone: "07085267",
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
