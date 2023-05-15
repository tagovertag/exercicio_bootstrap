
$('#form-contato').submit(function(){
    let nome = $('#nome');
    let email = $('#email');
    let telefone = $('#telefone');
    let erro = $('.alert');
    let campo = $('campo-erro');

    //removendo o elemento da tela sempre que tentar submeter o formulário
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');
    
        if (nome.val() == '') {
            erro.removeClass('d-none');
            campo.html('nome'); //nome do campo q não foi preenchido
            nome.focus();
            nome.addClass('is-invalid');
            return false;
        }

        if (email.val() == '') {
            erro.removeClass('d-none');
            campo.html('email'); //nome do campo q não foi preenchido
            email.focus();
            email.addClass('is-invalid');
            return false;
        }

        if (telefone.val() == '') {
            erro.removeClass('d-none');
            campo.html('telefone'); //nome do campo q não foi preenchido
            telefone.focus();
            telefone.addClass('is-invalid');
            return false;
        }

    return true;
}); 