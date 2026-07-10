alert("Charts.js cargado"); // ← Puedes quitar este alert

let chartInstances = [];

function limpiarGraficos() {
    chartInstances.forEach(chart => {
        if (chart) chart.destroy();
    });
    chartInstances = [];
}

function crearGrafico(id, tipo, labels, data, titulo) {
    const ctx = document.getElementById(id);

    if (!ctx) {
        console.warn(`Canvas no encontrado: ${id}`);
        return;
    }

    const chart = new Chart(ctx, {
        type: tipo,
        data: {
            labels: labels,
            datasets: [{
                label: titulo,
                data: data,
                borderWidth: 2,
                backgroundColor: [
                    "#42b9ff", "#7dffb2", "#ffcc66",
                    "#ff7d9c", "#b58cff", "#ff9f40"
                ],
                borderRadius: 12
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1200
            },
            plugins: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    text: titulo
                }
            }
        }
    });

    chartInstances.push(chart);
}

function generarGraficos(datos) {
    if (!datos || !Array.isArray(datos.datos)) {
        console.warn("Datos inválidos para generar gráficos");
        return;
    }

    limpiarGraficos();

    // ==================== COMERCIANTES ====================
    if (datos.nombre.toLowerCase().includes("comerciante")) {

        // Por Estado
        const estados = datos.datos.reduce((acc, d) => {
            const estado = d.Estado || "Desconocido";
            acc[estado] = (acc[estado] || 0) + 1;
            return acc;
        }, {});

        crearGrafico(
            "graficoEstado",
            "doughnut",
            Object.keys(estados),
            Object.values(estados),
            "Estado de comerciantes"
        );

        // Por Municipio
        const municipios = datos.datos.reduce((acc, d) => {
            const mun = d.Municipio || "Desconocido";
            acc[mun] = (acc[mun] || 0) + 1;
            return acc;
        }, {});

        crearGrafico(
            "graficoMunicipio",
            "bar",
            Object.keys(municipios),
            Object.values(municipios),
            "Comerciantes por municipio"
        );
    }

    // ==================== VENTAS ====================
    if (datos.nombre.toLowerCase().includes("venta")) {

        const productos = datos.datos.reduce((acc, d) => {
            const producto = d.Producto || "Desconocido";
            const valor = parseFloat(d.Valor) || 0;
            acc[producto] = (acc[producto] || 0) + valor;
            return acc;
        }, {});

        crearGrafico(
            "graficoVentas",
            "bar",
            Object.keys(productos),
            Object.values(productos),
            "Ventas por producto"
        );
    }
}