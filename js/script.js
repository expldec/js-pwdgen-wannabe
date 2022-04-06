const userName = prompt("What's your name?")
const userSurname = prompt("What's your surname?")
const userFavColor = prompt("What's your favorite color?")

document.getElementById('message').innerHTML = `Your Super Secure Password is: <span class="code">${userName}${userSurname}${userFavColor}21</span>`