function mostra(nome){
	//nome.value;
	//console.log(nome.id);
	var id = "#"+nome.id+"";
	if(!$(id).is(':checked'))
	{
		var label = "label[for="+nome.id+"]";
		$(label).remove();
	}else // checkbox selecionado
	{
		$('#mostraEmail').append("<label for="+nome.id+">"+nome.value + ";</label>");
	}	
}

function mostrarProfessores(form) {
	if($("#combo").val() == "professor")
	{
		$("#chec").css("display","block");
	}else{
		$("#chec").css("display","none");
	}

	switch($("#combo").val())
	{
		case "professor" : $("#chec").css("display","block"); $("#checFase").css("display","none"); $("#checMateria").css("display","none"); $("#checIndividual").css("display","none"); break;
		case "fase" : $("#chec").css("display","none"); $("#checFase").css("display","block"); $("#checMateria").css("display","none"); $("#checIndividual").css("display","none"); break;
		case "materia": $("#chec").css("display","none"); $("#checFase").css("display","none"); $("#checMateria").css("display","block"); $("#checIndividual").css("display","none"); break;
		case "individual": $("#chec").css("display","none"); $("#checFase").css("display","none"); $("#checMateria").css("display","none"); $("#checIndividual").css("display","block"); break;
		default: $("#chec").css("display","none"); $("#checFase").css("display","none"); $("#checMateria").css("display","none"); $("#checIndividual").css("display","none"); break;
	}
}

function mostrarNota(form) {
	
	console.log(form.id);
	switch(form.id)
	{
		case "btNotas" : $("#alunos").css("display","block"); $("#frequencia").css("display","none");  break;
		case "btFre" : $("#alunos").css("display","none"); $("#frequencia").css("display","block"); break;
		
		default: $("#alunos").css("display","none"); $("#frequencia").css("display","none"); break;
	}
}


function mostrarPen(form) {
	
	console.log(form.id);
	switch(form.id)
	{
		case "btPen" : $("#professor").css("display","block"); $("#material").css("display","none");  break;
		case "btMat" : $("#professor").css("display","none"); $("#material").css("display","block"); break;
		
		default: $("#professor").css("display","none"); $("#material").css("display","none"); break;
	}
}


