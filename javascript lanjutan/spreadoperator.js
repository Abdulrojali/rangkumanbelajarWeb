// spread operator
// memecah iterables
// contoh
// const nama=['ucok','asep','tuti']
// console.log(...nama)
// console.log(...nama[0])



// // A. menggabungkan 2 array
// const mhs=['ucok','budi','asep']
// const dosen=['malik','rizky','tuti']
// const orang=[...mhs,...dosen]
// console.log(orang)

// // atau 
// const gabung=mhs.concat(dosen)
// console.log(gabung)

// // menambah nilai array di tengah atau pinggir
// const loncat=['aisyah',...mhs,'ucup',...dosen]
// console.log(loncat)
// // ini lah fungsi dari spread operator pada array di bandingkan methode concat



// B. mengcopy array
// const mhs=['ucup','rizky','budy']
// const mhs1=[...mhs]
// mhs1[0]='asep'
// console.log(mhs1)
// console.log(mhs)


// looping node list kedalam array

// const li=document.querySelectorAll('li')
// // const mhs=[]
// // for(let i=0; i<li.length; i++){
// //     mhs.push(li[i].textContent)
// // }
// // console.log(mhs)

// // atau
// const mhs=[...li].map(m=>m.textContent)
// console.log(mhs)
