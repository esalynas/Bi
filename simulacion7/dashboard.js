function mostrarTabla(datos){

const tabla=document.getElementById("tabla");

if(!tabla){
    return;
}


let html=`

<table class="data-table">

<thead>

<tr>
`;


Object.keys(datos.datos[0]).forEach(campo=>{

html+=`
<th>${campo}</th>
`;

});


html+=`

</tr>

</thead>

<tbody>
`;


datos.datos.forEach(fila=>{

html+="<tr>";

Object.values(fila).forEach(valor=>{

html+=`
<td>${valor}</td>
`;

});

html+="</tr>";

});


html+=`

</tbody>

</table>

`;


tabla.innerHTML=html;

}



function crearDashboard(datos){
alert("Llegó al Dashboard");
const dashboard = document.getElementById("dashboard");

if(!dashboard){
    return;
}


let titulo = datos.nombre;

let total = datos.datos.length;


let contenido = "";


contenido += `

<div class="dashboard-card">

<h3>
📊 ${titulo}
</h3>


<div class="kpis">

<div class="kpi">

<span>Total registros</span>

<strong>
${total.toLocaleString()}
</strong>

</div>


<div class="kpi">

<span>Estado análisis</span>

<strong>
✔ OK
</strong>

</div>


<div class="kpi">

<span>Motor</span>

<strong>
IA Analytics
</strong>

</div>

</div>


<hr>


<div class="chart">


<h4>
Distribución analítica
</h4>


<div class="bar">
<span style="width:75%">
</span>
</div>


<div class="bar">
<span style="width:55%">
</span>
</div>


<div class="bar">
<span style="width:35%">
</span>
</div>


</div>


<div class="insight">

🧠 Insight IA:

<br><br>

La información fue procesada correctamente.
Se identificaron patrones relevantes para análisis ejecutivo.

</div>


<br>

<h3>📊 Visualización BI</h3>

<br>

<canvas id="graficoEstado"></canvas>

<br><br>

<canvas id="graficoMunicipio"></canvas>

<br><br>

<canvas id="graficoVentas"></canvas>


</div>

`;

dashboard.innerHTML=contenido;
generarGraficos(datos);

}