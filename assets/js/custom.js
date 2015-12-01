$(function() {
        $(".rslides").responsiveSlides({
                auto: false,             // Boolean: Animate automatically, true or false
                speed: 1200,            // Integer: Speed of the transition, in milliseconds
                timeout: 4800,          // Integer: Time between slide transitions, in milliseconds
                pager: true,            // Boolean: Show pager, true or false
                nav: true,              // Boolean: Show navigation, true or false
                random: false,          // Boolean: Randomize the order of the slides, true or false
                pause: false,           // Boolean: Pause on hover, true or false
                pauseControls: false,   // Boolean: Pause when hovering controls, true or false
                prevText: '',    // String: Text for the "previous" button
                nextText: '',    // String: Text for the "next" button
                maxwidth: '',           // Integer: Max-width of the slideshow, in pixels
                navContainer: '',       // Selector: Where auto generated controls should be appended to, default is after the <ul>
                manualControls: '',     // Selector: Declare custom pager navigation
                namespace: 'rslides',   // String: change the default namespace used
                before: function () {}, // Function: Before callback
                after: function () {}   // Function: After callback
          });
      });