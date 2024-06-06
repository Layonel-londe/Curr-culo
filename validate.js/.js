document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        

        // Create an object to store form data
        const formData = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        };
        console.log(formData);
        form.reset();
    });
});
