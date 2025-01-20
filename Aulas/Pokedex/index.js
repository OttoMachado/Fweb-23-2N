const tipo1 = document.querySelector("#tipo1")
const tipo2 = document.querySelector("#tipo2")
const imgPokemon = document.querySelector("#imgPokemon")
const idPokemon = document.querySelector("#idPokemon")
const nomePokemon = document.querySelector("#nomePokemon")
const pesoPokemon = document.querySelector("#pesoPokemon")
const alturaPokemon = document.querySelector("#alturaPokemon")
const inptpoke = document.querySelector("#inputNome")
const buttonLast = document.querySelector("#buttonLast")
const buttonNext = document.querySelector("#buttonNext  ")
const formID = document.querySelector("#formID")
const musicafundo = document.querySelector('#bgmusic')

let IDPokemon = 1

const fetchpokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIresponse.json()
    return data
}

const showPokemon = async (pokemon) =>{
    const infoPokemon = await fetchpokemon(pokemon)
    IDPokemon = infoPokemon.id
    idPokemon.innerHTML = infoPokemon.id
    nomePokemon.innerHTML = infoPokemon.name
    imgPokemon.src = infoPokemon.sprites.front_default
    tipo1.innerHTML = infoPokemon.types[0].type.name
    tipo2.innerHTML = ''
    tipo2.innerHTML = infoPokemon.types[1].type.name
    alturaPokemon.innerHTML = (infoPokemon.height * 0.3048).toFixed(1)
    pesoPokemon.innerHTML = (infoPokemon.weight * 0.453592).toFixed(1)

    audioPokemon.src = infoPokemon.cries.latest
}

formID.addEventListener("submit", (event) =>{
    event.preventDefault()
    showPokemon(inptpoke.value.toLowerCase())
    
})

buttonLast.addEventListener("click", (event) => {
    event.preventDefault()

    if (IDPokemon > 1) {
        IDPokemon-=1
        showPokemon(IDPokemon)
    }
})

buttonNext.addEventListener("click", (event) => {
    event.preventDefault()
    IDPokemon+=1
    showPokemon(IDPokemon)
})

function playMusic(){
    musicafundo.play()
}



showPokemon(IDPokemon)