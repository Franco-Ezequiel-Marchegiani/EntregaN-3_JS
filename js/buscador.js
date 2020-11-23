//const endpoint = '../discos.json';
$("#boton__busqueda").click(function(e){
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
});