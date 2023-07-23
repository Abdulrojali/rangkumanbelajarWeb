/*let angka =[1,2,3,4,5,6];

angka.forEach(nilai=>{
    console.log(nilai);
});

let hasil = angka;
hasil =[7,8,9,10];
hasil.forEach(jawab=>{
    console.log(jawab);
});*/

const angka =[1,2,3,4,5,6];
const hasil = [7,8,9,10];

let huruf =['a','b','c','d'];
let spasi = '<ul>'
/*huruf.forEach(pertanyaan=>{
    document.write(spasi+='<li>'+angka.concat(hasil)+'</li>');
    spasi += '</ul>'
});*/

huruf.forEach(pertanyaan=>{
    document.write(pertanyaan);
})

huruf.forEach(hasilDari =>{
    for(let i = 0 ; i<huruf.length; i++){
        document.write(huruf[i]);
    }
})
document.write('<br/<br/>')
huruf.forEach(dikali=>{
    document.write(dikali);
})
/*document.write(huruf)*/
/*huruf.forEach(jawaban=>{
    for(let i = 0; i<huruf.length; i++){
        document.write(huruf);
    }
})*/

