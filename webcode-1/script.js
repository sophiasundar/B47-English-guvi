async function poke(){
    const id= document.getElementById('Pokemon')
    var data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const res  = await data.json()
      console.log(res)

     var data = document.querySelector(".container")

      data.innerHTML=`
    <img src="https://www.shutterstock.com/image-photo/kherson-ukraine-august-27-2016-260nw-474817792.jpg">
    <table class="table">
       <thead>
       <tr>
       <th scope="col">ID: </th>
       <th scope="col">Name: </th>
       <th scope="col">Ability: </th>
       <th scope="col">Weight: </th>
       <th scope="col">Moves: </th>
       </tr>
      </thead>
      
      <tbody>
      <tr>
      <th scope="row"></th>
      <td><h5></h5></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      </tr>
       <tr>
       <th scope="row">3</th>
       <td colspan="2">Larry the Bird</td>
       <td>@twitter</td>
       </tr>
       </tbody>
       </table>
       <h5>Hello world</h5>`
}
        poke()