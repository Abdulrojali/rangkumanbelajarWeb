const pT=document.querySelector('.click')
const main=document.querySelector('main')
const newPt=`<label>judul </label>
<input type='text' class='judulinput'>
<label>comment </label>
<textarea  class'comentinput'></textarea>
<button onclick='click()'>submit</button>
`;

let div=document.createElement('div')
div.setAttribute('class','gridsmain')
div.innerHTML=newPt

pT.addEventListener('click',()=>{
    main.appendChild(div)
})


