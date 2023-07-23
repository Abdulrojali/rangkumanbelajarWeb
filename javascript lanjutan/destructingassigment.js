// destruction assigment
// adalah sebuah variabel baru untuk memetakan nilai pada array atau object 
// contoh 


// 1. destruction array
// const arr=[2,3,5]
// const [a,b,c]=arr
// console.log(a)
// console.log(b)
// console.log(c)





// // 2. destruction object
// const biodata={
//     nama:'abdul rojali',
//     kelas:'22SIC',
//     Nim:20220050050
// }

// const{nama,kelas,nim}=biodata
// console.log(nama)
// console.log(kelas)
// console.log(nim)


// // 3. skipping items 
// // apabila ingin tidak mengambil semua nilai di komakan saja 
// const huruf=['a','b','c','d']
// const[ab, , ,cd]=huruf


// // 4. swap items
// let a=10
// let b =2
// //sebelum di swap
// console.log(a)
// console.log(b)
// // setelah di swap
// const swap=[a,b] = [b,a]
// console.log(a)
// console.log(b)


// 5. swap items menggunakan function 
// let swip=(arr,index0,index1)=>{
//     let temp=arr[index0]
//     arr[index0]=arr[index1]
//     arr[index1]=temp
// }
// let arr=[22,3,4,6,8]
// swip(arr,2,3)
// console.log(arr)




// // 6. mengambil nilai pada function menggunakan destruction assigment
// function coba(){
//     return[10,20]
// }
// let [a,b]=coba()
// console.log(a)
// console.log(b)

// let ubah=[a,b]=[b,a]
// console.log(a)
// console.log(b)


// 7. rest parameter
// const [a,...values]=[1,2,3,4,5,6,7]
// console.log(a)
// console.log(values)


// 8. destruction object
// const mhs={
//     nama:`abdul`,
//     alamat:`perumahan bukit citra asri`
// }
// const {nama,alamat}=mhs
// console.log(nama)
// console.log(alamat)

// 9. assigment tanpa object
// (mhs={nama:`abdul`,alamat:`perumahan bukit citra asri`})
// const {nama,alamat}=mhs
// console.log(nama)
// console.log(alamat)


// 10. assigment variabel baru
//  const mhs={
//      nama:`abdul`,
//      alamat:`perumahan bukit citra asri`
//  }
//  const {nama:u,alamat:l}=mhs
//  console.log(u)
//  console.log(l)


// 11. memberi default value
//  const mhs={
//      nama:`abdul`,
//      alamat:`perumahan bukit citra asri`
//  }
//  const {nama,alamat,email='abdulrojali@gmail.com'}=mhs
//  console.log(nama)
//  console.log(alamat)
//  console.log(email)


// 12. rest parameter pada object
//   const mhs={
//       nama:`abdul`,
//       alamat:`perumahan bukit citra asri`
//   }
//   const {nama,...values}=mhs
//   console.log(nama)
//   console.log(values)

// 13. mengambil filed pada object yang di kirim kedalam function 
//    const mhs={
//        nama:`abdul`,
//        alamat:`perumahan bukit citra asri`
//    }
// function getMhs({nama}){
//     return nama;
// }
// console.log(getMhs(mhs))



