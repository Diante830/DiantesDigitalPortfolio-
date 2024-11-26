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

         document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Clear previous error messages
    document.getElementById('error-message').textContent = '';

    // Get form data
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var country = document.getElementById('country').value;
    var subject = document.getElementById('subject').value;

    // Check if all fields are filled out
    if (!fname || !lname || !country || !subject) {
      event.preventDefault();  // Prevent form submission
      document.getElementById('error-message').textContent = 'Please fill out all fields.';
      return false;
    }

    // Optionally, you can add more specific checks, such as name length, etc.

    return true; // Allow form submission if all checks pass
  });
emailjs.init("dhazelle@hotmail.com");

document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Clear previous error messages
  document.getElementById('error-message').textContent = '';

  // Get form data
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var country = document.getElementById('country').value;
  var subject = document.getElementById('subject').value;

  // Check if all fields are filled out
  if (!fname || !lname || !country || !subject) {
    event.preventDefault();  // Prevent form submission
    document.getElementById('error-message').textContent = 'Please fill out all fields.';
    return false;
  }

  // Optionally, you can add more specific checks, such as name length, etc.

  return true; // Allow form submission if all checks pass
});

/*
const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2000);
})
*/

