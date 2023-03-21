/*=== menu show ===*/
const showMenu = (toogleId, navId)=>{
 const toogle = document.getElementById(toogleId), 
 nav = document.getElementById(navId)
 
 if(toogle && nav){
   toogle.addEventListener('click', ()=>{
    nav.classList.toggle('show')
   })    
 }
}
showMenu('nav_toogle','nav-menu')

/*=== active and remove menu ===*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=== scroll reveal animation ===*/
const sr = scrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
})

/* scroll home */
sr.reveal('.home_tittle',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home_img',{delay: 400})
sr.reveal('.home_social-icon',{interval: 200})

/* scroll about */
sr.reveal('.about_img',{})
sr.reveal('.about_subtittle',{delay: 200})
sr.reveal('.about_text',{delay: 400})

/* scroll resume */
sr.reveal('.home_tittle',{})
sr.reveal('.button',{delay: 200})

/* scroll projects */

/* scroll contact */

/* scroll home */

/* scroll home */

/* scroll home */



