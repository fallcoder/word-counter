function countWords() {
    // get the input text value
    let inputText = document.getElementById("inputField").value;

    // check if the input text is empty
    if(inputText.trim() === "") {
        document.getElementById("show").innerHTML = 0;
        return;
    }

    // split the input text into words using whitespace as a delimiter
    let wordsAaary = inputText.trim().split(/\s+/);

    let numWords = wordsAaary.length;

    // display the result
    document.getElementById("show").innerHTML = numWords;
}

// function to reset the input field
function resetField() {
    document.getElementById("inputField").value = "";
    document.getElementById("show").innerHTML = 0;
}