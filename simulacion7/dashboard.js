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