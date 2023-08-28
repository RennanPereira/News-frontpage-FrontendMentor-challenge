function openMenu() {
    const openButton = document.querySelector(".open-menu")
     openButton.addEventListener("click", () => {
       document.body.classList.add("menu-expanded")
       console.log("teste2")
     })
    }
   openMenu()
   
   function closeMenu() {
     const closeButton = document.querySelector(".close-menu")
     closeButton.addEventListener("click",() => {
       document.body.classList.remove("menu-expanded")
   
     
     })
   }
   closeMenu()
   
   window.addEventListener("resize", () => {
     const page = document.querySelector("body")
     if(page.clientWidth > 500){
       document.body.classList.remove("menu-expanded")
     }
   
   })