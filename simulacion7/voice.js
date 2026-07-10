let reconocimiento;


const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;


if(SpeechRecognition){


reconocimiento = new SpeechRecognition();


reconocimiento.lang = "es-CO";

reconocimiento.continuous = false;

reconocimiento.interimResults = false;

reconocimiento.maxAlternatives = 1;



reconocimiento.onstart = ()=>{

escribir("🎙️ Escuchando...");

};



reconocimiento.onresult = (event)=>{


const texto =
event.results[0][0].transcript;


procesarMensaje(texto);


};



reconocimiento.onerror = (error)=>{


escribir("❌ Error micrófono: "+error.error);


};



reconocimiento.onend = ()=>{


escribir("Sistema listo.");


};


}



document
.getElementById("micButton")
.onclick=function(){


speechSynthesis.cancel();


if(reconocimiento){


try{

reconocimiento.start();

}

catch(e){

console.log(e);

}


}else{


escribir(
"Este navegador no soporta reconocimiento de voz"
);


}


};