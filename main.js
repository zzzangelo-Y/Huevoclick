const Huevo = document.querySelector("#huevo");
const contador = document.querySelector("#contador");

let contarxd = 1;

Huevo.onclick = () => {
    contador.textContent = `Haz hecho click ${contarxd} veces.`
    if(contarxd===100){
        Huevo.src = "chicken-egg-cartoon-vector.png"
        setTimeout(() =>{
            contarxd = 1;
            Huevo.src = "https://static.vecteezy.com/system/resources/previews/025/377/474/non_2x/chicken-egg-cartoon-vector.jpg"
            contador.textContent = ""
        }, 3000)
    }else {
        contarxd++
    }
}





