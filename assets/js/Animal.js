export default class Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        let Nombre = nombre
        this.getNombre = ()=> Nombre
        let Edad = edad
        this.getEdad = ()=> Edad
        let Img = img
        this.getImg = ()=> Img
        let Comentarios = comentarios
        this.getComentarios = ()=> Comentarios
        let Sonido = sonido
        this.getSonido = ()=> Sonido
    }
    get Nombre (){
        return this._getNombre
    }
    get Edad (){
        return this._getEdad
    }
    get Img (){
        return this._getImg
    }
    get Comentarios (){
        return this._getComentarios
    }
    get Sonido (){
        return this._getSonido
    }
    set Comentarios (nuevo_comentario){
        this._getComentarios = nuevo_comentario
    }
}

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
      super(nombre, edad, img, comentarios, sonido)  
    } 
    Rugir(){

    }
}
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
      super(nombre, edad, img, comentarios, sonido)  
    }
    Aullar(){

    }
}
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
      super(nombre, edad, img, comentarios, sonido)  
    }
    Gruñir(){

    }
}
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
      super(nombre, edad, img, comentarios, sonido)  
    }
    Sisear(){

    }
}
class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
      super(nombre, edad, img, comentarios, sonido)  
    }
    Chillar(){
        document.getElementById ("player").setAttribute("src", "assets/sounds/chillido.mp3")
    }
}

function animalito() {
    let nombre = document.getElementById ("animal").value
    let edad = document.getElementById ("edad").value
    let imagen = document.getElementById ("preview").innerHTML
    let comentarios = document.getElementById ("comentarios").innerHTML
    let sonido = Chillar()
    
}