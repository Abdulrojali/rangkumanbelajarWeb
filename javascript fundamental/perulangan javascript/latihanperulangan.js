// latihan perulangan for
/*let nilai = 10;

for(let bintang = 1; bintang < nilai; bintang++){
    console.log('melakukan perulangan sebanyak'+bintang +'x');
}*/

/*let noAngkot = 1;
let jmlhAngkot = 10;
let angkotBeroprasi = 6;

while (noAngkot<=angkotBeroprasi){
    console.log('angkot beroprasi dengan baik sebanyak\t'+noAngkot+'x');
    noAngkot++;
}
for (noAngkot=angkotBeroprasi+1; noAngkot<=jmlhAngkot; noAngkot++){
    console.log('angkot sedang tidak beroprasi dengan baik sebanyak \t'+noAngkot+'x');
}*/
// perulangan bersarang
/*let s = "";

for(let i = 0; i<10; i++){
    for(let j= 0; j<5; j++){
        s+="*";
    }
    s+="\n";
}
console.log(s);*/

//perulangan bersarang bintang bertambah
/*let s = "";

for(let i = 0; i<10; i++){
    for(let j= 0; j<=i; j++){
        s+="*";
    }
    s+="\n";
}
console.log(s);*/
//perulangan bersarang bintang bertambah terbalik
/*let s = "";

for(let i = 10; i>0; i--){
    for(let j= 0; j<i; j++){
        s+="*";
    }
    s+="\n";
}
console.log(s);*/
// bintang sejajar tidak ada jarak
/*let rows = 5 ;

for (i = 0; i<rows;i++){
    console.log('*');
}*/
// bintang sejajar berjarak
/*let rows =5 ;
let bintang = '';
for (let i =0; i<rows;i++){
    bintang +='*';
    bintang +='\t';
}
console.log(bintang);*/

//bintang sejajar kebawah berjarak
/*let nilai = 5;
let babi = '';
for(let i = 0; i<nilai; i++){
   babi += '*';
   babi +='\n';
}
console.log(babi);*/

//menambah bintang sesuai yang di ingin kan
/*let nilai = 5;
let bintang = '';
for (let i = 0; i < nilai ; i++){
    for(let j = 0; j < nilai; j++){
        bintang +='*';
    }
    bintang += '\n';
}
console.log(bintang);*/

// menambah bintang pola segitiga menurun
/*let rows = 5;
let bintang = '';

for (let i = 0; i<=rows; i++){
    for(let j = 0; j <=i ; j++){
        bintang += '*';
    }
    bintang += '\n';
}
console.log(bintang);*/

// menambah bintang pola segitiga terbalik keatas

/*let rows = 5;
let bintang = '';

for (let i = 0; i < rows; i++) {
    for (let j =rows; j > i; j--) {
        bintang += '*';
    }
    bintang += '\n';
}
console.log(bintang);*/


/*let rows = 5;
let bintang='';

for (let i =0; i<rows;i++){
   for(let j =0; j <=i; j++){
    bintang+='*';
   }
   bintang+='\n';
}
console.log(bintang);*/



/*let word = 'kontolbapakkau'

for (let i = 0; i < word.length;i++){
    let space = '';
    for(let j = 0; j<i; j++){
        space=space+' ';
    }
    console.log(space+word[i]);
}*/

/*let input = prompt('masukkan email ada');
let provider = '';

for(let i = 0; i < input.length; i++){
    if(input[i-1==='@']){
        for(let j = i; j < input.length; j++){
            if (input[j]==='.'){
                break;
            }
            provider+=input[j];
        }
        break;
    }
}
console.log('your email provider is'+input);*/

/*let panjang = prompt('masukkan angka untuk perulangan');
let hasil ='';

for(let i = 0; i<panjang; i++){
    for(let j = 0; j<=panjang; j++){
        hasil+='*';
    }
    hasil+='\n';
}
console.log(hasil);*/

// membuat bintang menggunakan function

/*function nilai(harga){
    let hasil = '';
    for(let i = 0; i<harga; i++){
        for(let j = 0; j<=i; j++){
            hasil+='*';
        }
        hasil+='\n';
    }
    return hasil;
}
console.log(nilai(5));*/


//membuat bintang sebaris dan sejajar menggunakan function
/*function nilai(baso){
    let hasil = '';
    for(let i = 0; i<baso; i++){
        for(let j = 0; j<baso; j++){
            hasil+='*';
        }
        hasil+='\n';
    }
    return hasil;
}
console.log(nilai(10));*/


//membuat bintang segitiga siku 1 menggunakan function
/*function kanan(hasil){
    let jual ='';
    for(let i = 0; i<hasil; i++){
        for(let j =0; j<=i; j++){
            jual+='*';
        }
        jual+='\n';
    }
    return jual;
}
console.log(kanan(10));*/



//membuat bintang segitiga siku 2 menggunakan function
/*function kanan(nilai){
    let hasil = '';
    for(let i = 0; i<nilai; i++){
        for(let j = i; j<nilai; j++){
            hasil+= '* ';
        }
        hasil+='\n';
    }
    return hasil;
}
console.log(kanan(10));*/

// membuat bintang segitiga siku 3 menggunakan function

/*function kananBawah(nilai){
    let hasil ='';
    for(let i = nilai; i>0; i--){
        for(let j = 1; j<=nilai; j++){
            if(j>=i){
                hasil+='*';
            }
            else{
                hasil+=' ';
            }
        }
        hasil+='\n';
    }
    return hasil;
}
console.log(kananBawah(10));*/

// membuat bintang segitiga siku 4 menggunakan function

/*function atasKanan(nilai) {
    let hasil = '';
    for (let i = nilai; i > 0; i--) {
        for (let j = nilai; j > 0; j--) {
            if (j > i) {
                hasil += ' ';
            }
            else {
                hasil += '*';
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(atasKanan(10));*/ 

function pistol(air){
    let nilai ='';
    for(let i =0; i<air; i++){
        for(let j =0; j<air; j++){
            if(i===0||i===air-1){
                nilai+='*'
            }
            else if(j===0||j===air-1){
                nilai+='*';
            }
            else{
                nilai+=' ';
            }
        }
        nilai+= '\n';
    }
    return nilai;
}
console.log(pistol(8));