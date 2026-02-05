// Add classList for header section

const stickyHeader = document.querySelector('.navbar-area')
const logo = document.querySelector('.logo')
const scrollTopBtn = document.querySelector('.scroll-top');
 const triggerHit = 200;

 window.addEventListener('scroll',()=>{
    if(window.scrollY > triggerHit){
         stickyHeader.classList.add('sticky');
         logo.src = 'assets/images/logo/logo.svg';
         scrollTopBtn.style.display = 'flex';
    }else{
        stickyHeader.classList.remove('sticky')
        logo.src = 'assets/images/logo/white-logo.svg';
        scrollTopBtn.style.display = 'none';
    }
 });

// add clasList for header toggle
  const toggleBtn = document.querySelector('.nav-bar-togle')
  const navMid = document.querySelector('.nav-mid')

  toggleBtn.addEventListener('click',() =>{
      navMid.classList.toggle('nav-mid-active');
      toggleBtn.classList.toggle('nav-menu-active')
  })
