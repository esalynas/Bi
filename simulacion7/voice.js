let reconocimiento = null;

function iniciarVoz(){

    const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

    if(!SpeechRecognition){

        escribir("❌ Este navegador no soporta reconocimiento de voz.");

        return;

    }

    reconocimiento = new SpeechRecognition();

    reconocimiento.lang = "es-CO";

    reconocimiento.continuous = false;

    reconocimiento.interimResults = false;

    reconocimiento.maxAlternatives = 1;

    reconocimiento.onstart = ()=>{

        escribir("🎙️ Escuchando...");

    };

    reconocimiento.onresult = (e)=>{

        const texto =
        e.results[0][0].transcript;

        procesarConsulta(texto);

    };

    reconocimiento.onerror = (e)=>{

        escribir("❌ " + e.error);

    };

    reconocimiento.onend = ()=>{

        escribir("Sistema listo.");

    };

}

function escuchar(){

    if(!reconocimiento){

        iniciarVoz();

    }

    try{

        reconocimiento.start();

    }catch(e){}

}