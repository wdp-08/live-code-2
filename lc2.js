let silvia = {
    nama_depan: "Silvia Nanda",
    nama_belakang: "Syafa Iswahyudi",
    hobi: ["merajut", "membaca"],
    angka_favorit: 4,
    memakai_kacamata: false,
};
//Menampilkan tiap properti
console.log(silvia.nama_depan);
console.log(silvia.nama_belakang);
console.log(silvia.hobi);
console.log(silvia.angka_favorit);
console.log(silvia.memakai_kacamata);

//Menampilkan nama lengkap
console.log(silvia.nama_depan + " " + silvia.nama_belakang);
//Mengubah angka favorit
console.log(angka_favorit = 8);
//Menambahkan 1 hobi
silvia.hobi.push("Coding");
console.log(silvia.hobi);
//Menambahkan properti
silvia.lulusan = "Hacktiv8"
console.log(silvia.lulusan);
//Cetak array
silvia.hobi.forEach((_element) => {
    console.log(_element);

    Object.entries(_element).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
});
