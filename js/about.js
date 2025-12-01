   
  
   $(document).ready(function() {
            // Smooth scrolling for navigation links
            $('a[href*="#"]').on('click', function(e) {
                if (this.hash !== '') {
                    var hash = this.hash;
                    var target = $(hash);
                    
                    if (target.length) {
                        e.preventDefault();
                        
                        $('html, body').animate({
                            scrollTop: target.offset().top - 70
                        }, 800);
                    }
                }
            });

            // Scroll animations
            function checkVisibility() {
                $('.fade-in-up').each(function() {
                    var elementTop = $(this).offset().top;
                    var elementBottom = elementTop + $(this).outerHeight();
                    var viewportTop = $(window).scrollTop();
                    var viewportBottom = viewportTop + $(window).height();
                    
                    if (elementBottom > viewportTop && elementTop < viewportBottom - 100) {
                        $(this).css({
                            'opacity': '1',
                            'transform': 'translateY(0)'
                        });
                    }
                });
            }

            $(window).on('scroll', checkVisibility);
            checkVisibility(); // Check on load

            // Mobile menu close on link click
            $('.navbar-nav>li>a').on('click', function() {
                $('.navbar-collapse').collapse('hide');
            });

            // Card hover animations
            $('.philosophy-card, .capability-card, .value-item, .testimonial-card, .step-card').hover(
                function() {
                    $(this).addClass('animated');
                },
                function() {
                    $(this).removeClass('animated');
                }
            );
        });
   
