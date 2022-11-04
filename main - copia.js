

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


