const inputContraseña = document.getElementById("inputContraseña");
const ojoAbierto = document.getElementById("ojoAbierto");
const ojoCerrado = document.getElementById("ojoCerrado");

ojoAbierto.addEventListener('click',()=>{
    ojoAbierto.classList.remove('mostrar')
    ojoAbierto.classList.add('ocultar');
    ojoCerrado.classList.remove('ocultar');
    ojoCerrado.classList.add('mostrar');
    inputContraseña.setAttribute('type',"text")
})

ojoCerrado.addEventListener('click',()=>{
    ojoCerrado.classList.remove('mostrar');
    ojoCerrado.classList.add('ocultar');
    ojoAbierto.classList.remove('ocultar');
    ojoAbierto.classList.add('mostrar');
    inputContraseña.setAttribute('type','password');
})