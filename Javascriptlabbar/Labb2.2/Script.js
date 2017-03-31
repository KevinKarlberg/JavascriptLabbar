var ErrorElem = document.getElementById("error-message");

var ageFieldValue = document.getElementById("age");

var hiddenTextElem = document.getElementById("text-hidden");

function Validate() {
    if (isNaN(ageFieldValue.value))
    {
        ErrorElem.innerHTML = "The age you entered is not a number!";
        ErrorElem.style.backgroundColor = "lightcoral";


        hiddenTextElem.style.display = "none";
    }
    else {


        ErrorElem.innerHTML = "";


        var form = document.getElementById("myForm");
        var inputs = form.getElementsByTagName("input");
        var inputsConsolidated = "You are ";
        for (var i = 0; i < inputs.length; i++) {
            inputsConsolidated += inputs[i].value + " ";
        }
        var oldAge = form["age"].value;
        oldAge = oldAge - 10;
        inputsConsolidated += ". 10 years ago you were " + oldAge + " years of age";


        hiddenTextElem.style.display = "block";
        hiddenTextElem.style.backgroundColor = "lightgreen";
        hiddenTextElem.style.width = "100%";
        hiddenTextElem.value = inputsConsolidated;

        form.style.display = "inline";
    }
}