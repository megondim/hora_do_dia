function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas...`
    if(hora >= 5 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#e7c144'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#e77244'
    } else{
        img.src = 'noite.jpg'
        document.body.style.background = '#4532f1'
    }
}

