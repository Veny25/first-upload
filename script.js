document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                console.log('Navigation link clicked: ' + this.textContent);
            });
        });
    }
}
const someButton = document.getElementById('someButtonId');
if (someButton) {
    someButton.addEventListener('click', function() {
        console.log('Button clicked!');
    });
}

  
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Form submitted!');
            
        });
    }
    const serviceDetail = document.getElementById('serviceDetail');
    if (serviceDetail) {
        serviceDetail.addEventListener('mouseover', function() {
            console.log('Mouse over service detail!');
        });
    const toggleSectionButton = document.getElementById('toggleSectionButton');
    const sectionToToggle = document.getElementById('sectionToToggle');
    if (toggleSectionButton && sectionToToggle) {
        toggleSectionButton.addEventListener('click', function() {
            if (sectionToToggle.style.display === 'none') {
                sectionToToggle.style.display = 'block';
            } else {
                sectionToToggle.style.display = 'none';
            }
        });
    }
    const elementsWithClass = document.querySelectorAll('.clickable-element');
    if (elementsWithClass.length > 0) {
        elementsWithClass.forEach(element => {
            element.addEventListener('click', function() {
                console.log('Clickable element clicked: ' + this.textContent);
            });
        });
    }

};
