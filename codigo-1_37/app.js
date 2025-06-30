//Evento que se ejecuta cuando la pagina web esta totalmente cargada (en el navegador)
$(document).ready(function() {
    // Mostrar el mensaje con efecto fadeIn
    $("#mostrar").click(function() {
      $("#mensaje").fadeIn();
    });
  
    // Ocultar el mensaje con efecto fadeOut
    $("#ocultar").click(function() {
      $("#mensaje").fadeOut();
    });
  });