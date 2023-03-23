let userMe = {
    nama_depan: "Triyono",
    nama_belakang: "Rifan",
    hobi: ['Badminton', 'Belajar ngoding'],
    angka_favorit: 11,
    memakai_kacamata: false,
    status: "Mahasiswa UPN"
}
console.log(userMe);

const namaLengkap = `${userMe.nama_depan} ${userMe.nama_belakang}`
console.log('Nama Lengkap', namaLengkap)

userMe.angka_favorit = 8
console.log(userMe);

// tambah satu hobi
function add_hobi(data, array){
    return array.push(data)
}
add_hobi('coding', userMe.hobi)
console.log(userMe);

userMe.lulusan = "Hacktiv8"
console.log(userMe);

function showHobi(data){
    data.forEach(element => {
        console.log(element)
    });
}
showHobi(userMe.hobi)

function showAllProperty(propertis){
    for(const property in propertis){
        console.log(`${property} : ${propertis[property]}`)
    }
}

console.log('\nshowall Propoerty');
showAllProperty(userMe)
