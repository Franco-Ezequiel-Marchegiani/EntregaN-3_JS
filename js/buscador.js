//const endpoint = '../discos.json';
/* $("#boton__busqueda").click(function(e){
    e.preventDefault()
    $.ajax({
        url: "../discos.json",
        dataType: "json",
        type:"get",
        success: function(response){
            $.each(response.titulo, function(item){
                console.log(item.titulo);
            });
        }
    });
}); */

function buscarDisco(e){
    e.preventDefault();
    $.get("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",
    function(data, status){
        console.log(data);
        alert("Resultado " + data + "\n Estado: " + status);
    });
}