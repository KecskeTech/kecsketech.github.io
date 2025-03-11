// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Add projects dynamically
    const projects = [
        { title: 'Custom Stream Deck', description: 'DIY hardware controller for live streaming' },
        { title: 'Home Server Setup', description: 'Personal cloud server using Raspberry Pi' },
        { title: 'Game Mod', description: 'Custom modification for popular indie game' },
        { title: '3D Printed Gadgets', description: 'Custom tech accessories and modifications' }
    ];

    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3 class="gradient-text">${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectGrid.appendChild(card);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in effects
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .terminal').forEach(el => {
        observer.observe(el);
    });
});
