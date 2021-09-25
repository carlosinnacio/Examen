// let dato_animal = (()=>{
//     const url = "http://localhost:5500/animales.json"
//     const request = async (url) => {
        
//         const result = await fetch(url);
//         const respond = await result.json()
//         console.log(respond)
//          return request(url)  
//     }; return {mostrar:()=>{
//         request()
//     }}
// })()
// export default dato_animal

// let dato_animal = async()=>{
//     try {
//  const url = "http://localhost:5500/animales.json"
//     const animales = await fetch (url)
//     const resultado = animales.json()
//     return resultado

//     } catch (error) {
        
//     }
// };

const dato_animal = (() => {
    try {
        const obtenerDatos = async () => {
            const url = 'http://127.0.0.1:5500/animales.json';
            const animales = await fetch(url);
            const respuesta = await animales.json();
            return respuesta;
        }
        return {
            mostrar: obtenerDatos()
        }
    } catch (error) {
        alert(error)
    }

})();
export default dato_animal