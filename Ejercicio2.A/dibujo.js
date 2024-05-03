function dibujo(){
    let alto = parseInt(document.getElementById('alto').value)
    let ancho = parseInt(document.getElementById('ancho').value)

    for (let index = 0; index < alto; index++) {
        for(let index2 = 0; index2 < ancho; index2++) {
            document.write("* ")
        }                
        document.write(' <br> ')
    }
}