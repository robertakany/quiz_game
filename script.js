

const moyenNote= (list)=>{
    console.log('la moyenne est de ',list*5/100)
}


let myList=[
    {"name":"stack",
      "age":20,
      "note":80,
      "is_best":true
    },
    {
        "name":"madison",
        "age":15,
        "note":75,
        "is_best":true
    },
    {
        "name":"ezaga",
        "age":26,
        "note":75,
        "is_best":true
    },
    {
        "name":"jacl",
        "age":20,
        "note":75,
        "is_best":true
    },
    {
        "name":"kelsey",
        "age":15,
        "note":78,
        "is_best":true
    },
    {
        "name":"madis",
        "age":25,
        "note":25,
        "is_best":false
    }
]
moyenNote(myList.length)
console.log(6*5/100)

let contain = "Le Quiz est maintenant ready "

let nouvelElement = document.createElement("h1");

nouvelElement.innerText = contain

let parentElement = document.getElementById("container");
parentElement.appendChild(nouvelElement);



let forms = document.getElementById("premier_btn")

forms.addEventListener('click', (event)=>{
    console.log(event)
})


const form = document.getElementById("stack")


form.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log("n'essaie pas dde te recharger ")

    const color = document.querySelectorAll("input[name=couleur]")
    console.log(color)
    const roy = document.getElementById('roy').value
    console.log(roy)

})

let chaine = "cachalot1"; // Testez avec des chiffres pour voir la différence
let regex = new RegExp("^[a-z]+$");
let resultat = regex.test(chaine);
console.log(resultat); // Affiche true.



