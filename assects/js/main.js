const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")

menuIcon.addEventListener("click", function() {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overFlowHidden")
    menuIcon.classList.toggle("show")
})
