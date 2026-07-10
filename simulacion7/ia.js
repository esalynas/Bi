function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")           // Descompone acentos
        .replace(/[\u0300-\u036f]/g, ""); // Elimina marcas diacríticas
}

function analizarSolicitud(texto) {
    const t = normalizarTexto(texto);

    if (t.includes("comerciante") || t.includes("comercio")) {
        return "comerciantes";
    }
    if (t.includes("venta") || t.includes("vender")) {
        return "ventas";
    }
    if (t.includes("matricula") || t.includes("matrícula")) {
        return "matriculas";
    }

    return null;
}

function ejecutarIA(texto) {
    const base = analizarSolicitud(texto);

    if (!base) {
        agregarBot("🤖 No identifiqué la fuente de datos solicitada.");
        return;
    }

    const datos = basesDatos[base];

    if (!datos || !Array.isArray(datos.datos)) {
        agregarBot("❌ Error: Datos no disponibles para esta fuente.");
        return;
    }

    agregarBot(`
        🧠 <b>Regi Analytics AI</b>

        <br><br>
        Solicitud recibida:<br>
        <b>${texto}</b>

        <br><br>
        ━━━━━━━━━━━━━━

        <br>
        📂 Fuente identificada:<br>
        <b>${datos.nombre}</b>

        <br><br>
        🧩 Campos detectados:<br>
        ${Object.keys(datos.datos[0] || {})
            .map(c => `✓ ${c}<br>`)
            .join("")}

        <br>
        📊 Registros procesados:<br>
        <b>${datos.datos.length.toLocaleString()}</b>

        <br><br>
        ⚙️ Construyendo modelo analítico...
        <br><br>
        <div class="typing">
            <span></span><span></span><span></span>
        </div>
    `);

    setTimeout(()=>{

    agregarBot("🟢 Paso 1: enviando datos a tabla");

    mostrarTabla(datos);


    agregarBot("🟢 Paso 2: creando dashboard");

    crearDashboard(datos);


    agregarBot("🟢 Paso 3: generando resumen");

    generarResumen(datos);


    agregarBot("🟢 Todos los módulos terminaron");

    },1800);
}