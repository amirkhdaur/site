const $sections = document.querySelectorAll('.sounds-menu__section')

$sections.forEach(section => {
  section.onclick = (event) => {
    event.preventDefault()
  }
})