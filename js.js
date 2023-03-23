
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

//console.log(Profil.namadepan,Profil.namabelakang);


ubahprofil("NomorFavorit", 18);


let addhobivalue = Profil.hobi;
addhobivalue[3] = "Koding";
ubahprofil("hobi", addhobivalue)


Profil.lulusan = "Hacktive8";


Profil.hobi.forEach(hobi =>{
    //console.log(hobi);
})


Object.keys(Profil).forEach(key =>{
    //console.log(key);
})
Object.values(Profil).forEach(value =>{
    //console.log(value);
})


Object.keys(Profil).forEach(key =>{
    //console.log(key + ":", Profil[key]);
})