function carregar(){

    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes() // Lembrando nunca esquecer de colocar antes do getHours() o (.ponto) e esse comando de baixo  recebe o de cima//
    
    msg.innerHTML = `Agora são exatamente ${hora} horas e ${minute} minutos `
     
     if(hora >= 0 && hora < 12){
        //BOM DIA//
        img.src = '001-Manhã.png'
        document.body.style.background = '#ececec' // Esses codigos de cores é dentro de uma string//
     }else if(hora >=12 && hora <= 18){
        //BOA TARDE//
        img.src = '002-Tarde.png'
        document.body.style.background = '#de5e02'
     }else{
        //BOA NOITE//
        img.src = '003-Noite.png'
        msg.innerHTML += `o`
        document.body.style.background = '#000000'
     }
}

/*eu adicionei uma linha no código para que os minutos também possam aparecer 
var minute = data.getMinutes()
e no msg complementei, ficando assim:
msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos`*/


/*No JS quando ele cria  a variável "IMG" e coloca ela no "IF" como img.src =" ...", para mudar a foto ele ta utilizando a variável e não a tag IMG.
isso e um  problema, deve ter muitos que estão  pensando que aquilo era a TAG <img>
mas não, era a variável.
ele devia ter utilizado outro nome.
no JS não precisa botar a tag, bota a variável e chama com src.


fiz assim:
var foto = document.getElementByiD('image")
...........
............

if (.............) {

img.src = " manha.npg"
}

e o img e var e não tag

deu certo quando botei

fotos.src= "manha.npg*/