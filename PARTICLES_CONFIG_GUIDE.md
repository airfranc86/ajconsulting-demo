# Particles.js - Guía de Configuración Rápida

## 🎯 Resumen
Esta guía te ayuda a personalizar rápidamente los efectos de particles.js en tu sitio web.

## 📍 Ubicación del Código
**Archivo**: `index.html`  
**Línea**: ~1130-1220  
**Función**: `initParticles()`

## ⚙️ Configuraciones Más Comunes

### 🔢 Cantidad de Partículas
```javascript
"number": {
    "value": 80,        // Cambiar este número
    "density": {
        "enable": true,
        "value_area": 800   // Área de distribución
    }
}
```
- **Menos partículas** (40-60): Mejor rendimiento, efecto sutil
- **Más partículas** (100-150): Efecto más dramático, mayor uso de CPU

### 🎨 Colores y Apariencia
```javascript
"color": {
    "value": "#ffffff"  // Color hexadecimal
},
"opacity": {
    "value": 0.5       // Transparencia (0.1 a 1.0)
}
```

**Colores sugeridos por tema**:
- Corporativo: `#ffffff`, `#e3f2fd`, `#bbdefb`
- Tecnológico: `#00bcd4`, `#4fc3f7`, `#81c784`
- Elegante: `#f5f5f5`, `#eeeeee`, `#e0e0e0`

### ⚡ Velocidad y Movimiento
```javascript
"move": {
    "enable": true,
    "speed": 6,             // Velocidad (1-20)
    "direction": "none"     // Dirección del movimiento
}
```

**Direcciones disponibles**:
- `"none"`: Movimiento aleatorio
- `"top"`: Hacia arriba
- `"bottom"`: Hacia abajo
- `"left"`: Hacia la izquierda
- `"right"`: Hacia la derecha

### 🔗 Líneas Conectoras
```javascript
"line_linked": {
    "enable": true,         // true/false para activar/desactivar
    "distance": 150,        // Distancia máxima de conexión
    "color": "#ffffff",     // Color de las líneas
    "opacity": 0.4,         // Transparencia de líneas
    "width": 1              // Grosor de líneas
}
```

### 🖱️ Interactividad
```javascript
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"   // Efecto al pasar mouse
        },
        "onclick": {
            "enable": true,
            "mode": "push"      // Efecto al hacer clic
        }
    }
}
```

**Modos de hover**:
- `"grab"`: Conecta partículas al cursor
- `"bubble"`: Agranda partículas cerca del cursor
- `"repulse"`: Aleja partículas del cursor

**Modos de click**:
- `"push"`: Agrega nuevas partículas
- `"remove"`: Elimina partículas
- `"bubble"`: Efecto burbuja temporal

## 🎭 Configuraciones Predefinidas

### Efecto Sutil (Recomendado para Business)
```javascript
"particles": {
    "number": { "value": 50 },
    "color": { "value": "#ffffff" },
    "opacity": { "value": 0.3 },
    "size": { "value": 3 },
    "line_linked": {
        "enable": true,
        "distance": 120,
        "opacity": 0.2
    },
    "move": { "speed": 2 }
}
```

### Efecto Dramático (Para Impacto Visual)
```javascript
"particles": {
    "number": { "value": 120 },
    "color": { "value": "#00bcd4" },
    "opacity": { "value": 0.7 },
    "size": { "value": 6 },
    "line_linked": {
        "enable": true,
        "distance": 200,
        "opacity": 0.6
    },
    "move": { "speed": 8 }
}
```

### Efecto Mínimo (Máximo Rendimiento)
```javascript
"particles": {
    "number": { "value": 30 },
    "color": { "value": "#f5f5f5" },
    "opacity": { "value": 0.2 },
    "size": { "value": 2 },
    "line_linked": { "enable": false },
    "move": { "speed": 1 }
}
```

## 🚫 Desactivar Particles.js

Para desactivar completamente el efecto:

```javascript
// Opción 1: Comentar la función
// initParticles();

// Opción 2: Ocultar el contenedor
document.getElementById('particles-js').style.display = 'none';

// Opción 3: Configurar con 0 partículas
"number": { "value": 0 }
```

## 🔧 Solución de Problemas

### Problema: Particles no aparecen
1. Verificar que el div `#particles-js` existe
2. Comprobar errores en la consola del navegador
3. Verificar que la función `initParticles()` se ejecuta

### Problema: Rendimiento lento
1. Reducir `number.value` (menos partículas)
2. Reducir `move.speed` (movimiento más lento)
3. Desactivar `line_linked` si no es necesario
4. Reducir `opacity` para efecto más sutil

### Problema: CDN no carga
El sistema incluye fallback automático al archivo local. Si ambos fallan:
1. Verificar conexión a internet
2. Comprobar que `/demo/particles.js` existe
3. Revisar configuración de CORS/CSP del servidor

## 📱 Consideraciones Móviles

Para mejorar rendimiento en móviles, considera:

```javascript
// Detectar dispositivo móvil y ajustar
if (window.innerWidth < 768) {
    particlesConfig.particles.number.value = 30;  // Menos partículas
    particlesConfig.particles.move.speed = 3;     // Más lento
    particlesConfig.particles.line_linked.enable = false; // Sin líneas
}
```

## 💡 Tips de Personalización

1. **Tema Oscuro**: Usa partículas blancas (#ffffff) con baja opacidad
2. **Tema Claro**: Usa partículas grises (#666666) con opacidad media
3. **Marca Corporativa**: Usa los colores de tu empresa
4. **Eventos Especiales**: Cambia colores según temporada/evento

## 🎨 Herramientas Útiles

- **Generador Visual**: https://vincentgarreau.com/particles.js/
- **Paleta de Colores**: https://coolors.co/
- **Convertidor Hex**: https://www.rapidtables.com/convert/color/

---

¡Experimenta con diferentes valores para encontrar el efecto perfecto para tu sitio! 🚀