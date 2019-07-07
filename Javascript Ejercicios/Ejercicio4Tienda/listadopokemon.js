let controlClick = function(){
  const linkList = document.querySelectorAll('a');


  for (let i = 0; i < linkList.length; i++) {
      linkList[i].addEventListener('click', function(event){
          event.preventDefault();
          console.log(event.currentTarget.href);

          funcionChachi(event.currentTarget.href);
      })
  }
}


var miPromesa = fetch('https://pokeapi.co/api/v2/pokemon/');

miPromesa.then(function(res){
  return res.json();
}).then(function(res){
  for(let i = 0; i < res.results.length; i++){
    let pokemon = res.results[i];
    let fila = document.createElement('tr');
    let celda1 = document.createElement('a');
    let celda2 = document.createElement('td');
    

    celda1.innerText = pokemon.name;
    /* celda2.innerText = pokemon.url; */
    celda1.href = pokemon.url;
    

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    

    let tableBody = document.querySelector(".table-body");
    tableBody.appendChild(fila);

    var pokePromesa = fetch(pokemon.url);

    pokePromesa.then(function(res){
        return res.json()
    }).then(function(res){
        console.log(res);

        let imgPoke = document.createElement('img');
        imgPoke.src = res.sprites.back_default;
        /* let namePoke = document.createElement('p');
        let weightPoke = document.createElement('p');
        let heightPoke = document.createElement('p'); */


        /* namePoke.innerText = pokePromesa.name;
        weightPoke.innerText = pokePromesa.weight;
        heightPoke.innerText = pokePromesa.height; */

        /* fila.appendChild(imgPoke); */
       /*  let celda3 = document.createElement('td');
        let celda4 = document.createElement('td');

        weightPoke.innerText = res.weight;
        celda3.appendChild(weightPoke);
        heightPoke.innerText = res.height;
        celda4.appendChild(heightPoke);  
        fila.appendChild(celda3);
        fila.appendChild(celda4); */
        
    });

    
  }
  controlClick();
});

