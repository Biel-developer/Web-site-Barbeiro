$(document).ready(function () {
    $(".hamburguer").click(function () {
      $(this).toggleClass("active");
      $(".menu").toggleClass("active");
    });
});

function button(){
  window.location.href = "./pagina-apresentação/index2.html";
}
