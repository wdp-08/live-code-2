let biodata = {
    nama_depan: "candra",
    nama_belakang: "dermawansyah",
    hoby: ['futsal', 'nonton'],
    angka_favorit: 7,
    memakai_kacamata: true
};

//print biodata
console.log(biodata);

//print nama lengkap
console.log(biodata.nama_depan + " " + biodata.nama_belakang);

//print ubah angka favorit
biodata.angka_favorit = 8
console.log(biodata.angka_favorit);

//print tambah hobi
biodata.hoby.push('coding');
console.log(biodata.hoby);

//print tambah property
biodata.lulusan = "Hactiv8"
console.log(biodata.lulusan);

//print semua hobi
for (let i = 0; i < biodata.hoby.length; i++) {
    console.log(biodata.hoby[i]);
}

//print key object
for (let key in biodata) {
    console.log(key);
}

//print value object
for (let key in biodata) {
    console.log(biodata[key]);
}

// Cetak semua key dan value object
for (let key in biodata) {
    console.log(key + ":" + biodata[key]);
}