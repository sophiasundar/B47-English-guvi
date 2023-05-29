

const header = document.createElement("h1");
   header.setAttribute("class","text-center");
   header.setAttribute("id","title");
   header.innerHTML = "<h1>Restcountries & Weather Using Fetch API</h1>"
   document.body.append(header)

   //element
 //var element = document.querySelector('body div.container');   //? 
const element=document.createElement('div')
   element.setAttribute("class","container");
   element.setAttribute("class","text-center");
   element.setAttribute("id","container");
   
   //row
const rowdiv= document.createElement("div");
   rowdiv.classList.add('row','col-lg-4','col-sm-12');
   rowdiv.setAttribute("class","text-center");
   rowdiv.setAttribute("id","result");
 
   //columns
const coldiv1= document.createElement("div");
   coldiv1.setAttribute("class","column")
   coldiv1.classList.add('card','card-header','card-body');
   coldiv1.innerHTML=`<div class="card" style="width: 18rem;">
   <img class="card-img-top" src="..." alt="Card image cap">
   <div class="card-body">
     <h5 class="card-title">Card title</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" class="btn btn-primary">Click For Weather</a>
   </div>
 </div>`
   coldiv1.setAttribute("class","text-center");
   coldiv1.setAttribute("id","col1");

const coldiv2= document.createElement("div");
   coldiv2.setAttribute("class","column")
   coldiv2.classList.add('card','card-header','card-body');

   coldiv2.setAttribute("class","text-center");
   coldiv2.setAttribute("id","col2");   

const coldiv3= document.createElement("div");
   coldiv3.setAttribute("class","column")
   coldiv3.classList.add('card','card-header','card-body');
   coldiv3.setAttribute("class","text-center");
   coldiv3.setAttribute("id","col3"); 
   
   // button
const button1= document.createElement("input");  
   button1.setAttribute('class','btn btn-primary');
   button1.setAttribute("type","button");   //check
   button1.setAttribute("text","Click For Weather");
   button1.setAttribute('id','btn1');

const button2= document.createElement("input");  
   button2.setAttribute('class','btn btn-primary');
   button2.setAttribute("type","button");   //check
   button2.setAttribute("text","Click For Weather");
   button2.setAttribute('id','btn2'); 
 
const button3= document.createElement("input");  
   button3.setAttribute('class','btn btn-primary');
   button3.setAttribute("type","button");   //check
   button3.setAttribute("text","Click For Weather");  
   button3.setAttribute('id','btn3');

  // appending all
   coldiv1.appendChild(button1)
   coldiv2.appendChild(button2)
   coldiv3.appendChild(button3)
   rowdiv.append(coldiv1,coldiv2,coldiv3)
   element.appendChild(rowdiv)
   document.body.append(element)  // last

   //fetching restcountries and open weather map data

    let countriesData= document.getElementById('container');
       
      
       


  