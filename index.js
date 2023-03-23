//Buatlah sebuah objek yang mendeskripsikan diri kalian masing-masing.
let kevin = {
    nama_depan: "Kevin",
    nama_belakang: "Kevin",
    umur: 20,
    hobi: ["Membaca", "Menulis", "Mendengarkan Musik"],
    angka_favorit: 1,
    memakai_kacamata: false,
}   
//Tampilkan setiap propertynya menggunakan console.log setelah setiap perubahan.
console.log(kevin.nama_depan)
kevin.angka_favorit = 8;
kevin.hobi[kevin.hobi.length] = "Coding";
//Tambahkan satu property "lulusan" dengan value "Hacktiv8".
kevin.lulusan = "Hacktiv8";
//Cetak semua hobi satu per satu menggunakan loop.
for (let i = 0; i < kevin.hobi.length; i++) {
    console.log(kevin.hobi[i]);
}
//Cetak semua key milik objek, dan cetak semua values milik objek.
console.log(Object.keys(kevin));
console.log(Object.values(kevin));
//Gunakan loop untuk cetak semua property milik objek dengan format key : values.
for (let i = 0; i < Object.keys(kevin).length; i++) {
    console.log(Object.keys(kevin)[i] + " : " + Object.values(kevin)[i]);
}