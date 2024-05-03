function calculoDias(){
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    window.alert(nombre + " ha vivido unos " + edad*365 + " días.")
}