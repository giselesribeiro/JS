function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data= new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    

       if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'manha250px.jpg'
    document.body.style.background = '#6f7b53'

       } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'imagens/tarde250px.jpg'
    document.body.style.background = '#96a2b2'
       } else {
    //BOA NOITE!
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#1c1e1d'
       }
   }