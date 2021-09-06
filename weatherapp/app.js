var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var gg= document.getElementById('gg');
var x=true;
button.addEventListener('click', function(name)
{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value
+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
 const alpha=`<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        data['weather'][0]['icon']
      }.svg">`; 
const country=`<sup>${data['sys']['country']}</sup>`;
   //gg.classList.remove('image');
   //gg.classList.add('image'); 
if(x)
{
document.body.style.backgroundImage="url('https://source.unsplash.com/user/elli_photos/1600x900?sig=${Math.random()}')";
x=false;
}
else
{
 document.body.style.backgroundImage="url('https://source.unsplash.com/user/naturephotography/1600x900?sig=${Math.random()}')";
x=true;
}
 var tempValue = data['main']['temp'];
  var nameValue = data['name']+country;
  var descValue = data['weather'][0]['description'];
  main.innerHTML = nameValue;
  temp.innerHTML = Math.round(tempValue-273.15)+`<sup>&deg</sup>C`;
  clouds.innerHTML=alpha;
  desc.innerHTML = descValue;
  input.value ="";
  input.focus();
  
  
})

.catch(()=>{alert("Wrong city name!");
 input.value ="";
 input.focus();
})
})