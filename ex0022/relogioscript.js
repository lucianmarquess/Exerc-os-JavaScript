function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    var second = data.getSeconds()
    

    msg.innerHTML=`São extamente ${hora} Horas ${minute} minutos e ${second} segundos`
    
   
    if(hora >=0 && hora <7){
        
        imagem.src = "imagemmadrugadatemaescuro.png"
        document.body.style.background = '#2c6c8b'
        
    }else if(hora >=7 && hora <12){
       imagem.src = "imagemmanhatemaescuro.png"
       document.body.style.background = '#efece0'
    }else if(hora >=12 && hora <18){
    
        imagem.src ="imagemtardetemaescuro.png"
        document.body.style.background = '#bf7d75'
    }else{
        imagem.src= "imagemnoitetemaescuro.png"
       document.body.style.background = '#000000'
    }
}
function atualizar(){
    // Atualiza o relógio a cada segundo (1000 ms)//
    setInterval(carregar,1000);

    
}
// Chama a função atualizar para iniciar o ciclo de atualização//
atualizar()
