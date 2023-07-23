

function getCompt(){
    let comp=Math.random();
    if(comp<0.34)return'gajah';
    if(comp>=0.34 && comp<0.67)return'semut';
    return'orang';
}

function rules(compt,p){
    let hasil='';
    if(p==compt){
        hasil='seri';
    }
    else if (p=='gajah'){
        if(compt=='semut'){
            hasil='kalah'
        }
        else{
            hasil='menang'
        }
    }
    else if(p=='semut'){
        if(compt=='gajah'){
            hasil='menang'
        }
        else{
            hasil='kalah'
        }
    }
    else if(p=='orang'){
        if(compt=='semut'){
            hasil='menang';
        }
        else{
            hasil='kalah'
        }
    }
    return hasil;
}

// const iGajah=document.querySelector('.gajah');

// iGajah.addEventListener('click',function(){
//     let pilihanKomputer=getCompt()
//     let pilihanPlayer=iGajah.className;
//     let hasilPilihan=rules(pilihanKomputer,pilihanPlayer)
//     const computer=document.querySelector('.computer');
//     computer.setAttribute('src','New folder/img/'+pilihanKomputer+'.png');
//     const menang=document.querySelector('.menang');
//     menang.innerHTML=hasilPilihan;

// })

function muter(){
    const computer=document.querySelector('.computer');
    let i =0;
    let array=['gajah','semut','orang'];
    setInterval(function(){
        computer.setAttribute('src','New folder/img/'+array[i++]+'.png')
        if(i==array.length){
            i=0;
        }
    },100)
}
const img=document.querySelectorAll('div .content-kedua img');
img.forEach(function(el){
    el.addEventListener('click',()=>{
        let pilihanKomputer=getCompt()
        let pilihanPlayer=el.className;
        let hasilPilihan=rules(pilihanKomputer,pilihanPlayer)
        muter()
        const computer=document.querySelector('.computer');
        computer.setAttribute('src','New folder/img/'+pilihanKomputer+'.png');
        const menang=document.querySelector('.menang');
        menang.innerHTML=hasilPilihan;
    })
})

