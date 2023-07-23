// template literal adalah string literal yang memungkinkan ada nya expresion didalam nya
// beberapa macam string literal
// 1. '' kutip satu
// 2. "" kutip dua
// 3. `` back tip  
// template literal dapat di gunakan menggunakan back tip

// contoh menggunakan template literal
// 1. line string
//  `hello world`

// // 2. ini adalah multi line sting
// ` lorem implus dlorosit
// hello world
// hello world`

// // 3. embeded ekspression
// `string tag ${iniadalahekspression} string teks`


// // 4. tageg template
// tag`string tag ${iniadalahekspression} string teks`


// tempalte literal
console.log('hello world')

// multi line
console.log(`my name is gorgio 
im live in cicurug 
my ages 19 years old`)



// contoh penggunaan emmbedd ekspresion menggunakan object
const mahasiswa={
    nama:'abdul',
    alamat:'cicurug',
    ttl:`febuari 02 2003`,
    hobi:`main game`
}

console.log(`nama anda : ${mahasiswa.nama}
alamat anda : ${mahasiswa.alamat}
tempat tanggal lahir : ${mahasiswa.ttl}
hobi anda : ${mahasiswa.hobi}`)



// contoh html fragmants menggunakan multi line
const p=`<div class ='id'> 
<p> nama anda :${mahasiswa.nama}</p>
<p> alamat anda :${mahasiswa.alamat}</p>
<p> alamat anda :${mahasiswa.ttl}</p>
<p> alamat anda :${mahasiswa.hobi}</p>
</div>`
console.log(p)