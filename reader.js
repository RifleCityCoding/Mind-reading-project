/*
Psuedo for JS

JSON list
{
  "1": "!",
  "2": "@",
  "3": "#",
  "4": "$",
  "5": "%",
  "6": "★",
  "7": "☆",
  "8": "✡",
  "9": "✦",
  "10": "✪",
  "11": "⁂",
  "12": "⁑",
  "13": "✿",
  "14": "♔",
  "15": "♕",
  "16": "♖",
  "17": "♗",
  "18": "♘",
  "19": "♙",
  "20": "♚",
  "21": "♛",
  "22": "♜",
  "23": "♝",
  "24": "♞",
  "25": "♟",
  "26": "♤",
  "27": "♠",
  "28": "♧",
  "29": "♣",
  "30": "♡",
  "31": "♥",
  "32": "♢",
  "33": "♦",
  "34": "♩",
  "35": "☧",
  "36": "☨",
  "37": "☩",
  "38": "☫",
  "39": "☬",
  "40": "☭",
  "41": "☯",
  "42": "☽",
  "43": "☾",
  "44": "✙",
  "45": "✛",
  "46": "✜",
  "47": "✝",
  "48": "♁",
  "49": "♆",
  "50": "❖",
  "51": "♅",
  "52": "☢",
  "53": "☣",
  "54": "☦",
  "55": "㋛",
  "56": "ꑇ",
  "57": "ꐦ",
  "58": "ꐠ",
  "59": "ꐡ",
  "60": "ꐕ",
  "61": "ꌇ",
  "62": "ꌈ",
  "63": "ꉕ",
  "64": "ꆛ",
  "65": "ꆜ",
  "66": "ﭢ",
  "67": "⍢",
  "68": "⍣",
  "69": "⍤",
  "70": "≄",
  "71": "≅",
  "72": "≆",
  "73": "≈",
  "74": "≉",
  "75": "〝",
  "76": "⊺",
  "77": "⊻",
  "78": "⊼",
  "79": "⊽",
  "80": "⊾",
  "81": "⊿",
  "82": "⋀",
  "83": "⋁",
  "84": "⋂",
  "85": "⋃",
  "86": "⋄",
  "87": "⋇",
  "88": "⋈",
  "89": "⋉",
  "90": "☰",
  "91": "☲",
  "92": "☱",
  "93": "☴",
  "94": "☵",
  "95": "☶",
  "96": "☳",
  "97": "☷",
  "98": "〶",
  "99": "⋪"
}
Variables:
    nextButton
    resetButton
    divText
    subText

Functions
    nextButton
        Using a switch case for this
            switch : Case 0-5 
*/
// Name our variables
const divText = document.getElementById("div-text");
const subText = document.getElementById("sub-text");
const nextBtn = document.getElementById("next-button");
const resetBtn = document.getElementById("reset-button");
// Adding another variable to that show my button when called in my switch casse
//Needed to move this down to the switch
//let showResetBtn = document.getElementById("reset-button").hidden = true;
// Creating a char code string to pull random symbols from.

// Create our array of symbols


const yourSym = ["!", "@", "#", "$", "%", "★", "☆", "✡", "✦"]


// Create a variable for the symbols to randomly generate
/* let randomSym = Math.random() * yourSym.length;
Putting this inside a function 
*/

//Need to turn this into a function that returns the symbol to user
function getRandomSymbol() {
    const randomSym = Math.floor(Math.random() * yourSym.length);
    return yourSym[randomSym];
};

resetBtn.addEventListener('click', () => {
    divText.innerHTML = "I can read your mind!";
    document.getElementById("reset-button").hidden = true;
});
// Adding an event listener for when we click the next button.

nextBtn.addEventListener('click', () => {
    // Get the current text of the div
    const currentText = divText.innerHTML;
    document.getElementById("reset-button").hidden = false;

// Need to add an event listener for reset button.

    

    // Call your current text to the page
    switch (currentText) {
        case "I can read your mind!":
            divText.innerHTML = "Pick a number from 1-99";
            
            break;
        case "Pick a number from 1-99":
            divText.innerHTML = "Add both digits together to get a new number"
            break;
        case "Add both digits together to get a new number":
            divText.innerHTML = "Subtract the new number from your original number"
            break;
        case "Subtract the new number from your original number":
            divText.innerHTML = 'Scroll down and find your number<br/>';
            //I figured it out! I need to get a symbol assigned to a variable BY itself and THEN assign it to 9
            const commonSymbol = getRandomSymbol();
            for (let i = 0; i <= 99 ; i++) {
                if (i % 9 === 0){
                    divText.innerHTML += i + '=' + commonSymbol + '<br>';
                }
                //Annnnnd I broke it because that symbol is also randomly attaching itself to other numbers.
                else {
                    divText.innerHTML += i + '=' + getRandomSymbol() + '<br>';
                }
            }
            break;
        case "Scroll down and find your number":
            divText.innerHTML = "Your symbol is " + commonSymbol + "!<br>";
            break;
    }
})