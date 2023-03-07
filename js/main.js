//Example fetch using pokemonapi.co

let button = document.querySelector('button');
let button2 =document.getElementById('btn-2');

button.addEventListener('click', getFetch)
button2.addEventListener('click', getFetch2)

function getFetch(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        document.querySelector('img').src=data.message
    })

    .catch(err => {
        console.log(err)
    });
}


function getFetch2(){
  fetch("https://aws.random.cat/meow")
  .then(res=>res.json())
  .then(data=>{
    document.querySelector('.img-2').src=data.file
    console.log(data)
  })
  
  .catch(err =>{
    console.log(err)
  });
}
