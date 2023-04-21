// ==== menu show y hidden 
const navMenu=document.getElementById('nav-menu'),
      toggleMenu=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')


// ===  show ====

toggleMenu.addEventListener('click',()=>{
  navMenu.classList.toggle('show')
})

// ===  hidden ====

closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('hidden')
  })

// ===== remove menu ====
const navLink=document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

// scroll sections active link
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current =>{
        const sectionHight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrillY > sectionTop && scrollY <= sectionTop + sectionHight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}

// Get the button that opens the popup
var openPopupBtn = document.querySelector(".open-popup");

// Get the popup
var popup = document.querySelector(".popup");

// Get the button that closes the popup
var closePopupBtn = document.querySelector(".close-popup");

// When the user clicks the button, open the popup
openPopupBtn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on the close button, close the popup
closePopupBtn.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}