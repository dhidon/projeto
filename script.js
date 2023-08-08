function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo de óculos escuros, camisa e jaquela pretas em um fundo azul"
    )
  } else {
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo de óculos e camisa preta em um fundo amarelo"
    )
  }
}
