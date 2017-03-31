function LoopArrayContents() {

    var error_msg_elem = document.getElementById("error-messages");

    var main_content = document.getElementById("main-content");


    var strings = ["Kevin", "Anders", "48", "Jonas", 55, 256, "Pelle", "Karsten", "Fernando"];

    for (var i = 0; i < strings.length; i++) {

        if (!isNaN(strings[i])) {
            error_msg_elem.style.color = "Yellow";
            error_msg_elem.innerHTML = "Siffor hittades i Arrayn. Dessa har ej skrivits ut <br>";
        }
        else {
            main_content.innerHTML += strings[i] + "</br>";
        }
    }
}