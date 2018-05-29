function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        if(letra == ' '){
            letra = '<br>';
        }if(letra == "'"){
            letra = "<span>'</span>";
        }if(letra == "."){
            letra = "<span>.</span>";
        }
            setTimeout(() => elemento.innerHTML += letra, 800+(180 * i));
        });
    }

const titulo = document.querySelector('h1');
typeWriter(titulo);

setTimeout(() => document.querySelector('h5').classList.add("animateSurgir"), 3330);
