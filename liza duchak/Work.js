someText = "Liza";
someArray = ["Daryna", "Volodia", "Liza", "Sonia", "Nika", "Hanna"];

function search() {
    someText = document.getElementById("searchField").value;
    for (let index = 0; index < someArray.length; index++) {
        if (someArray[index] == someText) {
            console.log("found: "+someArray[index]);
        }
    }
}
 
enteredText = "liza";

function output() {
    enteredText = document.getElementById("enteredText").value;
    console.log("text: "+enteredText);
    someArray.push(enteredText);
    console.log(someArray);
    renewal()
}

function renewal() {
    let text = someArray;
    document.getElementById("mydiv").innerHTML = text;
}



