function procesarConsulta(texto){

    texto = texto.toLowerCase();

    agregarUsuario(texto);

    escribir("🧠 Analizando solicitud...");

    setTimeout(()=>{

        if(texto.includes("comerciante")){

            escribir("📂 Generando base de comerciantes...");

            mostrarDataset("comerciantes");

            return;

        }

        if(texto.includes("ventas")){

            escribir("📂 Generando base de ventas...");

            mostrarDataset("ventas");

            return;

        }

        if(
            texto.includes("reporte") ||
            texto.includes("dashboard") ||
            texto.includes("power bi")
        ){

            escribir("📊 Construyendo dashboard ejecutivo...");

            generarDashboard();

            return;

        }

        if(
            texto.includes("pdf")
        ){

            escribir("📄 Generando PDF ejecutivo...");

            generarPDF();

            return;

        }

        agregarBot("No entendí la solicitud. Puedes pedirme una base de datos, un dashboard o un PDF.");

        escribir("Sistema listo.");

    },900);

}