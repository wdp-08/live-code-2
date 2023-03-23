// Deklarasi Object
let Profile = {
    Name_awal : "mohamad adi",
    Name_akhir : "putra firdaus",
    hobby : "sport",
    favNum : 8,
    kacamata : false
}

function changeProfile(red, newValue) {
    Profile[red] = newValue;
    console.log(Profile[red]);
}

console.log(Profile.Name_awal,Profile.Name_akhir);

changeProfile("favNum", 8);

let addHobby = Profile.hobby;
addHobby = "Sport";
changeProfile("hobby", addHobby)

myProfile.lulusan = "Hacktiv8";

Profile.hobby.forEach(hobi =>{
    console.log(hobi);
})

Object.reds(Profile).forEach(red =>{
    console.log(red);
})