// cara membuat toggler menu web
const toggler=document.querySelector('.navtoggler')
const navlinks=document.querySelector('.navlinks');

toggler.addEventListener('click',function(){
    navlinks.classList.toggle('active');
})

// cara pertama membuat todolist
const todolist=document.querySelector('#todolist');
const submit = document.getElementById('submit')
 submit.addEventListener('click',function(){

    // buat element baru
    const liBaru= document.createElement('li');
    // panggil parent dari li
    const ulMain= document.querySelector('div.maintodolist ul')
    // buat text baru dan masukkan nilai dari input text
    const liTextBaru = document.createTextNode(todolist.value)
    // memasukkan nilai dari input todolist ke dalam li
    liBaru.appendChild(liTextBaru);
    // memasukkan li baru kedalam ul
    ulMain.appendChild(liBaru)

 })

 // cara kedua membuat todolist

 const click=document.getElementById('click');

 click.addEventListener('click',function(){
    // memanggil input 
    const todoListKedua= document.querySelector('#todolistke2');
    // membuat text baru dan masukkan input kedalam nya
    const textBaru= '<li><span onclick=toggle(this)>'+todoListKedua.value+
                    '</span>'+'<span onclick=clickme(this)> [x] </span>'
                    +'</li>';
    // panggil parent dari li
    const ulDua= document.querySelector('div.todolist2 ul');
    // masukkan list ke dalam ul
    ulDua.insertAdjacentHTML('afterbegin',textBaru)
    // mengkosongkan fieldnya
    textBaru.value=""

    // menambah beberapa fitur
    // 1. mencoret apabila sudah di lakukan
    /* pertama tambah event onclick pada teks span yang ada di dalam variabel textbaru
       kedua buat function dari onclick yang sudah di berikan dengan memberi classlist.toggle(classnya sesuai keinginan)
       ketiga lalu di css beri style pada class yang di buat
    // 2. menghapusnya
    pertama tambah event onclick pada teks span yang di berikan didalam span [x]a
    kedua buat function dari onclick tersebut
    ketiga barikan el.parentElement.remove untuk menghapus teks*/
 })

// membuat function onclick untuk mencoret teks
function toggle(el){
    el.classList.toggle('turu');
}

// membuat function onclick untuk menghapus teks
function clickme(el){
    el.parentElement.remove()
}