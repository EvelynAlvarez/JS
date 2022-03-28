const fetchPokemon = ()=>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>{
        if(res.status!="200"){
            console.log(res);
            pokeImage("./pikachusad.png");
        }
        else{
            return res.json(); 
        }
       
    }).then((data)=>{
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg); 
        DatosPoke(data);

    })
}
const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const DatosPoke = (url) =>{

    const Ataques = document.getElementById("Movimientos");
    Ataques.innerHTML = "";
    Ataques.innerHTML +=`
    <h3>${url.name}</h3>
    <h4>Ataques:</h4>
    `;
    console.log(url.moves.length)
    console.log(url.moves[0].move.name)
    for (var i = 0; i < url.moves.length; i++) {
        
        Ataques.innerHTML +=`<li type="square">${url.moves[i].move.name}.</li>`;     
     }
    
     const Estadisticas = document.getElementById("estadistica")
     Estadisticas.innerHTML="";
     for (var i = 0; i < url.stats.length; i++) {
        
        Estadisticas.innerHTML +=`<li type="square">${url.stats[i].stat.name}:${url.stats[i].base_stat}</li>`;     
     }
}
 

