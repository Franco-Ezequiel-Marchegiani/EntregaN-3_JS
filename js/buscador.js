// *** BUSCADOR ***
/* $("#boton__busqueda").click(function(e){
    e.preventDefault
    $.ajax({
        url: "discos.json",
        dataType: "json",
        success: function(response){
            $.each(response.discos, function(discos){
                alert(discos.titulo)
            })
        }
    })
})

("discos.json", 
    function(data, status){
        alert("Discos: " + data);
    });
 */

//Acceso al input y botón del html mediante al ID
let buscador = document.getElementById("buscador__discos");
let boton = document.getElementById("boton__busqueda");
//Simulación de llamada a una API/Json, dentro de una variable a la cual acceder luego
let discos = [
    {nombre: 'Queen', precio: '1300', foto: "https://www.elquintobeatle.com/wp-content/uploads/2015/07/queen-queen-1.jpg" },
    {nombre: 'Queen II', precio: '2000', foto: "https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fxRK-N2T/SharedImage-20939.jpg?t=60a9ea0fa63bbec7faec" },
    {nombre: 'Sheer Heart Attack', precio: '2150', foto: "https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fn2k-N2T/SharedImage-15930.jpg?t=6ec592dcacac5d551f81" },
    {nombre: 'A Night At The Opera', precio: '2000', foto: "https://img.discogs.com/EkzMhk6a9H86kG5Gb0kw2m8nVNY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2127698-1473017624-8664.jpeg.jpg" },
    {nombre: 'A Day At The Race', precio: '2150', foto: "https://www.music-bazaar.com/album-images/vol17/800/800547/2656232-big/A-Day-At-The-Races-Limited-Edition-cover.jpg" }
]

let resultadoFinal = document.getElementsByClassName('card');

let filtrar = function Filtrado(){
    //Tiene que comenzar por un valor negativo para que no colapse y entre en un bucle infinito
    resultadoFinal.innerHTML = '';
    console.log(buscador.value);
    let texto = buscador.value.toLowerCase();
    for(let disco_individual of discos){
        let nombre = disco_individual.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultadoFinal.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${disco_individual.foto}" class="card-img-top" alt="Portada Álbum 'Queen'">
            <div class="card-body">
              <h5 class="card-title">${disco_individual.nombre}</h5>
              <p class="card-text">Publicación: 13 de julio 1973 || Sello: Parlophone</p>
              <p class="card-price">${disco_individual.precio}</p>
              <a href="https://open.spotify.com/album/1kkb8xlG9yssEVsWKiEtAB" target="_blank" class="btn btn-primary">Escuchar Álbum</a>
              <button class="btn btn-primary addCarrito showCarrito">Comprar Álbum</button>
            </div>
            `
        }
        //Condicional por si no encontró el resultado
        if(resultadoFinal.innerHTML === ''){
            resultadoFinal.innerHTML += `
            <p>Lo siento, no se encontró el disco buscado :(</p>
            `
        }
    }
}
boton.addEventListener('click', filtrar)
$('#boton__busqueda').click(function(e){
    e.preventDefault()
})
buscador.addEventListener('keyup', filtrar)

filtrar();
//Nota, en el ciclo for la "i" se puede cambiar el nombre, lo modifiqué únicamente en este encuentro para
//Diferenciar un poco el codigo y que aprenda de que hay otras maneras, me resulta más claro de esta forma

// *** FIN BUSCADOR ***