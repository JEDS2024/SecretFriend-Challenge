# SecretFriend-Challenge
## Descripción

Este proyecto es una aplicación web que permite a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto". La aplicación está diseñada para fortalecer las habilidades en lógica de programación y manipulación del DOM.

## Funcionalidades

- **Agregar nombres**: Los usuarios pueden escribir el nombre de un amigo en un campo de texto y agregarlo a una lista visible al hacer clic en "Añadir".
- **Validar entrada**: Si el campo de texto está vacío o contiene caracteres no permitidos, se muestra una alerta pidiendo un nombre válido.
- **Visualizar la lista**: Los nombres ingresados aparecen en una lista debajo del campo de entrada.
- **Sorteo aleatorio**: Al hacer clic en el botón "Sortear Amigo", se selecciona aleatoriamente un nombre de la lista y se muestra en la página.

## Estructura del Proyecto
. ├── index.html ├── style.css └── app.js


## Uso

1. **Agregar nombres**:
   - Escribe el nombre de un amigo en el campo de texto.
   - Haz clic en el botón "Añadir".
   - El nombre se agregará a la lista visible en la página.

2. **Sortear amigo secreto**:
   - Haz clic en el botón "Sortear Amigo".
   - Se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

## Validaciones

- El campo de texto solo acepta letras mayúsculas o minúsculas sin caracteres especiales, números o espacios.
- Si el campo de texto está vacío o contiene caracteres no permitidos, se mostrará una alerta pidiendo un nombre válido.

## Código JavaScript

```javascript
// filepath: /c:/Users/PC/Desktop/challenge-amigo-secreto_esp-main/app.js
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const regex = /^[a-zA-Z]+$/;

    if (!regex.test(nombre)) {
        alert('Por favor, usa solo letras mayúsculas o minúsculas sin caracteres especiales, números o espacios.');
        return;
    }

    if (nombre) {
        amigos.push(nombre);
        mostrarListaAmigos();
        input.value = '';
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
