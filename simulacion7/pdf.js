function generarPDF(){

    const pdf =
    document.getElementById("pdf");


    if(!datasetActual){

        agregarBot(
        "⚠️ Primero debes crear una base de datos."
        );

        return;

    }


    pdf.innerHTML=`

    <div class="generando">

    📄 Generando informe ejecutivo...

    <br><br>


    <div class="progress">

        <div id="barraPDF"></div>

    </div>


    <p id="pasoPDF">

    Analizando información...

    </p>


    </div>

    `;



    let pasos=[

    "Analizando indicadores...",

    "Construyendo resumen descriptivo...",

    "Generando conclusiones...",

    "Preparando documento PDF..."

    ];


    let i=0;


    const proceso=setInterval(()=>{


        document.getElementById("pasoPDF")
        .innerHTML=pasos[i];


        document.getElementById("barraPDF")
        .style.width=((i+1)*25)+"%";


        i++;


        if(i===pasos.length){


            clearInterval(proceso);


            mostrarBotonPDF();


        }


    },700);


}



function mostrarBotonPDF(){


const pdf =
document.getElementById("pdf");



pdf.innerHTML=`

<div class="reporte">


<h3>
📊 Informe Ejecutivo Generado
</h3>


<p>

<strong>Fuente:</strong>

${datasetActual.titulo}

</p>


<p>

<strong>Registros analizados:</strong>

${datasetActual.datos.length}

</p>


<p>

<strong>Análisis descriptivo:</strong>

La información fue procesada identificando comportamiento general,
distribución de registros y variables relevantes.

</p>



<p>

<strong>Análisis prescriptivo:</strong>

Se recomienda fortalecer la gestión basada en datos,
automatización de seguimiento y toma de decisiones.

</p>


<button onclick="descargarPDF()">

📄 Descargar PDF

</button>


</div>

`;



agregarBot(

"📄 Informe ejecutivo listo.<br><br>Puedes descargar el documento."

);


escribir("Informe listo.");

}



function descargarPDF(){


alert(
"Simulación: PDF ejecutivo generado correctamente."
);


}


function generarResumen(datos){

    datasetActual = {
        titulo: datos.nombre,
        datos: datos.datos
    };


    const pdf =
    document.getElementById("pdf");


    pdf.innerHTML=`

    <div class="reporte">

    <h3>
    📊 Informe Ejecutivo Generado
    </h3>


    <p>

    <strong>Fuente:</strong>

    ${datos.nombre}

    </p>


    <p>

    <strong>Registros analizados:</strong>

    ${datos.datos.length}

    </p>


    <p>

    <strong>Análisis descriptivo:</strong>

    La información fue procesada identificando variables,
    distribución general y características relevantes
    de la fuente analizada.

    </p>



    <p>

    <strong>Análisis prescriptivo:</strong>

    Regi Analytics recomienda profundizar el análisis
    mediante segmentación, indicadores y seguimiento
    continuo para apoyar decisiones estratégicas.

    </p>


    <button onclick="generarPDF()">

    📄 Generar PDF Ejecutivo

    </button>


    </div>

    `;


    agregarBot(
    "📄 Resumen ejecutivo generado correctamente."
    );


}