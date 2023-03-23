const object = {
    nama_depan: 'Rifqiyah',
    nama_belakang: 'Ramadani',
    hobi: ["membaca", "menulis"],
    angka_favorit: 9,
    memakai_kacamata: true,
};

console.log(object); //menampilkan property

console.log("Nama Lengkap : " +object.nama_depan + object.nama_belakang);//cetak nama lengkap

//ubah angka favorit
object.angka_favorit = 8
console.log(object);

//tambah hobi coding
object.hobi.push("coding"); 
console.log(object.hobi);

// Cetak semua hobi satu per satu menggunakan loop.
object.hobi.forEach(hobi =>{
    console.log(hobi);
})

//tambah properti lulusan dengan value Hacktiv8
object.lulusan = "Hacktiv8"
console.log(object);


for (const [key, value] of Object.entries(object)) {
   console.log(`${key}: ${value}`);
}
