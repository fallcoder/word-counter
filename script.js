function countWords() {
    // get the input text value
    let inputText = document.getElementById("inputField").value;

    // initialize the word counter
    let numWords = 0;

    // loop throuht the input Text and count spaces in it
    for(let i = 0; i < inputText.length; i++) {
        let currentCharacter = inputText[i];

        // check if the character is a space
        if(currentCharacter == " ") {
            numWords += 1;
        }
    }

    // add 1 to make the count equal to the number of words
    // (count of words = count of spaces + 1)
    numWords += 1;

    // display the result
    document.getElementById("show").innerHTML = numWords;
}