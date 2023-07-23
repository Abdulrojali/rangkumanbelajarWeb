// // 1. html Fragments
// // let mahasiswa={
// //     nama:'abdul',
// //     alamat:'cicurug',
// //     umur:19
// // }

// // const el=`<div class='mhs'>
// // <h3> ${mahasiswa.nama}</h3>
// // <span> ${mahasiswa.umur}</span>
// // </div>`

// // document.body.innerHTML=el


// // 2. looping html fragments

// // let mahasiswa=[
// //     {
// //         nama:'abdul',
// //         usia:19
// //     },
// //     {
// //         nama:'selsa',
// //         usia:20
// //     },
// //     {
// //         nama:'ucup',
// //         usia:20
// //     }
// // ]

// // let li=`<div class='mhs'>
// // ${mahasiswa.map(m=>`<ul>
// // <li>${m.nama}</li>
// // <li>${m.usia}</li>
// // </ul>`).join('')}
// // </div>`

// // document.body.innerHTML=li


// // 3 coditional
// // let lagu={
// //     penyanyi:'isyana',
// //     judul:'tetap dalam jiwa',
// //     // feat:'alibaba'
// // }

// // let liNew=`<div class'lagu'>
// // <ul>
// // <li> penyanyi : ${lagu.penyanyi}</li>
// // <li> judul : ${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})`: ''}</li>
// // </ul>
// // </div>`

// // document.body.innerHTML=liNew





// // 4 nested 
// const mahasiswa={
//     nama:'abdul',
//     nim:20220050050,
//     kelas:22,
//     MataKuliah:[
//         'pengantar bisnis',
//         'konsep sistem informasi',
//         'dasar pemrograman',
//         'aljabar linear'
//     ]
// }

// function printMatakuliah(MataKuliah){
// return`
// <ul>
//     ${MataKuliah.map(mt=> `<li> ${mt}</li>`).join('')}
// </ul>`;
// }
// const div=`<div class='mahasiswa'>
// <h2> nama mahasiswa :${mahasiswa.nama}</h2>
// <h2> nim mahasiswa :${mahasiswa.nim}</h2>
// <h2> kelas :${mahasiswa.kelas}</h2>
// <h2> mata kuliah <h2>
// ${printMatakuliah(mahasiswa.MataKuliah)}
// </div>`

// document.body.innerHTML=div