const titulo1 = document.querySelector("#objeto1")
const titulo2 = document.querySelector("#objeto2")
const titulo3 = document.querySelector("#objeto3")
const titulo4 = document.querySelector("#objeto4")
const titulo5 = document.querySelector("#objeto5")



fetch("./index.json")
.then(response => response.json())
.then(mochila =>{

    titulo1.innerHTML = mochila.objeto1;
    titulo2.innerHTML = mochila.objeto2;
    titulo3.innerHTML = mochila.objeto3;
    titulo4.innerHTML = mochila.objeto4;
    titulo5.innerHTML = mochila.objeto5;

}
)

const persona1 = document.querySelector("")