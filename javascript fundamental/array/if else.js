let array1=['ayam',1,2,'bakso'];
let array2 =['bebek',3,4,'cilok'];

let nilai = 0;
while(nilai <array1.length){
    console.log(array1[nilai])
    nilai++;
}
let jawab = 0;
while(jawab<array2.length){
    console.log(array2[jawab])
    jawab++;
}

for(let i = 0; i<array1.length; i++){
    document.getElementById("demo1").innerHTML = array1;
}
for(let j = 0; j<array2.length; j++){
    document.getElementById("demo2").innerHTML = array2;
}



let jmlhAngkot = 10;
let angkotBeroprasi = 5;

for(let angkot = 0; angkot <=jmlhAngkot; angkot++){
    if(angkot <= 5){
        console.log(angkot + 'beroprasi dengan baik')
    }
    else if (angkot == 6 ){
        console.log(angkot + "sedang di perbaiki")
    }
    else{
        console.log(angkot+ 'sedang tidak beroprasi')
    }
}

for(let angkot = 0; angkot <=jmlhAngkot; angkot++){
    if(angkot <= 5){
        console.log(angkot + 'beroprasi dengan baik')
    }
    else if (angkot == 6 || angkot ==8){
        console.log(angkot + "sedang di perbaiki")
    }
    else{
        console.log(angkot+ 'sedang tidak beroprasi')
    }
}

for(let angkot = 0; angkot <=jmlhAngkot; angkot++){
    if(angkot <= 5 && angkot != 3){
        console.log(angkot + 'beroprasi dengan baik')
    }
    else if (angkot == 6 || angkot ==8 ||angkot==3 ){
        console.log(angkot + "sedang di perbaiki")
    }
    else{
        console.log(angkot+ 'sedang tidak beroprasi')
    }
}

while (nilai <10){
    console.log(nilai + 'x');
    nilai++;
}


