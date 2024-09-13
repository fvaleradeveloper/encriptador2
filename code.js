// comienzo de codigo javascript

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Oculta el textarea al cargar la página
    textoSalida.style.display = 'none';
    btnCopiar.style.display = 'none';
  }); 

function copiar() {
  
    //copiar de textarea fuente
    var copia = document.getElementById('textoSalida').value;
    document.getElementById('textoSalida').value = "";

    //pegar al textarea de destino
    document.getElementById('textoEntrada').value = copia;

}   

function encriptar() {
    //desaparacer la imagen y texto
    document.getElementById("imagen").style.display = "none";
    document.getElementById("salida").style.display = "none";

    //asegurar solo minusculas
    const texto = textoEntrada.value.toLowerCase();
    //alert(texto);

    //conectar boton a la función y llena variable
    var valorTextArea = texto;
    //alert(valorTextArea);

    //aplicar la llave de encriptación
    var textoCifrado = valorTextArea
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    //alert(textoCifrado);

    //reemplazar el texto en el textarea
    
    if(textoCifrado.search("é")) {textoCifrado = textoCifrado.replace(/é/gi, "enter")}
    //if(textoCifrado.search("E")) {textoCifrado = textoCifrado.replace(/E/gi, "enter")}
    //if(textoCifrado.search("É")) {textoCifrado = textoCifrado.replace(/É/gi, "enter")}
    if(textoCifrado.search("í")) {textoCifrado = textoCifrado.replace(/í/gi, "ines")}
    //if(textoCifrado.search("I")) {textoCifrado = textoCifrado.replace(/I/gi, "ines")}
    //if(textoCifrado.search("Í")) {textoCifrado = textoCifrado.replace(/Í/gi, "ines")}
    if(textoCifrado.search("á")) {textoCifrado = textoCifrado.replace(/á/gi, "ai")}
    //if(textoCifrado.search("A")) {textoCifrado = textoCifrado.replace(/A/gi, "ai")}
    //if(textoCifrado.search("Á")) {textoCifrado = textoCifrado.replace(/Á/gi, "ai")}
    if(textoCifrado.search("ó")) {textoCifrado = textoCifrado.replace(/ó/gi, "ober")}
    //if(textoCifrado.search("O")) {textoCifrado = textoCifrado.replace(/O/gi, "ober")}
    //if(textoCifrado.search("Ó")) {textoCifrado = textoCifrado.replace(/Ó/gi, "ober")}
    if(textoCifrado.search("ú")) {textoCifrado = textoCifrado.replace(/ú/gi, "ufat")}
    //if(textoCifrado.search("U")) {textoCifrado = textoCifrado.replace(/U/gi, "ufat")}
    //if(textoCifrado.search("Ú")) {textoCifrado = textoCifrado.replace(/Ú/gi, "ufat")}
    //alert(textoCifrado); 

    //muestro rtesultado en campo de texto resultado
    textoSalida.style.display = 'block';
    document.getElementById("textoSalida").value = textoCifrado;
    btnCopiar.style.display = 'block';
}

function desencriptar() {
    //asegurar solo minusculas
    const texto = textoEntrada.value.toLowerCase();
    //aplicar la llave de encriptación
    var valorTextArea = document.getElementById("textoEntrada").value;
    
    var textoCifrado = valorTextArea
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    
    //desaparacer la imagen y texto
    document.getElementById("imagen").style.display = "none";

    //muestro rtesultado en campo de texto resultado
    document.getElementById("textoSalida").value = textoCifrado;
    document.getElementById("textoEntrada").value = "";
}

