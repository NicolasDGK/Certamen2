let nombreCompleto:any=document.getElementById("nombrecompleto");
let rut:any=document.getElementById("rut");
let edad:any=document.getElementById("edad");
let campos:any=document.getElementById("campos");


function ValidarRut(valor:any){
    var tmp=valor.split('-');
    let digito=tmp[1];
    let rut=tmp[0];
    if(digito=='K') digito='k';
    var M=0,S=1;
    for(;rut;rut=Math.floor(rut/10))
      S=(S+rut%10*(9-M++%6))%11;
      console.log(S?S-1:'k');

   return S?S-1:'k';
}

function ValidarCheckbox(){
    let checkboxes:any = document.getElementsByName("skill");  
    let numberOfCheckedItems:number = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems >= 1)  
    {  
        return true;  
    } 

    return false;
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            if(nombreCompleto.value=="") {
                campos.children[0].getElementsByClassName("invalid-feedback")[0].innerHTML="Campo requerido";
            }
            if(rut.value==""){
                campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML="Campo requerido";
            }

            if(ValidarRut(rut.value)>1){
                campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML="Rut no válido";
            }

            if(edad.value==""){
                campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML="Campo requerido";
            }
            if((<HTMLInputElement>document.getElementById("region")).value=="Seleccione"){
                alert("Debes escoger una region")
            }

            if(!ValidarCheckbox()){
                let element:any = document.getElementById("checkbox1");
                element.setCustomValidity({'valueMissing':true});
                alert("Escoge una habilidad")
                
            }else{
                
                let element:any = document.getElementById("checkbox1");
                element.setCustomValidity("");
  
            }
            

            event.preventDefault()
            event.stopPropagation()
          }

  
          form.classList.add('was-validated')
        }, false)
      })
  })()