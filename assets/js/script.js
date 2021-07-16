window.addEventListener('contextmenu', function(e) {
    // do something here... 
    e.preventDefault();
}, false);

// smooth scrolling
butter.init({
    wrapperId: 'butter'
});