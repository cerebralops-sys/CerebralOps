// Main JavaScript for Cerebral Ops Website

$(document).ready(function () {
 
    // ===========================
    // Counter Animation for Stats
    // ===========================
    function animateCounter() {
        $(".stat-number").each(function () {
            var $this = $(this);
            var countTo = $this.attr("data-target");

            $({ countNum: 0 }).animate(
                {
                    countNum: countTo,
                },
                {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    },
                }
            );
        });
    }

    // Trigger counter animation when stats section is in view
    var statsAnimated = false;
    $(window).scroll(function () {
        if (!statsAnimated) {
            var statsSection = $(".stats-section");
            if (statsSection.length) {
                var statsSectionTop = statsSection.offset().top;
                var scrollTop = $(window).scrollTop();
                var windowHeight = $(window).height();

                if (scrollTop + windowHeight > statsSectionTop + 100) {
                    animateCounter();
                    statsAnimated = true;
                }
            }
        }
    });

    // ===========================
    // Scroll Animations for Elements
    // ===========================
    function checkVisibility() {
        $(".value-card, .service-card, .testimonial-card").each(function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass("fade-in");
            }
        });
    }

    $(window).on("scroll", checkVisibility);
    checkVisibility(); // Check on load

    // ===========================
    // Contact Form Submission
    // ===========================
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        // Get form values
        var name = $(this).find('input[type="text"]').val();
        var email = $(this).find('input[type="email"]').val();
        var subject = $(this).find('input[placeholder="Subject"]').val();
        var message = $(this).find("textarea").val();

        // Show success message (you can replace this with actual form submission)
        alert("Thank you for your message! We will get back to you soon.");

        // Reset form
        this.reset();

        // In a real implementation, you would send this data to your server
        // Example:
        // $.ajax({
        //     url: 'your-backend-endpoint',
        //     method: 'POST',
        //     data: {
        //         name: name,
        //         email: email,
        //         subject: subject,
        //         message: message
        //     },
        //     success: function(response) {
        //         alert('Message sent successfully!');
        //     },
        //     error: function() {
        //         alert('There was an error sending your message. Please try again.');
        //     }
        // });
    });

    // ===========================
    // Newsletter Form Submission
    // ===========================
    $("#newsletterForm").on("submit", function (e) {
        e.preventDefault();

        var email = $(this).find('input[type="email"]').val();

        // Show success message
        alert("Thank you for subscribing to our newsletter!");

        // Reset form
        this.reset();

        // In a real implementation, you would send this to your server
        // $.ajax({
        //     url: 'your-newsletter-endpoint',
        //     method: 'POST',
        //     data: { email: email },
        //     success: function(response) {
        //         alert('Successfully subscribed!');
        //     }
        // });
    });

    // ===========================
    // Scroll Indicator Animation
    // ===========================
    $(".scroll-indicator").on("click", function () {
        $("html, body").animate(
            {
                scrollTop: $(".stats-section").offset().top - 70,
            },
            800
        );
    });

    // Hide scroll indicator after scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".scroll-indicator").fadeOut();
        } else {
            $(".scroll-indicator").fadeIn();
        }
    });

    // ===========================
    // Add Active Class to Current Nav Item
    // ===========================
    $(window).on("scroll", function () {
        var scrollPos = $(document).scrollTop() + 100;

        $(".nav-link").each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

            if (
                refElement.length &&
                refElement.position().top <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos
            ) {
                $(".nav-link").removeClass("active");
                currLink.addClass("active");
            }
        });
    });

    // ===========================
    // Parallax Effect for Hero Section
    // ===========================
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        $(".hero-content").css("transform", "translateY(" + scrolled * 0.3 + "px)");
        $(".hero-overlay").css("opacity", 1 - scrolled / 500);
    });

    // ===========================
    // Service Card Hover Effect
    // ===========================
    $(".service-card").hover(
        function () {
            $(this).find(".service-icon").addClass("animated-icon");
        },
        function () {
            $(this).find(".service-icon").removeClass("animated-icon");
        }
    );

    // ===========================
    // Loading Animation
    // ===========================
    $(window).on("load", function () {
        $("body").addClass("loaded");
    });



});
