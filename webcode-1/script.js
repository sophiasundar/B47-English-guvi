// https://pokeapi.co/api/v2/pokemon/${id}
var data = document.querySelector(".container")
var url= "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=50/${id}"

async function poke(){
    const number= document.getElementById('Pokemon').value
    
    try{
    var data = await fetch('url')
    const res  = await data.json()
      console.log(res)
     
      document.getElementsById("Pokemon").value=""
     const division= document.createElement('div')
      division.classList.add('col-lg-4 col-md-6 col-sm-12')
      division.innerHTML=`<div class="card" style="width: 18rem;">
      <div class="card-header">
      <h4> Name:${res.name}</h4>
      </div>
      <div class="card-body">
      <ul class="list-group list-group-flush"><h5>POKEMON details</h5>
        <li class="list-group-item"><h5>ID-NO:<h6>${res.id}</h6></h5></li>
        <li class="list-group-item"><h5>ABILITY:<h6>${res.abilities[0].ability.name}</h6></h5></li>
        <li class="list-group-item"><h5>MOVES:<h6>${res.weight}</h6></h5></li>
        <li class="list-group-item"><h5>WEIGHT:<h6>${res.moves[0].move.name}</h6></h5></li>
      </ul>
      </div>
    </div>`
        
    data.appendchild(division)
    
    }
    catch{
       alert("Enter upto 50 ID's")
    }  
      
    }

    async function pokedex(){
      for(var i=1;i<=number;i++){
         await poke(i)
      }
    }
     pokedex()

     var button= document.querySelector('.btn')
     button.addEventListener('click',poke)

