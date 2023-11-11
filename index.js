const cero=document.querySelector(".cero"); 
const num1=document.querySelector(".uno")
const num2=document.querySelector(".dos")
const num3=document.querySelector(".tres")
const num4=document.querySelector(".cuatro")
const num5=document.querySelector(".cinco")
const num6=document.querySelector(".seis")
const num7=document.querySelector(".siete")
const num8=document.querySelector(".ocho")
const num9=document.querySelector(".nueve")
const decimal=document.querySelector(".decimal")
const suma=document.querySelector(".suma")
const resta=document.querySelector(".resta")
const multiplicacion=document.querySelector(".division")
const divicion=document.querySelector(".multiplicacion")
const igual=document.querySelector(".igual")
const borrar=document.querySelector(".clear")
const display=document.querySelector("input")
let numeroA=""
let numeroB=""
let resultado=0

cero.addEventListener("click",(e)=>{
   display.value=display.value+e.target.textContent;
})
num1.addEventListener("click",(e)=>{
   display.value=display.value+e.target.textContent;
})
num2.addEventListener("click",(e)=>{
   display.value=display.value+e.target.textContent;
})
num3.addEventListener("click",(e)=>{
   display.value=display.value+e.target.textContent;
})
num4.addEventListener("click",(e)=>{
   display.value=display.value+e.target.textContent;
})
num5.addEventListener("click",(e)=>{
   display.value=display.value+e.target.textContent;
})
num6.addEventListener("click",(e)=>{
   display.value=display.value+e.target.textContent;
})
num7.addEventListener("click",(e)=>{
   display.value=display.value+e.target.textContent;
})
num8.addEventListener("click",(e)=>{
   display.value=display.value+e.target.textContent;
})
num9.addEventListener("click",(e)=>{
   display.value=display.value+e.target.textContent;
})
decimal.addEventListener("click",(e)=>{
  let verificar=display.value

  for (let x = 0; x < verificar.length; x++) {
     if(verificar[x]=="."){
      return
     }
  }

   display.value=display.value+e.target.textContent;
})


borrar.addEventListener("click",()=>{
   display.value=""
   numeroA=""
   numeroB=""
   resultado=0
})

suma.addEventListener("click",(e)=>{
   numeroA=display.value
   display.value=""
   op=e.target.textContent
   console.log(numeroA,op)
})
resta.addEventListener("click",(e)=>{
   numeroA=display.value
   display.value=""
   op=e.target.textContent
   console.log(numeroA,op)
})
divicion.addEventListener("click",(e)=>{
   numeroA=display.value
   display.value=""
   op=e.target.textContent
   console.log(numeroA,op)
})
multiplicacion.addEventListener("click",(e)=>{
   numeroA=display.value
   display.value=""
   op=e.target.textContent
   console.log(numeroA,op)
})

igual.addEventListener("click",()=>{
   numeroB=display.value
   console.log(numeroB)

   if(numeroA!="" && numeroB!=""){
       switch (op) {
      case "+":
         
         resultado=parseFloat(numeroA)+parseFloat(numeroB);
         display.value=resultado
         numeroB=""
         numeroA=""
         console.log(numeroB)
         break;
      case "-":
            resultado=parseFloat(numeroA)-parseFloat(numeroB);
            display.value=resultado
            numeroB=""
            numeroA=""
            break;
      case "x":
            resultado=parseFloat(numeroA)*parseFloat(numeroB);
            display.value=resultado
            numeroB=""
            numeroA=""
            break;
      case "/":
         resultado=parseFloat(numeroA)/parseFloat(numeroB);
         display.value=resultado
         numeroB=""
         numeroA=""
         break;
      default:
         break;
     }
   }else{
      return
   }
  
  

   
})