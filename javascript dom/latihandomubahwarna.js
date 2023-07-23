 const buttonClick=document.getElementById('click');

 buttonClick.addEventListener('click',function(){
    const pilihan=prompt('pilih warna : merah,kuning,hijau,biru');
    if (pilihan==='merah'){
     document.body.style.backgroundColor='red';
     document.body.style.color='white'
    }
    else if(pilihan==='kuning'){
     document.body.style.backgroundColor='yellow';
     document.body.style.color='white'
    }
    else if(pilihan==='hijau'){
     document.body.style.backgroundColor='green';
     document.body.style.color='white'
    }
    else if(pilihan==='biru'){
     document.body.style.backgroundColor='blue';
     document.body.style.color='white'
    }
    else{
     document.body.style.backgroundColor='white';
     document.body.style.color='black'
    }
   
 })


// cara kedua 
// const buttonNew=document.createElement('button');
// const teksNew= document.createTextNode('join');

// buttonNew.appendChild(teksNew)
// buttonNew.setAttribut('type','button');
// buttonClick.after(buttonNew)

// buttonNew.addEventListener('click',()=>{
//    const r=Math.floor(Math.random()*255+1)
//    const g=Math.floor(Math.random()*255+1)
//    const b=Math.floor(Math.random()*255+1)
//    document.body.style.backgroundColor='rgba('+r+','+g+','+b+')';
// })

// dan ini juga cara kedua
const tekan= document.getElementById('tekan');

tekan.addEventListener('click',()=>{
   const r=Math.floor(Math.random()*255+1)
   const g=Math.floor(Math.random()*255+1)
   const b=Math.floor(Math.random()*255+1)
   document.body.style.backgroundColor='rgba('+r+','+g+','+b+')';
})


// cara ketiga
const rangeMerah=document.querySelector('input[name=merah]')
const rangeBiru=document.querySelector('input[name=biru]')
const rangeHijau=document.querySelector('input[name=hijau]')

rangeMerah.addEventListener('input',function(){
   const r=rangeMerah.value;
   const b=rangeBiru.value;
    const g=rangeHijau.value;
   document.body.style.backgroundColor='rgba('+r+','+b+','+g+')'
})


rangeBiru.addEventListener('input',function(){
   const r=rangeMerah.value;
   const b=rangeBiru.value;
    const g=rangeHijau.value;
   document.body.style.backgroundColor='rgba('+r+','+b+','+g+')'
})

rangeHijau.addEventListener('input',function(){
   const r=rangeMerah.value;
   const b=rangeBiru.value;
    const g=rangeHijau.value;
   document.body.style.backgroundColor='rgba('+r+','+b+','+g+')'
 })

















// const elB=document.createElement('button');
// const elT=document.createTextNode('this');
// elB.setAttribute('type','button')
// elB.setAttribute('class','coli')

// elB.appendChild(elT)
// tekan.after(elB)
// console.log(elB)

// const buttonC=document.querySelector('.coli');

// buttonC.addEventListener('click',function(){
//   const pNew=document.createElement('p');
//   const pTeks=document.createTextNode('this node');
//   pNew.appendChild(pTeks)
//   elB.after(pNew)
// })



