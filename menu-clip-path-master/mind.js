window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/1;
    
    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover 10s ease-out'
    }
    
}
)
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('texto');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2;
    
    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover2 3s ease-out'
    }
    
}
)
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('texto2');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/1;
    
    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover3 3s ease-out'
    }
    
}
)