function verificarReserva() {
    
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var data = document.getElementById('data').value;

    var telefoneNumerico = telefone.replace(/\D/g, '');

    if (telefoneNumerico.length === 10 || telefoneNumerico.length === 11) {
        
        var dadosReserva = document.getElementById('dadosReserva');
        dadosReserva.textContent = `Nome: ${nome}, Telefone: ${telefone}, Data da Reserva: ${data}`;

        
        document.getElementById('reservaForm').reset();
    } else {
        
        alert("Digite um telefone válido com 10 ou 11 dígitos.");
    }
}
