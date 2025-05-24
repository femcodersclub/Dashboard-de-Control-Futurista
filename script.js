// Variables globales
        let systemPower = 0;
        let isAutoMode = false;
        let systemActive = false;

        // Inicialización
        document.addEventListener('DOMContentLoaded', function() {
            initializeControls();
            startSystemAnimation();
        });

        function initializeControls() {
            // Botones circulares
            document.querySelectorAll('.circular-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const action = this.dataset.action;
                    handleButtonAction(action);
                    
                    // Efecto visual del clic
                    this.style.transform = 'translateZ(5px) scale(0.9)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                });
            });

            // Toggle switches
            document.getElementById('mainToggle').addEventListener('click', function() {
                systemActive = !systemActive;
                this.classList.toggle('active');
                updateSystemStatus();
            });

            document.getElementById('autoToggle').addEventListener('click', function() {
                isAutoMode = !isAutoMode;
                this.classList.toggle('active');
                if (isAutoMode) {
                    startAutoMode();
                } else {
                    stopAutoMode();
                }
            });

            // Sliders
            setupSliders();
        }

        function setupSliders() {
            const sliders = [
                { id: 'speedSlider', valueId: 'speedValue', suffix: '%' },
                { id: 'tempSlider', valueId: 'tempValue', suffix: '°C' },
                { id: 'volumeSlider', valueId: 'volumeValue', suffix: '%' }
            ];

            sliders.forEach(slider => {
                const element = document.getElementById(slider.id);
                const valueElement = document.getElementById(slider.valueId);
                
                element.addEventListener('input', function() {
                    valueElement.textContent = this.value;
                    
                    // Actualizar medidor de energía basado en configuración
                    if (slider.id === 'speedSlider') {
                        updatePowerGauge(parseInt(this.value));
                    }
                });

                // Efecto visual al interactuar
                element.addEventListener('mousedown', function() {
                    this.style.transform = 'scale(1.02)';
                });

                element.addEventListener('mouseup', function() {
                    this.style.transform = '';
                });
            });
        }

        function handleButtonAction(action) {
            switch(action) {
                case 'power':
                    togglePower();
                    break;
                case 'settings':
                    showSettings();
                    break;
                case 'scan':
                    performScan();
                    break;
            }
        }

        function togglePower() {
            systemPower = systemPower === 0 ? 100 : 0;
            updatePowerGauge(systemPower);
            
            // Efecto visual en todo el dashboard
            if (systemPower > 0) {
                document.body.style.filter = 'brightness(1.1) saturate(1.2)';
            } else {
                document.body.style.filter = 'brightness(0.8) saturate(0.8)';
            }
        }

        function showSettings() {
            // Animación de todos los paneles
            document.querySelectorAll('.control-panel').forEach((panel, index) => {
                setTimeout(() => {
                    panel.style.transform = 'translateY(-20px) rotateX(10deg)';
                    setTimeout(() => {
                        panel.style.transform = '';
                    }, 300);
                }, index * 100);
            });
        }

        function performScan() {
            // Animación de escaneo
            const statusItems = document.querySelectorAll('.status-value');
            statusItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.color = '#ff6b6b';
                    item.style.transform = 'scale(1.2)';
                    
                    setTimeout(() => {
                        item.style.color = '#00ff88';
                        item.style.transform = '';
                        // Actualizar con valores aleatorios
                        item.textContent = Math.floor(Math.random() * 100) + '%';
                    }, 500);
                }, index * 150);
            });
        }

        function updatePowerGauge(value) {
            const gauge = document.getElementById('powerGauge');
            const needle = document.getElementById('powerNeedle');
            const valueDisplay = document.getElementById('powerValue');
            
            const rotation = (value / 100) * 270 - 135; // -135 a 135 grados
            const gaugeAngle = (value / 100) * 270;
            
            needle.style.setProperty('--needle-rotation', rotation + 'deg');
            gauge.style.setProperty('--gauge-value', gaugeAngle + 'deg');
            valueDisplay.textContent = value;
            
            // Cambiar color según el valor
            if (value > 80) {
                needle.style.background = 'linear-gradient(to top, #ff6b6b, #ff0040)';
            } else if (value > 50) {
                needle.style.background = 'linear-gradient(to top, #ffeb3b, #ff9800)';
            } else {
                needle.style.background = 'linear-gradient(to top, #4caf50, #00ff88)';
            }
        }

        function updateSystemStatus() {
            const statusPanel = document.querySelector('.status-panel');
            
            if (systemActive) {
                statusPanel.classList.add('pulse-animation');
                // Simular actividad del sistema
                setInterval(() => {
                    if (systemActive) {
                        updateRandomStats();
                    }
                }, 2000);
            } else {
                statusPanel.classList.remove('pulse-animation');
            }
        }

        function updateRandomStats() {
            const stats = ['cpuStatus', 'memoryStatus', 'networkStatus', 'storageStatus'];
            
            stats.forEach(statId => {
                const element = document.getElementById(statId);
                const newValue = Math.floor(Math.random() * 100);
                
                // Animación de cambio
                element.style.transform = 'scale(0.8)';
                element.style.opacity = '0.5';
                
                setTimeout(() => {
                    element.textContent = newValue + '%';
                    element.style.transform = 'scale(1)';
                    element.style.opacity = '1';
                    
                    // Color según el valor
                    if (newValue > 80) {
                        element.style.color = '#ff6b6b';
                    } else if (newValue > 50) {
                        element.style.color = '#ffeb3b';
                    } else {
                        element.style.color = '#00ff88';
                    }
                }, 200);
            });
        }

        function startAutoMode() {
            if (autoModeInterval) clearInterval(autoModeInterval);
            
            // Indicador visual de modo automático
            document.body.style.filter = 'hue-rotate(30deg)';
            
            autoModeInterval = setInterval(() => {
                // 1. Cambiar sliders automáticamente
                const sliders = ['speedSlider', 'tempSlider', 'volumeSlider'];
                const randomSlider = sliders[Math.floor(Math.random() * sliders.length)];
                const slider = document.getElementById(randomSlider);
                const newValue = Math.floor(Math.random() * 100);
                
                // Animación más dramática del slider
                slider.parentElement.style.transform = 'scale(1.1) translateZ(20px)';
                slider.parentElement.style.borderLeft = '4px solid #00ff88';
                slider.style.filter = 'brightness(2) saturate(2)';
                
                slider.value = newValue;
                slider.dispatchEvent(new Event('input'));
                
                setTimeout(() => {
                    slider.parentElement.style.transform = '';
                    slider.parentElement.style.borderLeft = '';
                    slider.style.filter = '';
                }, 800);
                
                // 2. Cambiar medidor de energía automáticamente
                const powerValue = Math.floor(Math.random() * 100);
                updatePowerGauge(powerValue);
                
                // 3. Actualizar estado del sistema automáticamente
                updateRandomStats();
                
                // 4. Simular actividad en botones (parpadeo)
                const buttons = document.querySelectorAll('.circular-btn');
                const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
                
                randomButton.style.background = 'linear-gradient(145deg, #00ff88, #00cc66)';
                randomButton.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.8)';
                randomButton.style.transform = 'translateZ(15px) scale(1.05)';
                
                setTimeout(() => {
                    randomButton.style.background = '';
                    randomButton.style.boxShadow = '';
                    randomButton.style.transform = '';
                }, 600);
                
                // 5. Hacer que el título "pulse" en modo automático
                const title = document.querySelector('.dashboard-title');
                title.style.transform = 'scale(1.02) rotateX(2deg)';
                title.style.textShadow = `
                    0 0 20px #00ff88,
                    0 0 40px #00ff88,
                    0 0 60px #00ff88
                `;
                
                setTimeout(() => {
                    title.style.transform = '';
                    title.style.textShadow = `
                        0 0 10px #00ffff,
                        0 0 20px #00ffff,
                        0 0 30px #00ffff
                    `;
                }, 400);
                
                // 6. Animar el panel de estado
                const statusPanel = document.querySelector('.status-panel');
                statusPanel.style.transform = 'translateZ(40px) rotateX(-8deg)';
                statusPanel.style.boxShadow = '0 40px 80px rgba(0, 255, 136, 0.3)';
                
                setTimeout(() => {
                    statusPanel.style.transform = '';
                    statusPanel.style.boxShadow = '';
                }, 600);
                
            }, 2000); // Cada 2 segundos
        }

        function stopAutoMode() {
            if (autoModeInterval) {
                clearInterval(autoModeInterval);
            }
            
            // Restaurar colores normales
            document.body.style.filter = '';
            
            // Mensaje visual de que se desactivó
            const title = document.querySelector('.dashboard-title');
            title.style.color = '#ff6b6b';
            setTimeout(() => {
                title.style.color = '#00ffff';
            }, 1000);
        }

        function startSystemAnimation() {
            // Animación continua de elementos
            setInterval(() => {
                const title = document.querySelector('.dashboard-title');
                if (Math.random() > 0.7) {
                    title.style.textShadow = `
                        0 0 ${Math.random() * 20 + 10}px #00ffff,
                        0 0 ${Math.random() * 40 + 20}px #00ffff,
                        0 0 ${Math.random() * 60 + 30}px #00ffff
                    `;
                }
            }, 1000);
        }

        let autoModeInterval;

        // Efectos de teclado
        document.addEventListener('keydown', function(e) {
            if (e.code === 'Space') {
                e.preventDefault();
                togglePower();
            }
        });

        // Inicializar medidor con valor inicial
        setTimeout(() => {
            updatePowerGauge(0);
        }, 500);