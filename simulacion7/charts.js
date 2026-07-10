alert("Charts.js cargado");
let chartInstances = [];


function limpiarGraficos(){

    chartInstances.forEach(c=>{
        c.destroy();
    });

    chartInstances=[];

}



function crearGrafico(id,tipo,labels,data,titulo){

    const ctx=document.getElementById(id);

alert("Buscando canvas: "+id+" encontrado: "+ctx);


    if(!ctx){
        return;
    }


    const chart=new Chart(ctx,{

        type:tipo,

        data:{

            labels:labels,

            datasets:[{

                label:titulo,

                data:data,

                borderWidth:2

            }]

        },


        options:{

            responsive:true,

            plugins:{

                legend:{
                    display:true
                },

                title:{

                    display:true,

                    text:titulo

                }

            }

        }


    });


    chartInstances.push(chart);

}






function generarGraficos(datos){


limpiarGraficos();



/*
====================================
BASE COMERCIANTES
====================================
*/


if(datos.nombre.includes("Comerciantes")){


let estados={};


datos.datos.forEach(d=>{

    estados[d.Estado]=
    (estados[d.Estado]||0)+1;

});



crearGrafico(

"graficoEstado",

"doughnut",

Object.keys(estados),

Object.values(estados),

"Estado de comerciantes"

);





let municipios={};


datos.datos.forEach(d=>{


municipios[d.Municipio]=
(municipios[d.Municipio]||0)+1;


});



crearGrafico(

"graficoMunicipio",

"bar",

Object.keys(municipios),

Object.values(municipios),

"Comerciantes por municipio"

);



}




/*
====================================
BASE VENTAS
====================================
*/


if(datos.nombre.includes("Ventas")){


let productos={};


datos.datos.forEach(d=>{


productos[d.Producto]=
(productos[d.Producto]||0)+d.Valor;


});



crearGrafico(

"graficoVentas",

"bar",

Object.keys(productos),

Object.values(productos),

"Ventas por producto"

);


}



}