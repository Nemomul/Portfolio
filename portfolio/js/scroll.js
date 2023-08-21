document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        let hrefValue = this.getAttribute('href');
        
        if (hrefValue !== '#!' && hrefValue !== '#') {
            e.preventDefault();
            
            document.querySelector(hrefValue).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
