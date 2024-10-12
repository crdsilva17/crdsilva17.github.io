// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Manipulação do formulário de contato
    const form = document.getElementById('form-contato');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do formulário

            // Aqui será adiconado a lógica para enviar os dados para o servidor
            // usando fetch() para uma API

            // Exibe uma mensagem de sucesso
            const mensagemSucesso = document.getElementById('mensagem-sucesso');
            if (mensagemSucesso) {
                mensagemSucesso.innerHTML = "Sua mensagem foi enviada com sucesso!"
                // Reseta o formulário
                form.reset();
            }
        });
    }
});
