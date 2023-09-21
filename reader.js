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
//Our JSON variable containing 1-99
const randomSym = {
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

//Lets start creating a function to try and make things work. Lets change the text to pick number when button is pressed.

  /*  nextBtn.addEventListener('click', () => {
        // Inside this callback function, you can change the text of the div
        console.log("Button pressed!");
        divText.innerHTML = "Pick a number from 1-99";
    });
    
*/
    //Okay so now we comment out the above statement and try to make it a switch statement!

    nextBtn.addEventListener('click', () => {
        // Get the current text of the div
        const currentText = divText.innerHTML;
    
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
    case "Subtract the new number from your original number":
        divText.innerHTML = "1 = !<br>2 = @<br> 3 = #<br> 4 = $<br> 5 = %<br> 6 = ★<br> 7 = ☆<br> 8 = ✡<br> 9 = ✦<br> 10 = ✪<br> 11 = ⁂<br> 12 = ⁑<br> 13 = ✿<br> 14 = ♔<br> 15 = ♕<br> 16 = ♖<br> 17 = ♗<br> 18 = ♘<br> 19 = ♙<br> 20 = ♚<br> 21 = ♛<br> 22 = ♜<br> 23 = ♝<br> 24 = ♞<br> 25 = ♟<br> 26 = ♤<br> 27 = ♠<br>  28 = ♧<br> 29 = ♣<br> 30 = ♡<br> 31 = ♥<br> 32 = ♢<br> 33 = ♦<br> 34 = ♩<br> 35 = ☧<br> 36 = ☨<br> 37 = ☩<br> 38 = ☫<br> 39 = ☬<br> 40 = ☭<br> 41 = ☯<br> 42 = ☽<br> 43 = ☾<br> 44 = ✙<br> 45 = ✛<br> 46 = ✜<br> 47 = ✝<br> 48 = ♁<br> 49 = ♆<br> 50 = ❖<br> 51 = ♅<br> 52 = ☢<br> 53 = ☣<br> 54 = ☦<br> 55 = ㋛<br> 56 = ꑇ<br> 57 = ꐦ<br> 58 = ꐠ<br> 59 = ꐡ<br> 60 = ꐕ<br> 61 = ꌇ<br> 62 = ꌈ<br>  63 = ꉕ<br> 64 = ꆛ<br> 65 = ꆜ<br> 66 = ﭢ<br> 67 = ⍢<br> 68 = ⍣<br> 69 = ⍤<br> 70 = ≄<br> 71 = ≅<br>  72 = ≆<br> 73 = ≈<br>  74 = ≉<br>  75 = %<br> 76 = ⊺<br> 77 = ⊻<br> 78 = ⊼<br> 79 = ⊽<br> 80 = ⊾<br> 81 = ⊿<br> 82 = ⋀<br>  83 = ⋁<br> 84 = ⋂<br> 85 = ⋃<br> 86 = ⋄<br> 87 = ⋇<br> 88 = ⋈<br> 89 = ⋉<br> 90 = ☰<br> 91 = ☲<br> 92 = ☱<br> 93 = ☴<br> 94 = ☵<br> 95 = ☶<br> 96 = ☳<br> 97 = ☷<br> 98 = 〶<br> 99 = ⋪<br>"
}
    })