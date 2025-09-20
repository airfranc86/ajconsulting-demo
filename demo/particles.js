/* particles.js 2.0.0 - A lightweight JavaScript library for creating particles. MIT licensed. */
(function(window){
  'use strict';
  
  var pJS = {};
  
  // Mock implementation for particles.js
  function particlesJS(tag_id, params) {
    var canvas_el = document.querySelector('#' + tag_id);
    if (!canvas_el) {
      console.error('particlesJS: Element with id "' + tag_id + '" not found.');
      return;
    }
    
    // Store particles data globally for stats integration
    if (!window.pJSDom) {
      window.pJSDom = [];
    }
    
    // Create a simple particles system mock
    var particles_array = [];
    var particle_count = params.particles ? (params.particles.number ? params.particles.number.value || 40 : 40) : 40;
    
    // Initialize particles array
    for (var i = 0; i < particle_count; i++) {
      particles_array.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
      });
    }
    
    // Store in global pJSDom for stats
    window.pJSDom[0] = {
      pJS: {
        particles: {
          array: particles_array
        }
      }
    };
    
    // Set canvas style to match the container
    canvas_el.style.position = 'fixed';
    canvas_el.style.top = '0';
    canvas_el.style.left = '0';
    canvas_el.style.width = '100%';
    canvas_el.style.height = '100%';
    canvas_el.style.zIndex = '0';
    
    // Simple visual feedback - set background color if specified
    if (params.particles && params.particles.color && params.particles.color.value) {
      var color = params.particles.color.value;
      canvas_el.style.background = 'radial-gradient(circle, ' + color + '22, transparent)';
    }
    
    console.log('particles.js loaded with ' + particle_count + ' particles');
  }
  
  // Load function for JSON config
  particlesJS.load = function(tag_id, path_config_json, callback) {
    fetch(path_config_json)
      .then(response => response.json())
      .then(config => {
        particlesJS(tag_id, config);
        if (callback) callback();
      })
      .catch(error => {
        console.error('Error loading particles config:', error);
        // Fallback to basic config
        particlesJS(tag_id, {
          particles: {
            number: { value: 40 },
            color: { value: "#ffffff" }
          }
        });
        if (callback) callback();
      });
  };
  
  // Export to global scope
  window.particlesJS = particlesJS;
  
})(window);