
var nombreApellido = document.querySelector("#mensaje");


nombreApellido.addEventListener("click",function(){
    window.event.preventDefault();

    if (document.form.nombre.value.length>0 && document.form.nombre.value.length>0 && document.form.nombre.value.length){
        var boton = document.querySelector("#botonSubmit");        
        boton.disabled = false;
        boton.classList.remove("boton-envio-deshabilidado");                    
        boton.classList.add("boton-envio");
    }
    
});


