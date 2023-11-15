function esconderFoto(){
    const divFoto = document.getElementById('foto');
    if(divFoto.style.visibility == 'visible'){
        divFoto.style.visibility = 'hidden';
    }
    else{
        divFoto.style.visibility = 'visible';
    }
}

function formatarTexto(){
    const divTexto = document.getElementById('sobre');
    const input = document.getElementById('formato');
    divTexto.style.textAlign = input.value;
}

function alterarCor(){
    const footer = document.getElementById('footer');
    const header = document.getElementById('header');
    const input = document.getElementById('cor');
    if(input.value == 'white'){
        footer.style.backgroundColor = 'white';
        header.style.backgroundColor = 'white';
        footer.style.color = 'black';
        header.style.color = 'black';
    }
    else if(input.value == 'black'){
        footer.style.backgroundColor = 'white';
        header.style.backgroundColor = 'white';
        footer.style.color = 'black';
        header.style.color = 'black';
    }
    else{
        footer.style.backgroundColor = input.value;
        header.style.backgroundColor = input.value;
    }

    
}

function alterarFonte(){
    const divTexto = document.getElementById('sobre');
    const input = document.getElementById('font');
    divTexto.style.fontFamily = input.value;
}

function modo(){
    const sec = document.getElementById("conteudo");
    if(sec.style.backgroundColor == 'black'){
        sec.style.backgroundColor = 'white';
        sec.style.color = 'black';
    }
    else{
        sec.style.backgroundColor = 'black';
        sec.style.color = 'white';
    }

    
}