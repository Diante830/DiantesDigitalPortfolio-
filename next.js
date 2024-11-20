const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/**/

var previousScroll = 0;

$(window).scroll(function(){

  var currentScroll = $(this).scrollTop();
  
  if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){

    if (currentScroll > previousScroll){
      window.setTimeout(hideNav, 300);

    } else if (currentScroll == previousScroll) {
      window.setTimeout(visibleNav, 300);
    }
     else {
      window.setTimeout(showNav, 300);
    }

    previousScroll = currentScroll;
  }
  
  /* make the scroll navigation disappear when it is scrolled on top */

  if ($(window).scrollTop() <= 150) {
      $('#navigation-scroll').css('display', 'none');
  } else {
    $('#navigation-scroll').css('display', 'flex');
  }

});

function hideNav() {
  $(".main-navigation-scroll").removeClass("is-visible").addClass("is-hidden");
}
function showNav() {
  $(".main-navigation-scroll").removeClass("is-hidden").addClass("is-visible");
  $(".main-navigation-scroll").addClass("shadow");
};

const carousel = document.querySelector('.carousel');
        const cardWidth = document.querySelector('.carousel-card').offsetWidth + 20; // Including margin

        function scrollLeft() {
            carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }

        function scrollRight() {
            carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
