function toqueSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]


    tecla.onclick = function (){
        
        toqueSom(`#som_${instrumento}`)
    }
    
    tecla.onkeydown = function (event){

        console.log(event.code)

        if(event.code == 'Space ' || event.code == 'Enter'){
            tecla.classList.add('ativa')
            tecla.classList.remove('ativa')
        // tecla.classList.toggle('ativa')
        }
        
    }
   
}

