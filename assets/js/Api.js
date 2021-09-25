export let dato_animal = (()=>{
    const url = "http://localhost:5500/animales.json"
    const request = async (url) => {
        const result = await fetch(url);
        const respond = await result.json()
        console.log(respond)
         return request(url)
    } 
})()


