let searchBtn=document.querySelector( '#search-btn') ;
let searchBar=document.querySelector( '.search-bar-container') ;
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector( '.login-form-container');
let formClose= document.querySelector( '#form-close') ;
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let videoBtn=document.querySelectorAll('.vid-btn');

window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList .remove('active');
    menu.classList .remove( 'fa-times') ;
    navbar.classList.remove( 'active') ;
    loginForm.classList.remove('active');

}

menu.addEventListener('click' ,()=>{
    menu.classList .toggle( 'fa-times') ;
    navbar.classList.toggle( 'active') ;
});

searchBtn.addEventListener('click' ,()=>{
    searchBtn.classList .toggle( 'fa-times') ;
    searchBar.classList.toggle( 'active') ;
});
formBtn.addEventListener( 'click' ,()=>{
    loginForm.classList.add('active');
});

formClose.addEventListener( 'click' ,()=>{
    loginForm.classList .remove( 'active') ;
});
videoBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },

    },
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    // Get values from inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all required fields before sending.");
        return;
    }

    // Show success message
    const successMsg = document.getElementById("successMsg");
    successMsg.style.display = "block";
    successMsg.textContent = `✅ Thank you, ${name}! Your message has been sent successfully.`;

    // Clear the form
    document.getElementById("contactForm").reset();

    // Hide success message after 4 seconds
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 4000);
});
document.getElementById("bookForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const destination = document.getElementById("destination").value.trim();
    const guests = document.getElementById("guests").value.trim();
    const arrival = document.getElementById("arrival").value;
    const leaving = document.getElementById("leaving").value;

    if (destination === "" || guests === "" || arrival === "" || leaving === "") {
        alert("Please fill in all the fields before booking.");
        return;
    }

    const msg = document.getElementById("bookSuccessMsg");
    msg.textContent = `✅ Booking confirmed for ${destination} with ${guests} guests!`;
    msg.style.display = "block";

    document.getElementById("bookForm").reset();

    setTimeout(() => {
        msg.style.display = "none";
    }, 4000);
});

