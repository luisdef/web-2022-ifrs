const url = "https://luisdef-stoic-api.herokuapp.com/api/quote/random";

fetch(url)
.then(response => response.json())
.then(data => {
    let frase = document.querySelector('.text');
    frase.innerHTML = data.frase;

    let autor = document.querySelector('.author');
    autor.innerHTML = data.autor;
});
