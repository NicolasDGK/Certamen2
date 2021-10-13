
let form1:any=document.getElementById("form1");

let region = document.getElementById("region");
let comuna = document.getElementById("comuna");

let regiones = ['Valparaiso','Santiago']
let comunas = ['Villa Alemana', 'Quilpue', 'Viña', 'Puente Alto', 'La Florida', 'Maipú']


function MostrarLugares(arreglo, lugar){
    let elementos = '<option selected disabled>Seleccione</option>'
    for(let i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] +'">' + arreglo[i] +'</option>'
    }
    lugar.innerHTML = elementos

}

MostrarLugares(regiones, region)

function recortar(array, inicio, fin, lugar) {
    let recortar = array.slice(inicio, fin)
    MostrarLugares(recortar, lugar)
}

region?.addEventListener('change', function(){
    let Regionvalor = (<HTMLInputElement>document.getElementById("region")).value;

    switch(Regionvalor) {
        case 'Valparaiso':
            recortar(comunas, 0, 3, comuna)
        break
        case 'Santiago':
            recortar(comunas, 3, 6, comuna)
        break
    }

})



function LimpiarDatos(){
    let reset:any=document.getElementById("limpiar");
    reset.type="reset";
    
}


(function () {

    let campos:any=document.getElementById("campos");
    let form1:any=document.getElementById("form1");
    let region = document.getElementById("region");
    let comuna = document.getElementById("comuna");
    let reset:any=document.getElementById("limpiar");
    let nombreCompleto:any=document.getElementById("nombrecompleto");
    let edad:any=document.getElementById("edad");
    let telefono:any=document.getElementById("telefono");
    let rut:any=document.getElementById("rut");
    let direccion:any=document.getElementById("direccion");

    telefono.maxLength="9";

    rut.pattern="^[0-9]{8}-[0-9Kk]{1}$";
    
    console.log(nombreCompleto.value);


    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')
    
    reset.addEventListener("click",LimpiarDatos);

    // Loop over them and prevent submission
    
  })()

