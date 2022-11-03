$(document).ready(function() {

  $('form').on('submit', function(e) {
    e.preventDefault();

    const tarefaParaFazer = $('#tarefas').val();
    const novaLinha = $(`<li style="display: none"></li>`);

    $(`<span class="tarefa">
      ${tarefaParaFazer}
      </span>`).appendTo(novaLinha)
    $(novaLinha).appendTo('#lista');
    $(novaLinha).fadeIn(1500);
    $('#tarefas').val('');

    $('.tarefa').click(
      function(){  
        $(this).css('text-decoration' , 'line-through');       
      }
    );
  }) 
})

