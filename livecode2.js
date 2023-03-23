// Deklarasi Object
let myProfile = {
    frontName : "Dwik",
    lastName : "Sibuea",
    hobby : ["Sport", "Eat", "Sleep"],
    favNum : 4,
    kacamata : false
}

function changeProfile(key, newValue) {
    myProfile[key] = newValue;
    console.log(myProfile[key]);
}
// cetak nama lengkap
console.log(myProfile.frontName,myProfile.lastName);

// ubah angka favorit
changeProfile("favNum", 8);

// tambahkan hobby "coding"
let addHobby = myProfile.hobby;
addHobby[3] = "coding";
changeProfile("hobby", addHobby)

// tambahkan satu property "lulusan" dengan value "Hacktiv8"
myProfile.lulusan = "Hacktiv8";

// Cetak semua hobi satu per satu menggunakan loop.
myProfile.hobby.forEach(hobi =>{
    console.log(hobi);
})

// Cetak semua key milik objek, dan cetak semua values milik objek.
Object.keys(myProfile).forEach(key =>{
    console.log(key);
})
Object.values(myProfile).forEach(value =>{
    console.log(value);
})

// Gunakan loop untuk cetak semua property milik objek dengan format key : values.
Object.keys(myProfile).forEach(key =>{
    console.log(key + " :",myProfile[key] );
})