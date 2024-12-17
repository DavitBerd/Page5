const hide = document.getElementById("hide")
const hide1 =document.getElementById('hide1')
const menu = document.getElementById("menu")
menu.addEventListener("click", () => {
    hide.classList.toggle("select1");
    hide1.classList.toggle("buttons1_1")
})