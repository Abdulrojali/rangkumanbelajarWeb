// taggend adalah membaca template literal menggunakan function 

const nama= 'ucup';
const alamat= 'cicurug';

// coba memiliki 3 parameter  untuk parameter pertama diisi oleh string  dan parameter kedua dan seterusnya di isi ekspresion
// ${nama}/ ${alamat} ini adalah ekspresion
// function coba(str,i,z){
//     return z
//     // let isi=''
//     // .forEach(element => {
        
//     // });
// }

// ...values adalah rest parameter atau tempat penampungan parameter array untuk ekspresion 
 


// function coba(str,...values){
//     // contoh 1
//     //  let isi=''
//     //  // kita meloop str parameter dari string tamplate menggunakan foreach yang isi parameter nya ada el dan i
//     //  // el disini untuk string dan i untuk indek dari values
//     //  // contoh el[1]=halo nama saya values[1]=nama
//     //  str.forEach((el,i) => {
//     //     // apabila values tidak ada tampilkan string kosong
//     //     isi+=`${el}${values[i] || ''}`
//     //  });
//     //  return isi

//     // contoh 2 menggunakan reduce
//     return str.reduce((isi,el,i)=> `${isi}${el}${values[i]|| ''}`,'')
// }

//  // coba adalah function untuk membaca template literal 
// const hasil=coba`halo nama saya ${nama},<br/> alamat saya : ${alamat} id`
// console.log(hasil)
// document.body.innerHTML=hasil







