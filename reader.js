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
const divText = document.getElementById("div-text")
const subText = document.getElementById("sub-text")
const nextBtn = document.getElementById("next-button")
const resetBtn = document.getElementById("reset-button")
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

//Lets start creating a function to try and make things work. Lets SWITCH text inside my container when Start is pressed.

switch nextPage() {
    case 0:
        document.getElementById("div-text").innerHTML = "Pick a number from 1-99"; 

     } 
