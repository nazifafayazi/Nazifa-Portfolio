/* ===================================
   SCRIPT.JS - PART 1
   TYPING • LIGHTBOX • BACK TO TOP
=================================== */

/* ==========================
   TYPING ANIMATION
========================== */

const typing = document.getElementById("typing");

const text = "CorelDRAW Graphic Designer";

let index = 0;

function typeWriter(){

    if(!typing) return;

    if(index < text.length){

        typing.textContent += text.charAt(index);

        index++;

        setTimeout(typeWriter,80);

    }

}

window.addEventListener("load",typeWriter);

/* ==========================
   LIGHTBOX
========================== */

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const close=document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

        lightboxImg.alt=img.alt;

    });

});

if(close){

    close.onclick=()=>{

        lightbox.style.display="none";

    };

}

if(lightbox){

    lightbox.onclick=(e)=>{

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    };

}

/* ==========================
   BACK TO TOP
========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(!topBtn) return;

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}/* ===================================
   SCRIPT.JS - PART 2
   MOBILE MENU • SCROLL REVEAL
=================================== */

/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}

/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });

});

/* ==========================
   SCROLL REVEAL
========================== */

const revealItems=document.querySelectorAll(

".portfolio-section,.about-section,.skills-section,.cv-section,.stats,.contact-section"

);

function revealOnScroll(){

    revealItems.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

window.addEventListener("load",revealOnScroll);

/* Set initial animation state */

revealItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition="all .8s ease";

});/* ===================================
   SCRIPT.JS - PART 3
   FINAL POLISH
=================================== */

/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section, header");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.offsetHeight;

        if(window.scrollY>=sectionTop &&
           window.scrollY<sectionTop+sectionHeight){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ==========================
   ESC KEY CLOSE LIGHTBOX
========================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape" && lightbox){

        lightbox.style.display="none";

    }

});

/* ==========================
   IMAGE LOADING EFFECT
========================== */

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("load",()=>{

        img.style.opacity="1";

    });

});

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log("Nazifa Portfolio Loaded Successfully");
