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


function scrollProgress(){
    var qtd = (document.getElementById('habilidades-content').children.length)/2;
    for(var i = 0; i < qtd; i++){
        progressBar();
        function progressBar(){
            var tam = (document.getElementsByClassName("porcentagem")[i].innerHTML)*635/100;
            var elemento = document.getElementsByClassName("barra")[i];
            var width = 1;
            var id = setInterval(frame, 0);
            function frame(){
                if (width >= tam) {
                    clearInterval(id);
                } else {
                    width++;
                    elemento.style.width = `${width}px`;
                    document.getElementsByClassName("porcentagem")[i].style.opacity = "1";
                }
            }
        }
    }
    
}

scrollProgress();



