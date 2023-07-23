const container=document.querySelector('.container')
const imgBig=document.querySelector('thumb');
const imgJumbo=document.querySelector('.img-jumbo')
const thumb=document.querySelectorAll('.thumbalin')
// container.addEventListener('click',function(e){
//    if(e.target.className=='thumbalin'){
//     imgJumbo.src=e.target.src;
//     imgJumbo.classList.add('animasi');
//         setTimeout(() => {
//             imgJumbo.classList.remove('animasi')
//         }, 500);
//    }
// })


// thumb.forEach(function(e){
//     e.addEventListener('click',function(){
//         imgJumbo.setAttribute('src','New folder/img/'+e.target.src+'.png')
//         imgJumbo.classList.add('animasi');
//         setTimeout(()=>{
//             imgJumbo.classList.remove('animasi')
//         },500)
//     })
// })

// const img =document.querySelectorAll('div .thumb img');
 let arr=['gajah','semut','orang']
 let i=0;
//  img.forEach(function(el){
//     el.addEventListener('click',function(){
//         if(el.className='thumbalin'){
//            imgJumbo.setAttribute('src','New folder/img/'+arr[i++]+'.png')
//            imgJumbo.classList.add('animasi');
//            setTimeout(()=>{
//              imgJumbo.classList.remove('animasi')
//          },500)
//            if(i==arr.length){
//             i=0;
//            }
//            el.classList.toggle('blur')
//         }
//     })
// })
const img =document.querySelector('.thumb');

img.addEventListener('click',function(z){
    if(z.target.className=='thumbalin'){
       imgJumbo.src=z.target.src;
    }
})
imgJumbo.addEventListener('click',function(){
    container.src=z.target.src
})

