document.addEventListener('DOMContentLoaded', function() {
    // Create footer element
    const footer = document.createElement('footer');
    footer.className = 'developer-footer';
    
    footer.innerHTML = `
        <div class="developer-info">
            <h2>👨‍💻 Developer Info</h2>
            <h3>Leo Tito Mwahalende</h3>
            <div class="dev-details">
                <p><strong>Full-Stack Developer | Electronics & Communication Engineer</strong></p>
                
                <p>📍 Dar es Salaam, Tanzania</p>
                
                <p>🎓 BSc in Electronics Science and Communication<br>(UDSM, 2022–2025)</p>
                
                <div class="contact-links">
                    <p>
                        📧 <a href="mailto:leomwahalende@gmail.com">leomwahalende@gmail.com</a> |
                        ☎️ <a href="tel:+255686962149">+255 686 962 149</a>
                    </p>
                    <p>
                        🔗 <a href="https://www.linkedin.com/in/leo-mwahalende" target="_blank">LinkedIn</a> |
                        <a href="https://github.com/leomwahalende" target="_blank">GitHub</a>
                    </p>
                </div>
            </div>
            
            <p class="dev-bio">
                Developer of this platform, passionate about tech solutions that empower local industries 
                and improve access through innovation.
            </p>
        </div>
    `;
    
    // Add footer to the page
    document.body.appendChild(footer);
});
