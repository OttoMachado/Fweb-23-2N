$(document).ready(function () {
    const $carousel = $('.carrossel-wrapper');
    const $items = $('.carrossel-item');
    const itemCount = $items.length;
    const itemWidth = $items.outerWidth(true); 
    let currentIndex = 0;
  // aqui é pra incluir margin e padding 

    // aqui é onde fica o botão Proximo
    $('#prox').click(function () {
        if (currentIndex < itemCount - 1) {
          currentIndex++;
          $carousel.css('transform', `translateX(-${currentIndex * itemWidth}px)`);
        }
      });
    
      // aqui é onde fica o botao Anterior
      $('#anterior').click(function () {
      if (currentIndex > 0) {
        currentIndex--;
        $carousel.css('transform', `translateX(-${currentIndex * itemWidth}px)`);
      }
    });
  });