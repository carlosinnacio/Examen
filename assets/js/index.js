import Animal from "./Animal"
import dato_animal from "./Api"

// Crear las instancias de las clases utilizando los datos del formulario.

let animales = []
let imagen = document.getElementById ("preview").innerHTML
let audio = document.getElementById ("player")
let registrar = document.getElementById ("btnRegistrar")
let nombre = document.getElementById ("animal")


registrar.addEventListener("click", async()=>{
    let edad = document.getElementById ("edad")
    let comentarios = document.getElementById ("comentarios")
    let animal

    if(nombre.value && edad.value && comentarios.value){
        let datos = await mostrarDatos.mostrar

        if(nombre.value == "Leon"){
            animal = new Leon (nombre.value, edad.value, datos.animales[0], comentarios.value, datos.animales[0].sonido)
        }else if (nombre.value == "Lobo"){
            animal = new Lobo (nombre.value, edad.value, datos.animales[1], comentarios.value, datos.animales[1].sonido)
        }else if (nombre.value == "Oso"){
            animal = new Oso (nombre.value, edad.value, datos.animales[2], comentarios.value, datos.animales[2].sonido)
        }else if (nombre.value == "Serpiente"){
            animal = new Serpiente (nombre.value, edad.value, datos.animales[3], comentarios.value, datos.animales[3].sonido)
        }else if (nombre.value == "Aguila"){
            animal = new Aguila (nombre.value, edad.value, datos.animales[4], comentarios.value, datos.animales[4].sonido)
        }

        nombre.selectedIndex = 0
        edad.selectedIndex = 0
        comentarios.value = ""
        imagen.innerHTML = `<img src="">`
        animales.push(animal)
        mostrarTabla()

    }else {
        alert ("Ingresar datos validos porfis")
    }

})
//Creacion de evento tipo change
document.getElementById ("animal").addEventListener("change", function cambiarFoto(){
    let nombre = document.getElementById ("animal")
    if(nombre.value == "Leon"){
        imagen.innerHTML = `<img src="assets/imgs/Leon.png" alt="imagen_leon" width= "200" heigth="200">`
    }else if (nombre.value == "Lobo"){
        imagen.innerHTML = `<img src="assets/imgs/Lobo.jpg" alt="imagen_lobo" width= "200" heigth="200">`
    }else if (nombre.value == "Oso"){
        imagen.innerHTML = `<img src="assets/imgs/Oso.jpg" alt="imagen_oso" width= "200" heigth="200">`
    }else if (nombre.value == "Serpiente"){
        imagen.innerHTML = `<img src="assets/imgs/Serpiente.jpg" alt="imagen_serpiente" width= "200" heigth="200">`
    }else if (nombre.value == "Aguila"){
        imagen.innerHTML = `<img src="assets/imgs/Aguila.png" alt="imagen_aguila" width= "200" heigth="200">`
    }
})

let mostrarTabla = ()=>{
    let animalesTemplate = document.getElementById ("Animales")
    animalesTemplate.innerHTML = ""
}


