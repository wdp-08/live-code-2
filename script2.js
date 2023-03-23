const biodata = {
    nama_depan: "Fitria",
    nama_belakang: "Nurul",
    hobi: ["berenang", "Tidur", "membaca buku"],
    angka_favorit: 7,
    memakai_kacamata: true,
    // lulusan: "hacktiv8"
};


// menampilkan setiap perubahan pada setiap property menggunakan console.log
console.log(biodata);

//menampilkan nama lengkap
console.log(biodata.nama_depan + " " + biodata.nama_belakang);

// push data hobi coding
biodata.hobi.push("coding");
console.log(biodata);

// - Ubah angka_favorit jadi 8.
biodata.angka_favorit = '8'
// - Tambahkan satu property "lulusan" dengan value "Hacktiv8".
biodata.lulusan = "Hacktiv8";

// Cetak semua hobi satu per satu menggunakan loop.
for (let i = 0; i < biodata.hobi.length; i++) {
    console.log(biodata.hobi[i]);
}

// - Cetak semua key milik objek, dan cetak semua values milik objek.


// - Gunakan loop untuk cetak semua property milik objek dengan format key : values.
for (let key in biodata) {
    console.log(`${key} : ${biodata[key]}`);
}

