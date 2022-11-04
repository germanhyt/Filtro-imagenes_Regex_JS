
// let busqueda_input = document.querySelector('.contenedor__input');
// let contenido_output = document.querySelectorAll('.contenedor-galeria__img'); //Todas los selectores coincidentes con dicha clase
// console.log(busqueda_input);

// busqueda_input.oninput = () =>{
//    let expreg=new RegExp(".*"+busqueda_input.value.toLowerCase()+".*"); 

//    contenido_output.forEach((ocultar) => {
//         ocultar.style.display = 'none';
//         console.log(ocultar);
//    });

//    let value = busqueda_input.value;
//    console.log(value);
//    contenido_output.forEach((filtrado) =>{

//       let title = filtrado.children[1].innerText.toLowerCase();
//       console.log(title);
//       if(value == title){
//         filtrado.style.display = 'block';
//       }
//       if(busqueda_input.value == ''){
//         filtrado.style.display = 'block';
//       }
//    });
// };

let busqueda_input = document.querySelector('.contenedor__input');
let contenido_output = document.querySelectorAll('.contenedor-galeria__img'); //devuelve Todas los selectores coincidentes con dicha clase
console.log(busqueda_input);
busqueda_input.oninput = () =>{
   contenido_output.forEach((filtrado) => {
        let expreg=new RegExp(".*"+busqueda_input.value.toLowerCase()+".*"); 
        // let expreg=new RegExp("[A-Z]*"+busqueda_input.value.toLowerCase()+".*"); 
        if(expreg.test(filtrado.children[1].innerText.toLowerCase())){
            filtrado.style.display = 'block';
            filtrado.style.color='gray';
            filtrado.style.tranition='transition: all 0.8 linear';
        }else{
            filtrado.style.display = 'none';
        }
   });

};

// busqueda_input.addEventListener('keyup',()=>{   
//     contenido_output.forEach((filtrado) => {
        // let expreg=new RegExp(".*"+busqueda_input.value.toLowerCase()+".*"); 
//          if(expreg.test(filtrado.children[1].innerText.toLowerCase())){
//             console.log(filtrado.children[1].innerText.toLowerCase());
//              filtrado.style.display = 'block';
//              filtrado.style.color='gray';
//          }else{
//              filtrado.style.display = 'none';
//          }
//     });
 
//  });
 



// var busqueda_input=document.getElementsByClassName('contenedor__input')[0];
// var contenido_output=document.getElementsByClassName("contenedor-galeria__img");
// function filtrar(){
//     let expreg=new RegExp(".*"+busqueda_input.value.toLowerCase()+".*");
//     for(var elemento of contenido_output){
//         if(expreg.test(elemento.children[1].innerText.toLowerCase())){   
//             elemento.style.display="block";
//             elemento.style.color='blue';
//         }else{
//             elemento.style.display="none";
//         }
//     }

// };
// busqueda_input.addEventListener('keyup', filtrar);       /*Funciona cuando se suelta la tecla del teclado*/
// busqueda_input.addEventListener('kepress', filtrar);  /*Funciona cuando se presiona la tecla del teclado*/
// busqueda_input.addEventListener('blur', filtrar);     /*Funciona cuando se quitar el foco en el tag, es decir no se hace ninguna accion que genere su reacción*/
// busqueda_input.addEventListener('onblur', filtrar);   /*Funciona cuando se enfoqca*/
// busqueda_input.addEventListener('focus', filtrar);    /*Funciona cuando se enfoqca en el tag*/


