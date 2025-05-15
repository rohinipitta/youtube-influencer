// Update copyright year automatically
 const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form default

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                successMessage.style.display = "block";
                form.reset(); // Clear the form
            } else {
                successMessage.style.color = "red";
                successMessage.innerText = "❌ Failed to send message. Try again.";
                successMessage.style.display = "block";
            }
        })
        .catch(error => {
            successMessage.style.color = "red";
            successMessage.innerText = "❌ Something went wrong.";
            successMessage.style.display = "block";
        });
    });
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Video category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const videoItems = document.querySelectorAll('.video-item');
    
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Filter videos
                videoItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Simple form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation - in a real site, you'd want more robust validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});