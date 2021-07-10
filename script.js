let btn = document.getElementById('btn')
let inp = document.getElementById('inp')
let box = document.getElementById('box')
let city = document.getElementById('city')
let temp = document.getElementById('temp')
let sky2 = document.getElementById('sky2')
let feels = document.getElementById('feels')
let hum  = document.getElementById('humidity')
let temp2 = document.getElementById('temp2')
let temp3 = document.getElementById('temp3')
let time = document.getElementById('time')
let link = document.getElementById('link')
addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        if(inp.value === ''){
            this.alert("Enter City Name First")
        }else{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=1321519535b657b4079d5dd599614314`)
        .then(data=>{
         return data.json()
        }).then(data2=>{
         console.log(data2)
         console.log(data2.name);
         console.log(data2.main.temp);
         console.log(data2.main.feels_like);

         console.log(data2.main.humidity);
         console.log(data2.weather[0].main);
         console.log(data2.weather[0].description);
         console.log(data2.sys.country);
         inp.value = ''
        //Adding css to box
        box.style.borderRadius = '10px';
        box.style.border = '2px solid #343434';
        box.style.padding = '10px';
        //Adding city
        city.innerText = data2.name+" , "+data2.sys.country;
        //Adding temp
        temp.innerText = data2.main.temp+" C";
        temp.style.borderBottom = '2px solid #343434';
        //Adding Sky
        sky2.innerText= data2.weather[0].description;
        //Feels Like
        feels.innerText = "Feels Like: "+data2.main.feels_like+" C";
        //humidity
        hum.innerText = "Humidity: "+data2.main.humidity+" %";
        //temp2
        temp2.innerText = "Min Temp: "+data2.main.temp_min+" C";
        temp3.innerText ="Max Temp: "+data2.main.temp_max+" C";
        //time
        let d = new Date()
        time.innerText = d.toLocaleTimeString();
        link.innerText = "Made By Piyush"
        
    }).catch(err=>{
        this.alert("Invalid City Name")
    })
        
        }
    }
    
})


