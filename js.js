
let Profil = {
    namadepan : "Kevin",
    namabelakang : "Lukas",
    hobi : ["Bultang", "Maingame", "Makan"],
    nomorfavorit : 18,
    kacamata : false
}

function ubahprofil(katakunci, inputbaru) {
    Profil[katakunci] = inputbaru;
    //console.log(Profil[katakunci]);
}

console.log(profil.namadepan,profil.namabelakang);


ubahprofil("NomorFavorit", 18);


let addhobivalue = Profil.hobi;
addhobivalue[3] = "Koding";
ubahprofil("hobi", addhobivalue)


Profil.lulusan = "Hacktive8";


Profil.hobi.forEach(hobi =>{
    
})


Object.keys(Profil).forEach(key =>{
    
})
Object.values(Profil).forEach(value =>{
    
})


Object.keys(Profil).forEach(key =>{
    
})