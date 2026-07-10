const basesDatos = {

comerciantes:{
nombre:"Base de Comerciantes",

columnas:[
"ID",
"Nombre",
"Municipio",
"Estado",
"Actividad"
],

datos:[

{
ID:1,
Nombre:"Industria Andina SAS",
Municipio:"Medellín",
Estado:"Activo",
Actividad:"Manufactura"
},

{
ID:2,
Nombre:"Servicios Antioquia",
Municipio:"Envigado",
Estado:"Activo",
Actividad:"Servicios"
},

{
ID:3,
Nombre:"Comercializadora Norte",
Municipio:"Bello",
Estado:"Inactivo",
Actividad:"Comercio"
}

],

kpis:{
total:12540,
activos:"92%",
crecimiento:"8.5%"
}

},


ventas:{

nombre:"Base Comercial Ventas",

columnas:[
"Mes",
"Ventas",
"Clientes"
],

datos:[

{
Mes:"Enero",
Ventas:25000000,
Clientes:430
},

{
Mes:"Febrero",
Ventas:31000000,
Clientes:510
},

{
Mes:"Marzo",
Ventas:28000000,
Clientes:470
}

],

kpis:{
ventasTotales:"84M",
clientes:"1410",
crecimiento:"12%"
}

},


matriculas:{

nombre:"Base Matrículas",

columnas:[
"Año",
"Nuevos",
"Renovados"
],

datos:[

{
Año:2024,
Nuevos:4500,
Renovados:8200
},

{
Año:2025,
Nuevos:5200,
Renovados:9000
}

],

kpis:{
total:"22.000",
nuevos:"5.200",
renovacion:"82%"
}

}

};