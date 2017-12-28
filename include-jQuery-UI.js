javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {
        jQuery.noConflict();
        console.log('jQuery injected');
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js')

javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {       
        console.log('jQuery UI injected');
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/ui/1.11.4/jquery-ui.min.js')
