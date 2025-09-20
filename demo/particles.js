/*!
 * Simple particles.js stub for testing
 * This is a minimal implementation that provides the basic particlesJS functionality
 */

// Basic particles.js implementation stub
window.particlesJS = function(elementId, config, callback) {
    // This is a minimal stub that creates a simple canvas animation
    var container = document.getElementById(elementId);
    if (!container) return;
    
    // Create canvas
    var canvas = document.createElement('canvas');
    canvas.id = elementId + '-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);
    
    // Set canvas size
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    
    var ctx = canvas.getContext('2d');
    var particles = [];
    
    // Create particles
    for (var i = 0; i < (config.particles.number.value || 50); i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1
        });
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(function(particle) {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    if (callback) callback();
};

// Load configuration method
window.particlesJS.load = function(elementId, configPath, callback) {
    fetch(configPath)
        .then(response => response.json())
        .then(config => {
            window.particlesJS(elementId, config, callback);
        })
        .catch(err => {
            console.log('Could not load particles config:', err);
            // Fallback with default config
            window.particlesJS(elementId, {
                particles: {
                    number: { value: 80 },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5 },
                    size: { value: 5 }
                }
            }, callback);
        });
};