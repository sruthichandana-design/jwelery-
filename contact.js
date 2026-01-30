// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            // Show success message
            showSuccessMessage('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Log form data (in production, this would send to a server)
            console.log('Form submitted:', formData);
        });
    }
});

// Success Message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem 3rem;
        border: 1px solid #E5E1D8;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        text-align: center;
        max-width: 400px;
    `;
    
    successDiv.innerHTML = `
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">✓</div>
        <div style="font-size: 1.1rem; color: #3A3A3A; margin-bottom: 1.5rem;">${message}</div>
        <button onclick="this.parentElement.remove()" style="
            padding: 0.8rem 2rem;
            background: #C9A961;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 0.9rem;
            letter-spacing: 1px;
        ">Close</button>
    `;
    
    document.body.appendChild(successDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (successDiv.parentElement) {
            successDiv.remove();
        }
    }, 5000);
}