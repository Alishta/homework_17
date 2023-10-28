let userName = prompt('What is your name?').trim();
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase(); 
let nameHasSpace = userName.indexOf(' ');

let userSurname = prompt('What is your last name?').trim();
userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase(); 
let surnameHasSpace = userSurname.indexOf(' ');

// checking if the name consists of two names
let modifiedName;
 if (nameHasSpace !== -1 && nameHasSpace < userName.length - 1) {
    let firstName = userName.substring(0, nameHasSpace + 1);
    let secondName = userName.substring(nameHasSpace + 1);
    modifiedName = firstName + secondName.charAt(0).toUpperCase() + secondName.slice(1);
    console.log(modifiedName);
 }

// checking whether a surname consists of two surnames
let modifiedSurname;
if (surnameHasSpace !== -1 && surnameHasSpace < userSurname.length - 1) {
    let firstSurname = userSurname.substring(0, surnameHasSpace + 1);
    let secondSurname = userSurname.substring(surnameHasSpace + 1);
    modifiedSurname = firstSurname + secondSurname.charAt(0).toUpperCase() + secondSurname.slice(1);
    console.log(modifiedSurname);
}

// request and check the user's email for validity
let userEmail = prompt('Enter your email').replaceAll().toLowerCase();
userEmail = (!userEmail.includes('@')) ? `not valid email <b>${userEmail}</b> (symbol @ not exist)`: (userEmail.startsWith('@')) ? `not valid email <b>${userEmail}</b> (symbol @ find in firts place)`: (userEmail.endsWith('@')) ? `not valid email <b>${userEmail}</b> (symbol @ find in last place)`: `<b>${userEmail}</b>`;

// request the user's year of birth
dateOfBirth = +prompt('Enter your year of birth');
while(dateOfBirth < 1899 || dateOfBirth > 2020 || isNaN(dateOfBirth)) {
    dateOfBirth = +prompt('Enter your year of birth');
}
today = new Date();
thisYear = today.getFullYear();
userAge = thisYear - dateOfBirth;

console.log(userAge);

// display data in html
let userData = document.getElementById('user-data');

if (nameHasSpace !== -1 && surnameHasSpace !== -1) {
    userData.innerHTML = `<li> Full name: <b>${modifiedName} ${modifiedSurname}</b> </li> <li> Email: ${userEmail} </li> <li> Age: <b>${userAge}</b></li>`;
} else if (nameHasSpace !== -1) {
    userData.innerHTML = `<li> Full name: <b>${modifiedName} ${userSurname}</b> </li> <li> Email: ${userEmail} </li> <li> Age: <b>${userAge}</b></li>`;
} else if (surnameHasSpace !== -1) {
    userData.innerHTML = `<li> Full name: <b>${userName} ${modifiedSurname}</b> </li> <li> Email: ${userEmail} </li> <li> Age: <b>${userAge}</b></li>`;
} else {
    userData.innerHTML = `<li> Full name: <b>${userName} ${userSurname}</b> </li> <li> Email: ${userEmail} </li> <li> Age: <b>${userAge}</b></li>`;
}