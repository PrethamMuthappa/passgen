const mydata=["A","B","C","D","E","F","E","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0,"@","#","$","%","&","_","-","."];
const dataval =document.getElementById("ip")
const p=document.getElementById("iop");
const button=document.getElementById("butn");

button.addEventListener("click",()=>{



    let inputvalue=dataval.value;
  let newarr=""
    for(let i=0;i<inputvalue;i++)
    {

        newarr+=mydata[randfun()]
        
    }
    
    p.textContent=newarr;
})

    
randfun=()=>{

   return Math.floor(Math.random()*mydata.length)
}