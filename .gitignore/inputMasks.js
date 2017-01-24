$(document).ready(function(){
	$(function(){
		$.mask.addPlaceholder("~","[+-]");
		$("#cpf").mask("999.999.999-99");
		$("#rg").mask("9.999.999");
        $("#nascimento").mask("99/99/9999");
		$("#cep").mask("99999-999");
        $("#telefone").mask("(99) 9999-9999");
        $("#celular").mask("(99) 99999-9999");
        $("#comercial").mask("(99) 99999-9999");
        $("#recado").mask("(99) 99999-9999");
        $("#cnpj").mask("99.999.999/9999-99");
        $("#ie").mask("999.999.999.999");
        $("#validade").mask("99/99/9999");
        $("#datacadastro").mask("99/99/9999");
        $("#fabricacao").mask("99/99/9999");
        $("#pesquisacpf").mask("999.999.999-99");
	});
});