const mobileMenu=(()=>{

    const bar1=document.querySelector('.bar1')
    const bar2= document.querySelector('.bar2')
    const bar3= document.querySelector('.bar3')
    const burgerMenu= document.getElementById('burger-menu')
    const navLinks =document.getElementById('navLinks')
    const links= document.querySelectorAll('.navlinks a')
  
    burgerMenu.addEventListener('click',()=>{
      bar1.classList.toggle('bar1-active')
      bar2.classList.toggle('bar2-active')
      bar3.classList.toggle('bar3-active')
      navLinks.classList.toggle('navlink-active')
      links.forEach(link=>{
        link.classList.toggle('navlinks-active')
        console.log('done bud');
      })
    })
  })()
  
  