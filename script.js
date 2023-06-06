function Name(){
    var name=document.getElementById("Username").value;
    if(name.length==0){
        document.getElementById("Namespan").innerHTML="Name is required"
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)){
        document.getElementById("Namespan").innerHTML="Write full name"
        return false;

    }
    document.getElementById("Namespan").innerHTML='Valid <i class="fa-regular fa-circle-check fa-1x"></i>';
    return true;
}

function Email(){
    var email=document.getElementById("EMail").value;
    if(email.length==0){
        document.getElementById("Emailspan").innerHTML='Email is required';
        return false
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.getElementById("Emailspan").innerHTML='Email Invalid'

    return false;
    }
    document.getElementById("Emailspan").innerHTML='Valid<i class="fa-regular fa-circle-check fa-1x"></i>'
    return true;
    
}
function validateform(){
    if( !Name() || !Email()){
        document.getElementById("results4").style.display ='block';
        document.getElementById("results4").innerHTML ='please fix error to submit';
        setTimeout(function(){ document.getElementById("results4").style.display = 'none' ;} ,1000);
        return false;
    }
}


window.addEventListener("scroll",reveal);

function reveal(){

var reveals = document.querySelectorAll('p');    

for(var i=0; i <reveals.length ; i++){

     var windowheight = window.innerHeight;
     var revealtop = reveals[i].getBoundingClientRect().top;
     var revealpoint = 150 ;

     if(revealtop < windowheight - revealpoint ){
        reveals[i].classList.add('active')
     }
     else{
        reveals[i].classList.remove('active')

     }
}
}


// gsap.registerPlugin(ScrollTrigger);

// let revealContainers = document.querySelectorAll(".galone");

// revealContainers.forEach((container) => {
//   let image = container.querySelector("img");
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: container,
//       toggleActions: "restart none none reset"
//     }
//   });

//   tl.set(container, { autoAlpha: 1 });
//   tl.from(container, 1.5, {
//     xPercent: -100,
//     ease: Power2,
//   });
//   tl.from(image, 1.5, {
//     xPercent: 100,
//     scale: 1.3,
//     delay: -1.5,
//     ease: Power2,
//   });
// });

// OLD WAY USING INTERSECTION OBSERVER API AND CLIP-PATH

/*const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9
};

let revealCallback = (entries, self) => {
  entries.forEach(entry => {
    let container = entry.target;
    let img = entry.target.querySelector("img");
    const easeInOut = "power3.out";
    const revealAnim = gsap.timeline({ ease: easeInOut });

    if (entry.isIntersecting) {
      revealAnim.set(container, {
        visibility: "visible"
      });
      revealAnim.fromTo(
        container,
        {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          ease: easeInOut
        }
      );
      revealAnim.from(img, 4, {
        scale: 1.4,
        ease: easeInOut,
        delay: -1
      });
      self.unobserve(entry.target);
    }
  });
};

let revealObserver = new IntersectionObserver(revealCallback, options);

document.querySelectorAll(".reveal").forEach(reveal => {
  revealObserver.observe(reveal);
});

*/

let alertShow = false;
setInterval(() => {
  document.title= alertShow ? "Welcome To...": "Birthday Party";
  alertShow = !alertShow;
}, 1000);