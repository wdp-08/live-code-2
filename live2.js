// membuat object
let delin = {
  nama_depan: "delin",
  nama_belakang: "pasha",
  hobi: ["traveling", "makan", "dengar musik"],
  angka_favorit: 20,
  memakai_kacamata: false,
};
// menampilkan isi object dgn console.log
console.log(delin.nama_depan);
console.log(delin.nama_belakang);
console.log(delin.hobi);
console.log(delin.angka_favorit);
console.log(delin.memakai_kacamata);

// mengubah nilai angka favorit
delin["angka_favorit"] = 8;
console.log(delin.angka_favorit);

//menambahkan nilai hobi
delin.hobi = "coding";
console.log(delin.hobi);

console.log(delin);
