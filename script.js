function mMensaje(){

let texto = document.getElementById("mensaje").value;

document.getElementById("resultado").textContent = texto;
//modificar contenido moestre el mensaje 

}


function cColor(){

document.getElementById("resultado").style.color = "blue";
//cuando le undo cambiar color cambia a azul aqui es donde hace la funcion
//style.color

}


function aTexto(){
//aca lo mismo pero en vez de color es fontSize que modifica el tamaño
document.getElementById("resultado").style.fontSize = "30px";

}


function ocultarMostrar(){

let e = document.getElementById("resultado");
// lo del segundo punto oculte y mostre el texto con el if-else 
    //me dio pereza hacer css 

if(e.style.display === "none"){
    e.style.display = "block";
}else{
    e.style.display = "none";
}

}


document.getElementById("imagen").setAttribute("src", "foto.jpg");