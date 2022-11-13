function settar(){
    
    var lista = document.getElementById('lista');
    var submit = document.getElementById('submit');
    var input = document.getElementById('grocery');
    
    submit.addEventListener('click', (e) => {
    e.preventDefault();
    let value = input.value;
    var li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = value;
    span.style.flexGrow = 3;
    lista.appendChild(li);
    li.appendChild(span);
    input.value = '';

    let borrar = document.createElement('button');
    let editar = document.createElement('button');
    borrar.innerHTML = 'Borrar';
    editar.innerHTML = 'Editar';
    borrar.setAttribute('class','delete');
    editar.setAttribute('class','edit');

    li.appendChild(borrar);
    li.appendChild(editar);


    borrar.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })

    editar.addEventListener('click', (e) => {
        let edit = prompt('Editar');
        e.target.parentElement.firstChild.innerHTML = edit;
    })


});
var borrarTodo = document.getElementById('limpiar');
borrarTodo.addEventListener('click', () => {
    while(lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
});
}


window.onload = () => {
settar();
}