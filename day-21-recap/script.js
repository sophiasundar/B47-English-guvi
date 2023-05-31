  //https://api-thirukkural.vercel.app/api?num=x

async function promise(){
     const number = document.getElementById('Thirukkural').value
     var data = await fetch(`https://api-thirukkural.vercel.app/api?num=${number}`)
     const res  = await data.json()
       console.log(res)
     var data = document.querySelector('.space')  
     
      data.innerHTML=` 
         <div class="tamil"><h4>${res.sect_tam}-${res.chapgrp_tam}</h4></div>
         <div class="tamil"><h5>அதிகாரம் : <br>${res.chap_tam}</h5></div><br>
         <div class="tamil"><h6>திருக்குறள்: <br>${res.line1}</h6></div>
         <div class="tamil"><h6>${res.line2}</h6></div>
         <div class="tamil"><h6>குறள் விளக்கம்: ${tam_exp}</h6></div>

         <div class="english"><h4>${res.sect_eng}-${res.chapgrp_eng}</h4></div>
         <div class="english"><h5>Chapter: <br>${res.chap_eng}</h5></div>
         <div class="english"><h6>Thirukkural: <br>${res.eng}</h6></div>
         <div class="english"><p>Kural Explanation: ${eng_exp}</p></div>
        
      `
}

promise()

 var button= document.querySelector('.btn')
   button.addEventListener('click',promise)

    //<div class="english"><h6>${res.line2}</h6></div>