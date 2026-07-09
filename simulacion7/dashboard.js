let datasetActual = null;


function mostrarDataset(nombre){

    datasetActual = DATASETS[nombre];

    const tabla = document.getElementById("tabla");


    tabla.innerHTML = `

    <div class="generando">

        🧠 Analizando información...

        <br><br>

        <div class="progress">

            <div id="barra"></div>

        </div>

        <p id="proceso">

        Inicializando consulta...

        </p>

    </div>

    `;


    let pasos = [

        "Conectando fuente de datos...",

        "Validando estructura...",

        "Procesando registros...",

        "Construyendo tabla..."

    ];


    let i=0;


    const intervalo=setInterval(()=>{


        document.getElementById("proceso").innerHTML =
        pasos[i];


        document.getElementById("barra").style.width =
        ((i+1)*25)+"%";


        i++;


        if(i===pasos.length){


            clearInterval(intervalo);


            construirTabla();


        }


    },700);


}



function construirTabla(){


const tabla=document.getElementById("tabla");


let html=`


<h3>

${datasetActual.titulo}

</h3>


<table>


<tr>

`;



datasetActual.columnas.forEach(col=>{

html+=`

<th>${col}</th>

`;

});


html+=`</tr>`;



datasetActual.datos.forEach(fila=>{


html+=`<tr>`;


fila.forEach(valor=>{


html+=`

<td>${valor}</td>

`;


});


html+=`</tr>`;


});


html+=`

</table>

`;



tabla.innerHTML=html;


agregarBot(
"✅ Base generada correctamente.<br><br>Puedes solicitar un dashboard o un informe ejecutivo."
);


escribir("Sistema listo.");

}

function generarDashboard(){

    const dashboard =
    document.getElementById("dashboard");


    if(!datasetActual){

        agregarBot(
        "⚠️ Primero debes crear una base de datos."
        );

        return;

    }


    dashboard.innerHTML=`

    <div class="generando">

        📊 Construyendo dashboard...

        <br><br>


        <div class="progress">

            <div id="barraDash"></div>

        </div>


        <p id="pasoDash">

        Calculando indicadores...

        </p>


    </div>

    `;


    let pasos=[

    "Analizando variables...",

    "Calculando KPIs...",

    "Generando visualizaciones...",

    "Dashboard listo ✔"

    ];


    let i=0;


    const proceso=setInterval(()=>{


        document.getElementById("pasoDash")
        .innerHTML=pasos[i];


        document.getElementById("barraDash")
        .style.width=((i+1)*25)+"%";


        i++;


        if(i===pasos.length){


            clearInterval(proceso);


            pintarDashboard();


        }


    },700);



}



function pintarDashboard(){


const dashboard =
document.getElementById("dashboard");



let html=`


<div class="kpis">


<div class="kpi">

<h3>Total registros</h3>

<strong>

${datasetActual.datos.length}

</strong>

</div>



<div class="kpi">

<h3>Fuente</h3>

<strong>

${datasetActual.titulo}

</strong>

</div>


</div>



<div class="chart">

<h3>Comportamiento de datos</h3>


`;



datasetActual.datos.forEach((fila,index)=>{


let valor =
fila[fila.length-1];


html+=`

<div class="bar">

<span>

${index+1}

</span>


<div style="width:${valor}%">

</div>


</div>


`;


});


html+=`

</div>


<p class="insight">

💡 Insight generado:
La información fue analizada para identificar patrones operativos y oportunidades de mejora.

</p>


`;



dashboard.innerHTML=html;


agregarBot(
"📊 Dashboard generado correctamente.<br><br>Puedes solicitar un informe ejecutivo en PDF."
);


escribir("Dashboard listo.");

}

