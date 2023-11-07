function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
init();

var full = document.querySelector("#fullscnav");

var flag = 0;

var menubars = document.querySelector("#menubars");
var mline1 = document.querySelector("#menubars #mline1");
var mline2 = document.querySelector("#menubars #mline2");
var navh2 = document.querySelector("#nav h2");
var navh3 = document.querySelector("#nav h3");
var navh3span = document.querySelector("#nav h3 span");

menubars.addEventListener("click",function(){
    if(flag === 0){
        mline1.style.transform = "rotate(33deg)";
        mline1.style.width = "51%";
        mline1.style.backgroundColor = "#2b2b2b";
        mline2.style.transform = "rotate(-31deg)";
        mline2.style.width = "55%";
        mline2.style.backgroundColor = "#2b2b2b";
        full.style.top = "0%";
        navh2.style.color = "#2b2b2b";
        navh3.style.color = "#2b2b2b";
        navh3span.style.color = "#2b2b2b";
        flag++;
    }else{
        mline1.style.transform = "rotate(0deg)";
        mline1.style.width = "80%";
        mline1.style.backgroundColor = "#cecece";
        mline2.style.transform = "rotate(0deg)";
        mline2.style.width = "45%";
        mline2.style.backgroundColor = "#cecece";
        full.style.top = "-100%";
        navh2.style.color = "#cecece";
        navh3.style.color = "#cecece";
        navh3span.style.color = "#cecece";
        flag = 0;
    }
})

var t1 = gsap.timeline();

t1.from("#page1 h1",{
    y:100,
    duration: 0.8,
    opacity: 0
})
.from("#page1 h2",{
    y:100,
    duration: 0.6,
    delay: -0.2,
    opacity: 0
})
.from("#page1 h3",{
    y:100,
    duration: 0.8,
    delay: -0.2,
    opacity: 0
})

gsap.to("#page2 img",{
    scale: 1.11,
    scrollTrigger:{
        trigger: "#page2 img",
        scroller: "#main",
        start: "top 75%",
        end: "top 10%",
        scrub: 3
    }
}
)

gsap.to("#page2 h1",{
    rotateX: "0deg",
    opacity: 1,
    scrollTrigger:{
        trigger: "#page2 .h11",
        scroller: "#main",
        start: "top 64%",
        end: "top 59%",
        scrub: 2
    }
}
)

gsap.to("#page5 #page5content #content3 img",{
    rotate:360,
    repeat:-1,
    duration: 2,
    ease: Power0.easeNone
})

var slider1 = document.querySelectorAll("#page6 #slider1 h1");
slider1.forEach(function(elem){
    gsap.to(elem,{
        transform: 'translateX(-100%)',
        duration:4,
        scrollTrigger:{
            trigger:'#page6',
            scroller:"#main",
            scrub:4
        }
    })
})

var slider2 = document.querySelectorAll("#page6 #slider2 h1");
slider2.forEach(function(elem){
    gsap.to(elem,{
        transform: 'translateX(1%)',
        duration:4,
        scrollTrigger:{
            trigger:'#page6',
            scroller:"#main",
            scrub:4
        }
    })
})

var banana = document.querySelector("#page7elems #elem1 img")
document.querySelector("#page7elems #elem1").addEventListener("mousemove",function(dets){
    banana.style.opacity = "1";
    banana.style.left = `${dets.x - 200}px`;
    banana.style.top = `${dets.y - 300}px`
})

document.querySelector("#page7elems #elem1").addEventListener("mouseleave",function(dets){
    banana.style.opacity = "0";
    console.log("hey")
})


var chocolate = document.querySelector("#page7elems #elem2 img")
document.querySelector("#page7elems #elem2").addEventListener("mousemove",function(dets){
 chocolate.style.opacity = "1";
 chocolate.style.left = `${dets.x - 130}px`;
 chocolate.style.top = `${dets.y - 300}px`
})

document.querySelector("#page7elems #elem2").addEventListener("mouseleave",function(dets){
    chocolate.style.opacity = "0";
})


var product1 = document.querySelector("#page3 #product1")
product1.addEventListener("mousemove",function(){
    gsap.to("#page3 #product1",{
        rotate:14,
        scale: 1.1
    })
})
product1.addEventListener("mouseleave",function(){
    gsap.to("#page3 #product1",{
        rotate:0,
        scale: 1
    })
})
var product2 = document.querySelector("#page3 #product2")
product2.addEventListener("mousemove",function(){
    gsap.to("#page3 #product2",{
        rotate:14,
        scale: 1.1
    })
})
product2.addEventListener("mouseleave",function(){
    gsap.to("#page3 #product2",{
        rotate:0,
        scale: 1
    })
})
var product3 = document.querySelector("#page3 #product3")
product3.addEventListener("mousemove",function(){
    gsap.to("#page3 #product3",{
        rotate:14,
        scale: 1.1
    })
})
product3.addEventListener("mouseleave",function(){
    gsap.to("#page3 #product3",{
        rotate:0,
        scale: 1
    })
})
var product4 = document.querySelector("#page3 #product4")
product4.addEventListener("mousemove",function(){
    gsap.to("#page3 #product4",{
        rotate:14,
        scale: 1.1
    })
})
product4.addEventListener("mouseleave",function(){
    gsap.to("#page3 #product4",{
        rotate:0,
        scale:1
    })
})

var product5 = document.querySelector("#page3 #product5")
product5.addEventListener("mousemove",function(){
    gsap.to("#page3 #product5",{
        rotate: 14,
        scale: 1.1
    })
})
product5.addEventListener("mouseleave",function(){
    gsap.to("#page3 #product5",{
        rotate:0,
        scale:1
    })
})

document.querySelector("#page4 h1")

gsap.from("#page4 h1",{
    y: 80,
    duration:0.7,
    delay:0.5,
    opacity:0,
    stagger: 0.1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main"
    }
})
