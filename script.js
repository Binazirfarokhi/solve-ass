const cname = document.getElementById('cname');
const country = document.getElementById('country');
const population = document.getElementById('population');
const imageUrl = document.getElementById('imageUrl');
const btn = document.getElementById('btn');
const userChoose = document.getElementById('userChoose');



class City {
    constructor(cname,country,population,imageUrl){
        this.cname = cname;
        this.country= country;
        this.population = population;
        this.imageUrl = imageUrl

    }
}

let arrayCity = [];
btn.addEventListener('click',function(){
    let eachCity = new City(cname.value,country.value,population.value,imageUrl.value);
    arrayCity.push(eachCity);
    pickCity(interval)
    
})

let intervalId ;
let interval = '';
function pickCity(interval =2000){
   clearInterval(intervalId);
  intervalId= setInterval(() => {
    for (let i = 0; i < arrayCity.length; i++) {
      const random = Math.floor(Math.random()*arrayCity[i]);
        Show.innrHTML += arrayCity[random];
        showtow += `<img src="${imageUrl}" alt="" width="50px" height="50px">
        <div>${arrayCity[random].cname}</div>
        <div>${arrayCity[random].population}</div>
        <div>${arrayCity[random].country}</div>`

        
    }
        
    }, interval);
    
}
btntwo.addEventListener('click',()=>{

if (userChoose != 2 ){
    interval = userChoose.value;
    pickCity(interval);

}


})
