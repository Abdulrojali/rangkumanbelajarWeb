const calculate=document.getElementById('calculate')
const input1=document.querySelector('#numberOne')
const input2=document.querySelector('#numberTwo')
const btn=document.getElementById('click')

// cara pertama

// btn.addEventListener('click',()=>{
//     let result =eval(input1.value+calculate.value+input2.value)
//     console.log(result)
// })


// cara kedua

// btn.addEventListener('click',()=>{
//   let nilai =calculate.value
//   let hasil=eval(input1.value+nilai+input2.value)
//   console.log(hasil)
// })


// cara ketiga
const option=document.querySelectorAll('option')
// let hasil;
// option.forEach(function(el){
//   let op=el.className
//   btn.addEventListener('click',function(){
//     let output1=parseInt(input1.value)
//     let output2=parseInt(input2.value)

//     if(op==='+'){
//       console.log('ini tambah')
//       console.log(output1+output2)
//     }
//     else if(op==='-'){
//       console.log('ini kurang')
//       console.log(output1-output2)
//     }
//     else if(op==='/'){
//       console.log('ini bagi')
//       console.log(output1/output2)
//     }
//     else if(op==='*'){
//       console.log('ini kali')
//       console.log(output1*output2)
//     }
//     else{
//       alert('error')
//     }
//   })
// }) 


// cara keempat
// btn.addEventListener('click',()=>{
// let operator=calculate.value
// let output1=parseInt(input1.value)
// let output2=parseInt(input2.value)
// if(operator==='+'){
//   console.log(output1+output2)
// }
// else if(operator==='-'){
//   console.log(output1-output2)
// }
// else if(operator==='/'){
//   console.log(output1/output2)
// }
// else if(operator==='*'){
//   console.log(output1*output2)
// }
// else{
//   alert('wrong')
// }
// })
