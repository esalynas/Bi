let datasetActual = null;

function mostrarDataset(nombre){

    datasetActual = DATASETS[nombre];

    let html = `
    <div class="dataset">

        <h3>${datasetActual.titulo}</h3>

        <table>

        <thead>
        <tr>
    `;

    datasetActual.columnas.forEach(col=>{

        html += `<th>${col}</th>`;

    });

    html += `
        </tr>
        </thead>

        <tbody>
    `;

    datasetActual.datos.forEach(fila=>{

        html += "<tr>";

        fila.forEach(celda=>{

            html += `<td>${celda}</td>`;

        });

        html += "</tr>";

    });

    html += `
        </tbody>

        </table>

    </div>
    `;

    agregarBot(html);

}