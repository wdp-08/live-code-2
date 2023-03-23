let saya = {
    nama_depan: "Muhammad Ghaficky",
    nama_belakang: "Wijaya",
    hobi: ["membaca", "menulis", "bermain game"],
    angka_favorit: 7,
    memakai_kacamata: false,
    lulusan: "Hacktiv8"
  };
  
  // menampilkan setiap property objek
  console.log(saya.nama_depan); 
  console.log(saya.nama_belakang); 
  console.log(saya.hobi); 
  console.log(saya.angka_favorit); 
  console.log(saya.memakai_kacamata); 
  
  // mengubah nilai property angka_favorit
  saya.angka_favorit = 8;
  console.log(saya.angka_favorit); // output: 8
  
  // menambahkan satu hobi
  saya.hobi.push("coding");
  console.log(saya.hobi); // output: ["membaca", "menulis", "bermain game", "coding"]
  
  // menambahkan property lulusan
  saya.lulusan = "Hacktiv8";
  console.log(saya.lulusan); // output: Hacktiv8
  
  // mencetak semua hobi satu per satu menggunakan loop
  for (let i = 0; i < saya.hobi.length; i++) {
    console.log(saya.hobi[i]);
  }
  
  // mencetak semua key dan value pada objek
  for (let key in saya) {
    console.log(key + ": " + saya[key]);
  }
  
  // mencetak semua property pada objek dengan format key : values menggunakan loop
  for (let key in saya) {
    console.log(key + " : " + saya[key]);
  }
  