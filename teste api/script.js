document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke');
    const jokeButton = document.getElementById('get-joke');

    jokeButton.addEventListener('click', () => {
        fetch('https://v2.jokeapi.dev/joke/Any?lang=pt')
            .then(response => response.json())
            .then(data => {
                if (data.type === 'single') {
                    jokeContainer.innerHTML = `<p>${data.joke}</p>`;
                } else if (data.type === 'twopart') {
                    jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
                }
            })
            .catch(error => {
                jokeContainer.innerHTML = `<p>Erro ao buscar piada. Tente novamente.</p>`;
                console.error('Erro ao buscar piada:', error);
            });
    });
});
