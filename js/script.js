function encriptar (){
    var texto = document.querySelector("#textoEntrada").value;
    var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#textoSalida").value = textoEncriptado;
}

function desencriptar (){
    var textoEncriptado = document.querySelector("#textoEntrada").value;
    var texto = textoEncriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#textoSalida").value = texto;
}


function copiar(){
    var texto = document.querySelector("#textoSalida").value;
    document.querySelector("#textoEntrada").value = texto;___
}


function codificar(){
    encriptar();
    document.getElementById("panelImg").style.display = "none";
    document.querySelector(".panelTexto").style.display = "flex";
}