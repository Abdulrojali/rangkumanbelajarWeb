// const input=document.querySelectorAll('.content1 input');
// console.log(input)


// const button=document.getElementById('click').addEventListener('click',function(){
//     input.forEach(function(elInput){
//         let name=elInput.id
//         if(name.id=='nama'){
//              nama=name.value
//         }
//         else if(name.id=='alamat'){
//             alamat=name.value
//         }
//         else if(name.id=='nomorTelepon'){
//             nomorTelepon=name.value
//         }
//         else if(name.id=='tempatTinggal'){
//             tempatTinggal=name.value
//         }
//         else if (name.id=='email'){
//             email=name.value
//         }
//         const objt=function(nama,alamat,nomorTelepon,tempatTinggal,email){
//             objt.nama=nama;
//             objt.alamat=alamat;
//             objt.nomorTelepon=nomorTelepon;
//             objt.tempatTinggal=tempatTinggal;
//             objt.email=email;
//         }
//     })
// })


const mahasiswa=[
    {nama:'abdul',alamat:`perumahan bukit citra asri`,nomorTelepon:081319900109,usia:20},
    {nama:'ucok',alamat:`sukabumi`,nomorTelepon:081319900109,usia:31},
    {nama:'ali',alamat:`cicurug`,nomorTelepon:081319900109,usia:20},
    {nama:'ilham',alamat:`sukabumi`,nomorTelepon:081319900109,usia:40},
    {nama:'selsa',alamat:`cibadak`,nomorTelepon:081319900109,usia:50},
    {nama:'salsa',alamat:`cibadak`,nomorTelepon:081319900109,usia:32},
    {nama:'fikri',alamat:`sukabumi`,nomorTelepon:081319900109,usia:40},
    {nama:'vinka',alamat:`sukabumi`,nomorTelepon:081319900109,usia:35},
    {nama:'nabila',alamat:`cicurug`,nomorTelepon:081319900109,usia:25},
    {nama:'mega',alamat:`cicurug`,nomorTelepon:081319900109,usia:35},
    {nama:'ratu',alamat:`cicurug`,nomorTelepon:081319900109,usia:45}
]

// // cara menggunakan filter untuk mencari alamat sesuai ketentuan

// let orangCicurug=mahasiswa.filter(cicurug=>cicurug.alamat =='cicurug');
// console.log(orangCicurug)

// let orangSukabumi=mahasiswa.filter(sukabumi=>sukabumi.alamat =='sukabumi');
// console.log(orangSukabumi)

// let orangCibadak=mahasiswa.filter(cibadak=> cibadak.alamat=='cibadak');
// console.log(orangCibadak)


// // cara menggunakan filter untuk mencari usia sesuai ketentuan
// let umur20=mahasiswa.filter(age=>age.usia<30);
// console.log(umur20)

// let umur30=mahasiswa.filter(age=>age.usia<40 && age.usia>30);
// console.log(umur30)

// let umur40=mahasiswa.filter(age=> age.usia>40&& age.usia<50);
// console.log(umur40)

// let umur50=mahasiswa.filter(age=>age.usia>=50 && age.usia<60);
// console.log(umur50)

// let namaMaba=mahasiswa.map(maba=> `${maba.nama}`)
// console.log(namaMaba)

// let alamatMaba=mahasiswa.map(maba=> `${maba.alamat}`)
// console.log(alamatMaba)

// let usiaMaba=mahasiswa.map(maba=> `${maba.usia}`)
// console.log(usiaMaba)

// let nomorTeleponMaba=mahasiswa.map(maba=> `${maba.nomorTelepon}`)
// console.log(nomorTeleponMaba)

// const content2=document.querySelector('.content2');
// const button =document.getElementById('click').addEventListener('click',function(){
//     namaMaba.forEach(id => {
//         let pNew=document.createElement('p')
//         pNew.innerHTML=id
//         content2.appendChild(pNew)
//     });
// })

//  let idMahasiswa=mahasiswa.map(id=>` ${id.nama} ${id.usia} ${id.alamat}`)
//  idMahasiswa.forEach(el => {
//      console.log(el)
//  });
//  console.log(idMahasiswa)





