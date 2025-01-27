// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  const regex = /^[a-zA-Z]+$/;

  if (!regex.test(nombre)) {
    alert(
      "Por favor, usa solo letras mayúsculas o minúsculas sin caracteres especiales, números o espacios."
    );
    return;
  }

  if (nombre) {
    amigos.push(nombre);
    mostrarListaAmigos();
    input.value = "";
  }
}

function mostrarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
