function countWords() {
    // get the input text value
    let inputText = document.getElementById("inputField").value;

    // initialize variables
    let numWords = 0;
    let numSentences = 0;
    let wordsArray = [];
    let longestWord = "";
    let shortestWord = "";

    // check if the input text is empty
    if(inputText.trim() === "") {
        alert("Enter some text, please")
        document.getElementById("show").innerHTML = 0;
        document.getElementById("stats").innerHTML = "";
        return;
    }

    // split the text into words using space, ignoring punctuation like commas and aposthrophes
    wordsArray = inputText.trim().split(/\s+|[,'.!?]+/).filter(Boolean);

    // filter out non alphabetic words
    wordsArray = wordsArray.filter(word => /^[a-zA-Z]+$/.test(word))

    // update the word count
    numWords = wordsArray.length;

    // count the number of valid sentences
    // we considere a sentence valid if a ponctuation mark is precede by a least one  word charactere
    numSentences = (inputText.match(/\w[.!?]/g) || []).length;

    // find the longest and shortest words
    for(let word of wordsArray) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
        if(shortestWord === "" || word.length < shortestWord.length) {
            shortestWord = word;
        }
    }

    // display the results
    document.getElementById("show").innerHTML = numWords;
    document.getElementById("stats").innerHTML = `
        <p>number of sentences: ${numSentences}</p>
        <p>longest word: ${longestWord}</p>
        <p>shortest word: ${shortestWord}</p>`;
}

// disabled button if inputField is empty
document.getElementById("inputField").addEventListener("input", function () {
    const countButton = document.getElementById("btn-count");
    if(this.value.trim() === "") {
        countButton.disabled = true;
    }
    else {
        countButton.disabled = false;
    }
})


// function to reset the input field and statistics
function resetField() {
    document.getElementById("inputField").value = "";
    document.getElementById("show").innerHTML = 0;
    document.getElementById("stats").innerHTML = "";
    document.getElementById("btn-count").disabled = true;
}

// update toggleTheme to save preference
function toggleTheme() {
    // get body item
    let bodyItem = document.body;

    if(bodyItem.classList.contains("dark-theme")) {
        bodyItem.classList.remove("dark-theme");
        bodyItem.classList.add("light-theme");
        saveThemePreference("light-theme")
    }
    else {
        bodyItem.classList.remove("light-theme");
        bodyItem.classList.add("dark-theme");
        saveThemePreference("dark-theme")
    }
}

// function to save theme preference in localStorage
function saveThemePreference(theme) {
    localStorage.setItem("theme", theme)
} 

// function to restore the choosen theme
function loadThemePreference() {
    let saveTheme = localStorage.getItem("theme")
    if(saveTheme) {
        document.body.classList.add(saveTheme)
    }
    else {
        document.body.classList.add("light-theme") // default theme
    }
}

// load theme on page load
window.onload = loadThemePreference;