
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordLength = 12 
const generatedPasswordOne = document.getElementById("gray-box-one")
const generatedPasswordTwo = document.getElementById("gray-box-two")


const generate = document.getElementById("password-el")


function getRandomCharacter() {
    let randomCharOne = Math.floor(Math.random() * characters.length)
    let randomCharTwo = Math.floor(Math.random() * characters.length)
    return characters[randomCharOne]
    return characters[randomCharTwo]
}

generate.addEventListener ("click" , function generateRandomPassword() {
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += getRandomCharacter()
        randomPasswordTwo += getRandomCharacter()         
    }
    
    generatedPasswordOne.textContent = randomPasswordOne
    generatedPasswordTwo.textContent = randomPasswordTwo

})





