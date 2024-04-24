document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        // You can perform validation here if needed

        // Create an object to store form data
        const formData = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        };

        // You can perform additional processing here, like sending the data to a server

        // For demonstration purposes, log form data to the console
        console.log(formData);

        // Optionally, you can clear the form fields after submission
        form.reset();
    });
});
