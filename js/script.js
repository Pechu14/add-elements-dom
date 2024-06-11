 // Aquí tu código
 const boton = document.getElementById("agregar");
 const nuevaLista = document.getElementById("lista");
 const promptVals = []

 let promptVal;
 function ejecutarEnClick() {
    promptVal = prompt()
    promptVals.push(promptVal);
 
    let totalLi = ''
    for (const element of promptVals) {
        const li = "<li>" + element + "</li>"
        totalLi = totalLi + li;
    }
    nuevaLista.innerHTML = totalLi
 }

 boton.addEventListener("click", ejecutarEnClick)


 
 