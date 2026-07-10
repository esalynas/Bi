 function analizarSolicitud(texto){

texto=texto.toLowerCase();

if(texto.includes("comerciante")){

return "comerciantes";

}

if(texto.includes("venta")){

return "ventas";

}

if(texto.includes("matricula") || texto.includes("matrícula")){

return "matriculas";

}

return null;

}

function ejecutarIA(texto){

const base = analizarSolicitud(texto);

if(!base){

agregarBot(
"🤖 No identifiqué la fuente de datos solicitada."
);

return;

}

const datos=basesDatos[base];

agregarBot(

`
🧠 Analizando solicitud...

<br><br>

📂 Fuente:
<b>${datos.nombre}</b>

<br><br>

📊 Registros procesados:
<b>${datos.datos.length}</b>

<br><br>

⚙️ Construyendo modelo analítico...

`

);

mostrarTabla(datos);

crearDashboard(datos);

generarResumen(datos);

}