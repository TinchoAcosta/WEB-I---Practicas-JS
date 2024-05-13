function splita(){
    let p = prompt("Completar con una cadena","Aquí")
    let cant, primer, ultima, inverso, az, za;
    if (p != null) {
        let arreglo = p.split(" ");
        cant = document.getElementById("cant");
        primer = document.getElementById("primera");
        ultima = document.getElementById("ultima");
        inverso = document.getElementById("inverso");
        az = document.getElementById("a-z");
        za = document.getElementById("z-a");
        cant.innerHTML = arreglo.length;
        primer.innerHTML = arreglo[0];
        ultima.innerHTML = arreglo[arreglo.length-1];
        arreglo.reverse();
        inverso.innerHTML = arreglo;
        arreglo.sort();
        az.innerHTML = arreglo;
        arreglo.reverse();
        za.innerHTML = arreglo;
    }
}