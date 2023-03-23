const person = {
    nama_depan: "Dodi",
    nama_belakang: "Setyawan",
    hobi: "Healing",
    angka_favorit: 7,
    memakai_kacamata: {
        true: "pakai",
        false: "tidak",
    }
}
console.log(person);

// menampilkan nama lengkap
console.log(person.nama_depan + ' ' + person.nama_belakang);

// mengubah angka favorit
person["angka_favorit"] = 8
console.log(person);

// tambahkan satu hobi
person.hobi += ", Coding";
console.log(person);

//tambahkan property
person.lulusan = "Hacktiv8";
console.log(person);

// cetak semua hobi
console.log(person.hobi);

// cetak semua key
for (const [key] of Object.entries(person)) {
    console.log(`${key}`);
}

// cetak semua dengan format key : values
for (const [key, value] of Object.entries(person)){
    console.log(`${key} : ${value}`)
}