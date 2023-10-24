const burger = document.getElementById("burger")
const checkbox = document.getElementById("trigger")
burger.onclick = () => {
  checkbox.toggleAttribute("checked")
}