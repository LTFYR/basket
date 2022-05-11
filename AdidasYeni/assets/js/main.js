$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})



const klik = document.getElementById("hamb")
const x = document.getElementById("btn")
// const logo = document.getElementById("logo")
// const heading = document.getElementById("heading")

  klik.addEventListener("click",openNav)
function openNav() {
    document.getElementById("myNav").style.display = "inline-block";
    // document.getElementById("hamb").style.display = "none"
    // document.getElementById("logo").style.textAlign = "center"
    // document.getElementById("heading").style.background = "white"
  }
  x.addEventListener("click",closeNav)
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
    // document.getElementById("hamb").style.display = "flex"
    // document.getElementById("logo").style.textAlign = "start"
    // document.getElementById("heading").style.background = "rgba(0, 0, 0, 0.618)"
  }