

const header = document.createElement("h1");
   header.setAttribute("class","text-center");
   header.setAttribute("id","title");
   header.innerHTML = "<h1>Restcountries & Weather Using Fetch API</h1>"
   document.body.append(header);

   //container
const element=document.createElement('div')
   element.setAttribute("class","container");
   element.setAttribute("class","text-center");
   element.setAttribute("id","Container");
   
   //row
const rowdiv= document.createElement("div");
   rowdiv.setAttribute("class","text-center");
   rowdiv.setAttribute("id","cardContainer");

   const restCountriesAPI = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,latlng,cca3';
   const openWeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
   const apiKey = 'your-api-key';

    async function getCountryData(){
      const res= await fetch(restCountriesAPI);
    }


   //append       
    rowdiv.append(element);
    document.body.append(element);
      
  