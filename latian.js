let biodata = {
          firstName: 'Rahmaisya',
          lastName: 'Intan',
          hobbies: ['masak', 'bermain', 'nonton film'],
          favoriteNumber: 17,
          univerity: 'Udinus',
        }
        
        console.log(`Haloo Nama lengkap ${biodata.firstName} ${biodata.lastName}`)
        
        biodata.favoriteNumber = 8
        
        console.log(`Angka favorit ${biodata.favoriteNumber}`)
        
        biodata.lulusan = 'Hacktiv8'
        biodata['lulusan'] = 'Hacktiv8'
        
        console.log(`Saya lulusan ${biodata.lulusan}`)
        
        biodata.univerity = 'Udinus'
        biodata['univerity'] = 'Udinus'
        
        console.log(`Saya dari univerity ${biodata.univerity}`)

        console.log('hobi saya')
        biodata.hobbies.forEach(hobby => {
          console.log(`- ${hobby}`)
        })
        
        for (const key in biodata) {
          console.log(`${key} : ${biodata[key]}`)
        }
        
        function writeCurrentDate () {
          const currentDate = new Date() // return 0 GMT
          console.log(currentDate)
        }
        // writeCurrentDate()
        
        function returnCurrentDate () {
          const currentDate = new Date
        
          return currentDate
        }
        
        const resultDate = returnCurrentDate()
        console.log(resultDate)
        
