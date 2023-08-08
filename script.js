function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "foto de Rodrigo Matos usando camisa cinza e segurando um copo de café em uma cozinha"
    )
  } else {
    img.setAttribute(
      "alt",
      "foto de Rodrigo Matos reflexivo enquanto segura um copo de cerveja em um bar"
    )
  }
}
