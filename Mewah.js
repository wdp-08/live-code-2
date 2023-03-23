let Me = {
  NamaDepan: "Mewah",
  NamaBelakang: "Susyanti",
  NamaTengah: "Aprilia",
  Hobi: ["Menari", "Tidur", "Berenang"],
  NomerFavorit: 19,
  isWearingGlasses: true,
};

// Untuk Mencetak Nama Lengkap
console.log(`Nama saya adalah ${Me.NamaDepan} ${Me.NamaTengah} ${Me.NamaBelakang}`);

Me.NomerFavorit = 8;

// Untuk Mencetak Angka Favorit
console.log(`Angka favorit berubah menjadi ${Me.NomerFavorit}`);

Me.lulusan = "SMAN 3 SLawi";
Me["lulusan"] = "SMAN 3 SLawi";

// Untuk Mencetak Lulusan
console.log(`Saya adalah lulusan ${Me.lulusan}`);

// Untuk Mencetak Hobi Saya
console.log("hobi saya adalah");
Me.Hobi.forEach((hobby) => {
  console.log(`- ${hobby}`);
});

for (const key in Me) {
  console.log(`${key} : ${Me[key]}`);
}
