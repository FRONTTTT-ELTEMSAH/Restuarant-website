let menu=document.querySelector("#menu-icone");
let navbar=document.querySelector(".navbar")
menu.addEventListener("click" ,function(){
    navbar.classList.toggle(".active");
});

window.onscroll = () =>{
    navbar.classList.remove()
};