function encriptar(){
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();

    var txtCifrado = texto.replace(/e/img, "enter");
    var txtCifrado = txtCifrado.replace(/i/img, "imes");
    var txtCifrado = txtCifrado.replace(/a/img, "ai");
    var txtCifrado = txtCifrado.replace(/o/img, "ober");
    var txtCifrado = txtCifrado.replace(/u/img, "ufat");

        document.getElementById("gifMario").style.display = "none";
        document.getElementById("textoNoEncontrado").style.display = "none";
        document.getElementById("copiar").style.display = "inherit"
        document.getElementById("ingreseTexto2").innerHTML = txtCifrado;
        document.getElementById("copiar").style.display = "show";

    const caracteresValidos = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;

    if(caracteresValidos.test(texto)){ 
        let textoEncriptado = encriptacion(texto);
       
        document.getElementById("result").innerHTML = textoEncriptado;
        document.getElementById("text").value = "";
    }else{
        alert("Tu texto no es valido, escribelo en minusculas y sin acentos.")
    }
   
}

function desencriptar(){
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/img, "e");
    var txtCifrado = txtCifrado.replace(/imes/img, "i");
    var txtCifrado = txtCifrado.replace(/ai/img, "a");
    var txtCifrado = txtCifrado.replace(/ober/img, "o");
    var txtCifrado = txtCifrado.replace(/ufat/img, "u");

    document.getElementById("gifMario").style.display = "none";
    document.getElementById("textoNoEncontrado").style.display = "none";
    document.getElementById("ingreseTexto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"

      const caracteresValidos = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;
    
    if(caracteresValidos.test(texto)){ 
        let textoDesencriptado = desencriptado(texto);
        document.getElementById("result").innerHTML = textoDesencriptado;
        document.getElementById("text").value = "";
    }else{
        alert("Tu texto no es valido, escribelo en minusculas y sin acentos.")
    }
}

function copy(){

    var contenido = document.querySelector("#ingreseTexto2").textContent;
    navigator.clipboard.writeText(contenido);
    alert("copiado!")
}