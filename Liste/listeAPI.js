var req = new XMLHttpRequest();

req = new XMLHttpRequest();
req.open("GET", "http://145.239.32.254:8081/pokemon/pokemons", false);
req.send(null);

console.log(req.responseText);

var pokemons =  JSON.parse(req.responseText);

console.log(pokemons)

var chips = 0;



pokemons.forEach(function (pokemon) {


var divElt = document.createElement("div");
var nomElt = document.createElement("p");
var numeroElt = document.createElement("p");
var imageElt = document.createElement("img"); 
var spanBisElt = document.createElement("span");
var typeElt = document.createElement("p");


    divElt.setAttribute("class", "pokemon");

    nomElt.href = pokemon.url;
    nomElt.textContent = pokemons[chips].nom;
    numeroElt.textContent = pokemons[chips].numero;
    typeElt.textContent = pokemons[chips].type;
    imageElt.textContent = pokemons[chips].image;
    nomElt.style.color = "#428bca";
    imageElt.src = pokemon.image;
    nomElt.style.textDecoration = "none";
    nomElt.style.fontWeight = "bold";
    imageElt.style.maxWidth = "10%";
    imageElt.style.maxHeight = "10%";

 
 

    numeroElt.classList.add("paragraphe");

    spanBisElt.textContent = " Type : " + pokemon.type;
    numeroElt.textContent = " Numéro : " + pokemon.numero;
    imageElt.textContent = " images : " + pokemon.image;


   
    document.getElementById("contenu").appendChild(divElt);
    divElt.appendChild(nomElt); 
    divElt.appendChild(numeroElt);
    divElt.appendChild(imageElt);
    numeroElt.appendChild(spanBisElt);

    chips++;

})