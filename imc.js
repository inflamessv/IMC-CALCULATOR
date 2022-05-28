function ocultadoBarras() {
    document.getElementById('barra_pesoInferior').style.visibility= "hidden";
    document.getElementById('barra_pesoNormal').style.visibility= "hidden";
    document.getElementById('barra_pesoSuperior').style.visibility= "hidden";
    document.getElementById('barra_pesoObesidad').style.visibility= "hidden";
}

function calcular() {
    
    let peso= document.getElementById('peso');
    let altura= document.getElementById('altura');
    let imc= document.getElementById('imc');
    let lectura= document.getElementById('lectura');
    let resultImc= 0;

    ocultadoBarras();

    if(peso.value != null && altura.value != null){
        resultImc= (peso.value / (altura.value* altura.value));

        imc.innerHTML= resultImc;

        if(resultImc < 18.5) {
            lectura.innerHTML= 'Peso inferior al normal';
            document.getElementById('barra_pesoInferior').style.visibility= 'visible';
        }else if(resultImc>=18.5 && resultImc<=24.9) {
            lectura.innerHTML= 'Peso normal';
            document.getElementById('barra_pesoNormal').style.visibility= 'visible';
        }else if(resultImc>=25 && resultImc<=29.9) {
            lectura.innerHTML= 'Peso superior al normal';
            document.getElementById('barra_pesoSuperior').style.visibility= 'visible';
        }else if(resultImc>30) {
            lectura.innerHTML= 'Obesidad';
            document.getElementById('barra_pesoObesidad').style.visibility= 'visible';
        }

    }else{
        alert('Debes ingresar peso y altura!');
    }

}