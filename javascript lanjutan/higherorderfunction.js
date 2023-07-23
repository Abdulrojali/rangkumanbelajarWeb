// higher Order Function 
// adalah sebuah function di dalam nya berisi function


// ini adalah contoh higher function
// function tulisnama ini di sebut higher order function karena miliki arguments function/callback yaitu asal
// function tulisnama(nama,asal){
//     console.log(`nama anda :${nama}`)
//     asal()
// }
// function asal(){
//     alert(`halo selamat datang`)
// }

// tulisnama('ucok',asal)


// //contoh lain
// let count=0;
// setInterval(function(){
// console.log(count++)
// },500)


// // contoh lain
// Submit.addEventListeners('click',function(){
//     console.log('hello')
// })


//contoh lain
function selamat(waktu){
    return function(nama){
        console.log(`halo : ${nama},selamat ${waktu}`)
    }
}

let selamatSore=selamat('sore');
console.log(selamatSore('ucup'))