let password1El = document.getElementById("first-choice");
let password2El = document.getElementById("second-choice");
let passwordLength = 15;
const characters = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"
];

function generatePassword(){
    let res = "";
    for (let i=0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        res += characters[randomIndex];
    }
    return res;
}

function renderPassword(){
    password1El.textContent = generatePassword();
    password2El.textContent = generatePassword();
}

function copyOnClick(id){
    const text = document.getElementById(id).textContent;
    if(text.length>0){
    navigator.clipboard.writeText(text).then(()=>{
        alert("Copied to Clipboard!");
    })
    } else {
        alert('Please hit "Generate password" button first')
    }
}


