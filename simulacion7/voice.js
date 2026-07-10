document.addEventListener("DOMContentLoaded",()=>{


const mic=document.getElementById("micButton");


const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;


if(!mic){

console.log("Botón micrófono no encontrado");

return;

}


if(!SpeechRecognition){

escribir("❌ Navegador sin reconocimiento de voz");

mic.disabled=true;

return;

}



const reconocimiento=new SpeechRecognition();


reconocimiento.lang="es-CO";

reconocimiento.continuous=false;

reconocimiento.interimResults=false;

reconocimiento.maxAlternatives=1;



mic.onclick=()=>{


speechSynthesis.cancel();


escribir("🎙️ Escuchando...");


try{

reconocimiento.start();

}

catch(e){

console.log("Reconocimiento activo");

}


};



reconocimiento.onresult=(event)=>{


const texto=
event.results[0][0].transcript;


console.log("Texto capturado:",texto);


procesarMensaje(texto);


};



reconocimiento.onerror=(event)=>{


escribir(
"❌ Error micrófono: "+event.error
);


};



reconocimiento.onend=()=>{


escribir(
"Sistema listo."
);


};


});