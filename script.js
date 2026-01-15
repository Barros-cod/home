function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute("src", "assets/avatar-light.png")
        img.setAttribute("alt", "Barros com cara de surpresa, com as duas mãos na cabeça.")

    } else {
        img.setAttribute("src", "assets/avatar-dark.png") 
        img.setAttribute("alt", "Foto de Lucas Barros olhando fixo para camera, com uma camisa azul.")
    }

}