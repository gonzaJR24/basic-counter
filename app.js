let paragraph=document.querySelector("p")
let counter=null
const btnMore=document.querySelector(".more")
const btnLess=document.querySelector(".less")

document.addEventListener("click",e=>{
        if(e.target==btnMore){
            counter++
            paragraph.textContent=counter
        }
    
        if(e.target==btnLess){
            if(counter>0){
            paragraph.textContent=counter-=1
            }
        }
})


