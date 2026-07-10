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


</div>

`;

dashboard.innerHTML=contenido;


}