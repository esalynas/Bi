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