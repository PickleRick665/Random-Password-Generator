const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passwordLength = 8

// generates random number from 0-90 (if symbols are included) and 0-61 (if symbols are excluded)
function randomNumberGenerator(){

    let charactersLength = characters.length
    let randomNumber 
    let minCharactersLength = 0
    let add26IfCapitalLetterFalse = 0

    //decrease characterLength by 29 if "includeStatusSymbol" is false
    if(includeSymbolsStatus() === false){ charactersLength -= 29}

    //decrease characterLength by 26 if "includeCapitalLetter" is false 
    //also add 26 to make the number range from 0-90 to 26-90 
    if(includeCapitalLettersStatus() === false){ 
        charactersLength -= 26 
        add26IfCapitalLetterFalse = 26    
    }


    randomNumber = Math.floor(Math.random()*charactersLength)+add26IfCapitalLetterFalse
    
    return randomNumber
}

// generates and returns X amount of  random characters
function randomPasswordGenerator(){

    //calls a function that stores the user's desired Password length to the variable "passwordLength"
    storePasswordLengthInput()

    let password = " "

    for (let i = 0; i < passwordLength; i++){
        password += characters[randomNumberGenerator()]
    }

    return password
}

let passwordEl = document.getElementById("generate-password-button")
let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")

// Display the 2 generated passwords
passwordEl.addEventListener("click", function(){
    firstPassword.textContent = randomPasswordGenerator()
    secondPassword.textContent = randomPasswordGenerator()
})

// Store desired password length from user
function storePasswordLengthInput(){
    passwordLength = document.getElementById("password-length").value
}

//checks if the symbo'ls checkbox is checked
function includeSymbolsStatus() {
    let isChecked = document.getElementById("with-symbols")

    if(isChecked.checked === false){
        return false
    }

    else return true
}

//checks if the capital letters checkbox is checked
function includeCapitalLettersStatus(){
    let isChecked = document.getElementById("with-capital-letters")

    if(isChecked.checked === false){
        return false
    }

    else return true
}


firstPassword.addEventListener("click", function(){
    navigator.clipboard.writeText(firstPassword.textContent)
    alert("copied to clipboard")
})

secondPassword.addEventListener("click", function(){
    navigator.clipboard.writeText(secondPassword.textContent)
    alert("copied to clipboard")
})