// Función para crear estrellas
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Posición aleatoria
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Tamaño aleatorio entre 1 y 3 px
        const size = Math.random() * 2 + 1;
        
        // Duración del parpadeo aleatoria entre 1 y 3 segundos
        const duration = Math.random() * 2 + 1;
        
        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            --duration: ${duration}s;
        `;
        
        starsContainer.appendChild(star);
    }
}

// Función para el efecto de teletransporte
function startTeleport(destination) {
    const blackHole = document.querySelector('.black-hole');
    const teleportMessage = document.querySelector('.teleport-message');
    
    // Mostrar el agujero negro
    blackHole.style.display = 'block';
    
    // Después de 1.5 segundos, mostrar el mensaje
    setTimeout(() => {
        teleportMessage.style.display = 'block';
    }, 1500);
    
    // Después de 2.5 segundos, redirigir
    setTimeout(() => {
        window.location.href = destination;
    }, 2500);
}

// Funciones para el modal de configuración
function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Crear estrellas dinámicamente
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        starsContainer.appendChild(star);
    }
}

// Toggle de la barra lateral
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const collapseBtn = document.querySelector('.collapse-btn i');
    
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('sidebar-collapsed');
    
    // Cambiar el ícono de la flecha
    if (sidebar.classList.contains('collapsed')) {
        collapseBtn.classList.replace('fa-chevron-left', 'fa-chevron-right');
    } else {
        collapseBtn.classList.replace('fa-chevron-right', 'fa-chevron-left');
    }
}

// Toggle del chat
function toggleChat() {
    const chatPanel = document.querySelector('.chat-panel');
    chatPanel.classList.toggle('active');
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Efecto RGB para botones
function addRGBEffect() {
    const buttons = document.querySelectorAll('.sidebar-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('rgb-effect');
        });
        
        button.addEventListener('mouseout', () => {
            button.classList.remove('rgb-effect');
        });
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    addRGBEffect();

    // Event Listeners
    document.querySelector('.collapse-btn').addEventListener('click', toggleSidebar);
    
    // Manejo de acciones de los botones
    document.querySelectorAll('.sidebar-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.currentTarget.dataset.action;
            switch(action) {
                case 'chat':
                    toggleChat();
                    break;
                case 'subscribe':
                    showNotification('¡Gracias por tu interés en suscribirte!');
                    break;
                case 'donate':
                    showNotification('¡Gracias por tu interés en donar!');
                    break;
                case 'news':
                    showNotification('Cargando noticias...', 'info');
                    break;
                case 'settings':
                    showNotification('Abriendo configuración...', 'info');
                    break;
            }
        });
    });
});

// Efectos de nieve
function updateSnowfall() {
    const snowWrap = document.querySelector('.snow_wrap');
    if (window.innerWidth !== prevWidth || window.innerHeight !== prevHeight) {
        prevWidth = window.innerWidth;
        prevHeight = window.innerHeight;
        snowWrap.style.width = `${window.innerWidth}px`;
        snowWrap.style.height = `${window.innerHeight}px`;
    }
    requestAnimationFrame(updateSnowfall);
}

let prevWidth = window.innerWidth;
let prevHeight = window.innerHeight;
updateSnowfall();


// Función para crear cometas
function createComet() {
    const body = document.body;
    const comet = document.createElement('div');
    
    // Determinar tamaño aleatorio
    const sizes = ['small', 'medium', 'large'];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    comet.className = `comet ${size}`;
    
    // Posición inicial aleatoria en el eje Y
    const startY = Math.random() * window.innerHeight;
    comet.style.top = `${startY}px`;
    
    // Velocidad aleatoria (ajustando la duración de la animación)
    const duration = Math.random() * 3 + 6; // Entre 6 y 9 segundos
    comet.style.animationDuration = `${duration}s`;
    
    // Dirección aleatoria
    if (Math.random() > 0.5) {
        comet.style.animationName = 'comet-reverse';
    }
    
    // Brillo aleatorio
    const brightness = Math.random() * 0.5 + 0.5; // Entre 0.5 y 1
    comet.style.opacity = brightness;
    
    body.appendChild(comet);
    
    // Remover el cometa después de la animación
    setTimeout(() => {
        comet.remove();
    }, duration * 1000);
}

// Función para crear varios cometas con intervalos aleatorios
function startCometSystem() {
    // Crear cometas iniciales
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createComet();
        }, i * 2000); // Espaciados por 2 segundos
    }
    
    // Crear nuevos cometas periódicamente
    setInterval(() => {
        if (Math.random() > 0.5) { // 50% de probabilidad cada 3-8 segundos
            createComet();
        }
    }, Math.random() * 5000 + 3000); // Entre 3 y 8 segundos
}

// Actualiza el Event Listener en tu código existente
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar estrellas
    createStars();
    
    // Inicializar sistema de cometas
    startCometSystem();
    
    document.querySelector('.btn:nth-child(2)').addEventListener('click', openSettings);
    document.getElementById('overlay').addEventListener('click', closeSettings);
});