"use strict";
var form1 = document.getElementById("form1");
var region = document.getElementById("region");
var comuna = document.getElementById("comuna");
var regiones = ['Valparaiso', 'Santiago'];
var comunas = ['Villa Alemana', 'Quilpue', 'Viña', 'Puente Alto', 'La Florida', 'Maipú'];
function MostrarLugares(arreglo, lugar) {
    var elementos = '<option selected disabled>Seleccione</option>';
    for (var i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] + '">' + arreglo[i] + '</option>';
    }
    lugar.innerHTML = elementos;
}
MostrarLugares(regiones, region);
function recortar(array, inicio, fin, lugar) {
    var recortar = array.slice(inicio, fin);
    MostrarLugares(recortar, lugar);
}
region === null || region === void 0 ? void 0 : region.addEventListener('change', function () {
    var Regionvalor = document.getElementById("region").value;
    switch (Regionvalor) {
        case 'Valparaiso':
            recortar(comunas, 0, 3, comuna);
            break;
        case 'Santiago':
            recortar(comunas, 3, 6, comuna);
            break;
    }
});
function LimpiarDatos() {
    var reset = document.getElementById("limpiar");
    reset.type = "reset";
}
(function () {
    var campos = document.getElementById("campos");
    var form1 = document.getElementById("form1");
    var region = document.getElementById("region");
    var comuna = document.getElementById("comuna");
    var reset = document.getElementById("limpiar");
    var nombreCompleto = document.getElementById("nombrecompleto");
    var edad = document.getElementById("edad");
    var telefono = document.getElementById("telefono");
    var rut = document.getElementById("rut");
    var direccion = document.getElementById("direccion");
    telefono.maxLength = "9";
    rut.pattern = "^[0-9]{8}-[0-9Kk]{1}$";
    console.log(nombreCompleto.value);
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
    reset.addEventListener("click", LimpiarDatos);
    // Loop over them and prevent submission
})();
