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
🧠 Regi Analytics AI

<br><br>

Solicitud recibida:

<br>

<b>${texto}</b>

<br><br>

━━━━━━━━━━━━━━

<br>

📂 Fuente identificada:

<br>

<b>${datos.nombre}</b>

<br><br>


🧩 Campos analizados:

<br>

${Object.keys(datos.datos[0])
.map(c=>"✓ "+c+"<br>")
.join("")}


<br>

📊 Registros procesados:

<br>

<b>${datos.datos.length.toLocaleString()}</b>


<br><br>

⚙️ Construyendo modelo analítico...

<br><br>


<div class="typing">

<span></span>
<span></span>
<span></span>

</div>

`

);



setTimeout(()=>{


mostrarTabla(datos);

crearDashboard(datos);

generarResumen(datos);


},1800);



}