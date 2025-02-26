//  El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programacíon. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

//Función para agregar un amigo
function agregarAmigo() {
    //Validar que el campo no este vacío
    if (!inputAmigo.value){
    alert("Debes ingresar un nombre, por favor");    
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};
    
function sortearAmigo() {   
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    if(amigoSecreto.length  === 0){
        alert("No hay amigos disponibles para sortear. Por favor, agrega al menos uno.");   
        }
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
};
   
