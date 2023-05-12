const inputContraseña = document.getElementById("inputContraseña");
const ojoAbierto = document.getElementById("ojoAbierto");
const ojoCerrado = document.getElementById("ojoCerrado");

ojoAbierto.addEventListener('click',()=>{
    ojoAbierto.classList.replace('mostrar','ocultar')
    ojoCerrado.classList.replace('ocultar', 'mostrar')
    inputContraseña.type="text";
})

ojoCerrado.addEventListener('click',()=>{
    ojoCerrado.classList.replace('mostrar','ocultar');
    ojoAbierto.classList.replace('ocultar','mostrar');
    inputContraseña.type = "password";
})