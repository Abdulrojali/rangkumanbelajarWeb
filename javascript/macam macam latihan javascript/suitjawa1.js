// menampilkan pilihan user
const panggil= prompt('masukkan pilihan anda');

// menampilkan pilihan computer
let pilihanComp= Math.random()

if(pilihanComp<0.34){
   pilihanComp='gajah'
}
else if(pilihanComp>=0.34 && pilihanComp<0.67){
    pilihanComp='semut';
}
else {
    pilihanComp='orang';
}
console.log('pilihan user :'+panggil+'\n'+'pilihan Computer :'+pilihanComp)


// cara pertama

// if(panggil===pilihanComp){
//     console.log('seri')
// }
// else if (panggil=='semut'){
//     if (pilihanComp=='gajah'){
//         console.log('anda kalah')
//     }
//     else {
//         console.log('anda kalah')
//     }
 
// }
// else if (panggil=='gajah'){
//     if (pilihanComp=='semut'){
//         console.log('anda menang')
//     }
//     else {
//         console.log('anda menang')
//     }
// }
// else if(panggil=='orang'){
//     if(pilihanComp=='semut'){
//         console.log('anda menang')
//     }
//     else{
//         console.log('anda kalah')
//     }
// }
// else{
//     console.log('yang anda masukkan bukan pilihan yang tepat');
// }


// cara kedua menggunakan operator ternary
let ulang=true;
while(ulang){
hasil='';
if (panggil==pilihanComp){
    hasil='seri';
}
else if(panggil=='gajah'){
    hasil=(pilihanComp=='orang') ? 'anda menang' : 'anda kalah';
}
else if(panggil=='semut'){
    hasil=(pilihanComp=='gajah') ? 'anda menang' : 'anda kalah';
}
else if(panggil== 'orang'){
    hasil =(pilihanComp=='semut') ? 'anda menang' : 'anda kalah';
}
else{
    hasil='yang anda masukkan tidak sesuai opsi !';
}
console.log('pilihan user :'+panggil+'\t'+'pilihan computer :'+pilihanComp+'\t'+'hasil :'+hasil);
 ulang=confirm('ulangi lagi ?') 
}
alert('selamat bermain')