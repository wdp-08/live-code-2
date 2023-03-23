
let mySelf = {
          firstName: 'Rahmaisya',
          lastName: 'Damayanti',
          middleName: 'Intan',
          hobbies: ['masak', 'bermain', 'nonton film'],
          favoriteNumber: 19,
          isWearingGlasses: true
        }
        
        console.log(`Nama saya adalah ${mySelf.firstName} ${mySelf.middleName} ${mySelf.lastName}`)
        
        mySelf.favoriteNumber = 8
        
        console.log(`Angka favorit berubah menjadi ${mySelf.favoriteNumber}`)
        
        mySelf.lulusan = 'Hacktiv8'
        mySelf['lulusan'] = 'Hacktiv8'
        
        console.log(`Saya adalah lulusan ${mySelf.lulusan}`)
        
        console.log('hobi saya adalah')
        mySelf.hobbies.forEach(hobby => {
          console.log(`- ${hobby}`)
        })