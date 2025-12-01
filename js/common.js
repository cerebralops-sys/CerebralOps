// Dropdown hover effect for desktop
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });

    // Enhanced Navbar scroll effect with direction detection
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add scrolled class when scrolling down past 50px
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });


    //$(document).ready(function () {
    //    // Optional: Add pause on mobile touch
    //    $('.logo-scroll').on('touchstart', function () {
    //        $(this).css('animation-play-state', 'paused');
    //    });

    //    $('.logo-scroll').on('touchend', function () {
    //        $(this).css('animation-play-state', 'running');
    //    });
    //});


    // ===========================
    // Smooth Scrolling for Navigation Links
    // ===========================
    $('a.nav-link[href*="#"]').on("click", function (e) {
        e.preventDefault();

        // Close mobile menu if open
        $(".navbar-collapse").collapse("hide");

        var target = $(this.hash);
        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top - 170,
                },
                800,
                "swing"
            );
        }
    });


    // Enable dropdown on hover for desktop
    if ($(window).width() > 991) {
        $('.navbar .dropdown').hover(
            function() {
                $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
            },
            function() {
                $(this).find('.dropdown-menu').stop(true, true).fadeOut(200);
            }
        );
    }
    
    // Close dropdown when clicking a dropdown item
    $('.dropdown-item').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    
    // Update active state for dropdown parent
    var currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'about.html' || currentPage === 'team.html') {
        $('#aboutDropdown').addClass('active');
    }

    // ===========================
    // Mobile Menu Close on Link Click
    // ===========================
    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

 

    // Optional: Add smooth reveal on page load
    document.addEventListener('DOMContentLoaded', function () {
        navbar.classList.add('loaded');
    });

    // ===========================
    // Prevent Default for Empty Links
    // ===========================
    $('a[href="#"]').on("click", function (e) {
        e.preventDefault();
    });
});

