$(document).ready(function(){
	$(function(){
	$.mask.addPlaceholder("~","[+-]");
	$("#cpf").mask("999.999.999-99");
	$("#rg").mask("9.999.999");
        $("#data").mask("99/99/9999"); //exemplo para data
	$("#cep").mask("99999-999"); //exemplo para cep
        $("#telefone").mask("(99) 9999-9999"); //exemplo para telefone com DDD + 8 digitos
        $("#celular").mask("(99) 99999-9999"); //exemplo para celular com DDD + 9 digitos
        $("#cnpj").mask("99.999.999/9999-99"); //exemplo para cnpj
	});
});
