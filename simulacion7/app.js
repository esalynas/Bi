console.clear();

const estado = document.getElementById("estado");
const chat = document.getElementById("chatBody");

function agregarBot(texto){

const div=document.createElement("div");
div.className="bot";
div.innerHTML=texto;
chat.appendChild(div);
chat.scrollTop=chat.scrollHeight;

}

function agregarUsuario(texto){

const div=document.createElement("div");
div.className="user";
div.innerHTML=texto;
chat.appendChild(div);
chat.scrollTop=chat.scrollHeight;

}

function escribir(texto){

estado.innerHTML=texto;

}

agregarBot("🚀 Regi Analytics AI iniciado correctamente.");

escribir("Sistema listo.");


// =================================
// MOTOR DE COMANDOS REGI ANALYTICS
// =================================


function procesarMensaje(texto){


agregarUsuario(texto);


escribir("🤖 Analizando solicitud...");


setTimeout(()=>{


ejecutarIA(texto);


escribir("✅ Consulta procesada.");


},1000);


}


// Simulación de entrada de texto
// luego la conectaremos al micrófono

document.addEventListener("keydown",function(e){


if(e.key==="Enter"){


const entrada=prompt("Escribe una solicitud para Regi Analytics");


if(entrada){

procesarMensaje(entrada);

}


}


});


function enviarSolicitud(){

const entrada=document.getElementById("entrada");

if(entrada.value.trim()){

procesarMensaje(entrada.value);

entrada.value="";

}

}