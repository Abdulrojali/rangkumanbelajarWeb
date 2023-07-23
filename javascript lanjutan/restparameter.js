// rest parameter
// menangkap banyak arguments untuk menjadikan array
// rest parameter biasanya di gunakan untuk mengambil sisa arguments jadi di letakan di akhir argument awal pembuatan
// (...ini) adalah rest parameter
function ucup(...ini){
    return `nilai dari arguments adalah ${ini}`
}
console.log(ucup(1,2,3,4,5,6,7,8))


// array.from mengubah object,atau nodelist menjadi array


function jumlah(...angka){
    let total=0
    for(let a of angka){
        total+=a
    }
    return total
}

console.log(jumlah(1,2,3,4,5,6,7,8,9))