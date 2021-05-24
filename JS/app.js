
alert ('Welcome to Watches Gallery')

let UserName = prompt('What is your name ?')
document.getElementById("one").innerHTML = UserName;
console.log(UserName)

let UserCountry = prompt('What is your country ?')
document.getElementById("two").innerHTML = UserCountry;
console.log(UserCountry)

let UserAge = prompt('What is your age ?')
document.getElementById("three").innerHTML = UserAge;
console.log(UserAge)

let UserBrand = prompt('What is your favourite brand ?')
document.getElementById("four").innerHTML = UserBrand;
console.log(UserBrand)


alert (' Hello '+ UserName +' from '+ UserCountry +' with '+UserAge +' years old '+'find your ' +UserBrand+' latest models ')

