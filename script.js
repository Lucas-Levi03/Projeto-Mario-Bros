const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarform() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderform() {
    formulario.style.left = "-300px"
    mascara.style.visibility = "hidden"
    formulario.style.transform = "translateX(0%)"
}