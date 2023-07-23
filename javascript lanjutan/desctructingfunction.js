// desctructing function

// function jumlahPerkalian(a,b){
//     return [a+b,a*b]
// }
// console.log(jumlahPerkalian(10,5))

// //contoh 1
// // const tambah =jumlahPerkalian(10,5)[0];
// // const kali=jumlahPerkalian(10,5)[1];
// // console.log(tambah)
// // console.log(kali)


// //contoh 2
// const [tambah,kali]=jumlahPerkalian(10,5)
// console.log(tambah)
// console.log(kali)



// function kalkulator(a,b){
//     return [a+b,a-b,a/b,a*b]
// }
// const[tambah,kurang,bagi,kali]=kalkulator(20,5)
// console.log(tambah)
// console.log(kurang)
// console.log(bagi)
// console.log(kali)



// menggunakan desctructing function pada object
// function kalkulator(a,b){
// return {
//     tambah:a+b,
//     kurang:a-b,
//     kali:a*b,
//     bagi:a/b
// }
// }

// const{kali,bagi,tambah,kurang}=kalkulator(10,2)
// console.log(kali)
// console.log(bagi)
// console.log(tambah)
// console.log(kurang)


// menggunakan function arguments tanpa desctruting
// const mhs={
//     nama:'ucup',
//     umur:'19 tahun',
//     email:'ucup11@gmail.com'
// }
// function cetakmhs(nama,umur){
//     return `halo nama saya ${nama}, saya berusia ${umur}`
// }
// console.log(cetakmhs(mhs.nama,mhs.umur))


// menggunakan desctrution function
// const mhs={
//     nama:'ucup',
//     umur:'19 tahun',
//     email:'ucup11@gmail.com'
// }
// function cetakmhs({nama,umur}){
//     return `haloo nama saya ${nama}, saya berusia ${umur}`
// }
// console.log(cetakmhs(mhs))


// menggunakan desctruction function berasarang
const mhs={
    nama:'ucup',
    umur:'19 tahun',
    email:'ucup11@gmail.com',
    nilai:{
        uts:80,
        uas:90,
        pts:100
    }
}
// nilai adalah desctrution function berasarang di dalam object mahasiswa
function cetakmhs({nama,umur,nilai:{uts,uas,pts}}){
    return `haloo nama saya ${nama}, saya berusia ${umur} hasil nilai uts saya ${uts}, hasil nilai uas saya :${uas},
    hasil nilai pts saya:${pts}`
}
console.log(cetakmhs(mhs))