# 🚀 Dashboard de Control Futurista

Un dashboard interactivo construido con **HTML5**, **CSS3** y **JavaScript vanilla** que demuestra el poder de las **transformaciones CSS 2D y 3D** para crear interfaces futuristas e inmersivas.

![Dashboard Preview](/dashboard.gif)

## ✨ Características Principales

### 🎛️ **Sistema Principal**

El toggle "Sistema Principal" controla el estado general del dashboard:

- **🔴 Desactivado (por defecto)**: El dashboard está en modo de espera
- **🟢 Activado**:
  - Activa el monitoreo en tiempo real del sistema
  - Los indicadores de estado (CPU, Memoria, Red, Almacenamiento) se actualizan automáticamente cada 2 segundos
  - El panel de estado adquiere una animación de "pulso" continua
  - Los valores cambian con colores dinámicos según el rendimiento:
    - 🟢 Verde (0-50%): Rendimiento óptimo
    - 🟡 Amarillo (51-80%): Rendimiento moderado  
    - 🔴 Rojo (81-100%): Rendimiento crítico

### 🤖 Modo Automático

El toggle "Modo Automático" convierte el dashboard en una demostración interactiva:
Cuando se activa (cada 2 segundos):

🎨 Cambio visual global: Todo el dashboard cambia a tonos verdes futuristas
🎚️ Control automático de sliders:

Selecciona aleatoriamente un slider (Velocidad, Temperatura o Volumen)
Lo escala y resalta con efectos de neón verde
Cambia su valor automáticamente

⚡ Medidor de energía dinámico: Se actualiza con valores aleatorios
📊 Estado del sistema en vivo: Actualiza automáticamente CPU, Memoria, Red y Almacenamiento
🔘 Botones reactivos: Los botones circulares se iluminan aleatoriamente
✨ Título pulsante: El título principal cambia a color verde neón y "pulsa"
📈 Panel de estado animado: El panel de métricas se eleva con efectos 3D

#### Cuando se desactiva

- Restaura todos los colores originales (azul cian)
- El título se pone rojo momentáneamente para confirmar la desactivación
- Detiene todas las animaciones automáticas

## 🎮 Controles Interactivos

### 🔵 **Botones Circulares**

- **⚡ Power**: Alterna entre encendido/apagado del sistema (0% ↔ 100% energía)
- **⚙️ Settings**: Activa una secuencia de animación en todos los paneles
- **🔍 Scan**: Simula un escaneo del sistema actualizando todos los indicadores

### 🎚️ **Sliders de Configuración**

- **Velocidad**: Controla la velocidad del sistema (0-100%)
- **Temperatura**: Monitorea la temperatura (0-100°C)
- **Volumen**: Ajusta el nivel de audio (0-100%)

### 📊 **Medidor de Energía**

- Medidor circular con aguja dinámica
- Cambia de color según el nivel:
  - Verde: 0-50%
  - Amarillo: 51-80%
  - Rojo: 81-100%

### 📈 **Panel de Estado del Sistema**

Muestra métricas en tiempo real:

- **CPU**: Uso del procesador
- **Memoria**: Uso de RAM
- **Red**: Estado de conectividad
- **Almacenamiento**: Espacio utilizado

## 🛠️ Tecnologías y Técnicas CSS

### 🎨 **Transformaciones 2D**

```css
/* Ejemplos implementados */
transform: scale(1.1);                    /* Escalado */
transform: translateY(-10px);             /* Traslación */
transform: rotate(180deg);                /* Rotación */
transform: scale(1.05) rotate(5deg);      /* Combinadas */
```

### 🌟 **Transformaciones 3D**

```css
/* Perspectiva y profundidad */
perspective: 1000px;
transform-style: preserve-3d;
transform: translateZ(20px) rotateX(5deg) rotateY(2deg);
```

### ⚡ **Transiciones Avanzadas**

```css
/* Curvas de animación personalizadas */
transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### 🎆 **Efectos Visuales**

- **Neón**: `text-shadow` y `box-shadow` con colores brillantes
- **Glassmorphism**: `backdrop-filter: blur(10px)`
- **Gradientes**: `linear-gradient` y `conic-gradient`
- **Animaciones**: `@keyframes` para pulsos y rotaciones

## 🚀 Cómo Usar

1. **Clona o descarga** el proyecto
2. **Abre** `index.html` en tu navegador
3. **Interactúa** con los controles:
   - Activa el "Sistema Principal" para ver el monitoreo en vivo
   - Activa el "Modo Automático" para la demostración automática
   - Experimenta con los botones y sliders
   - Usa la **barra espaciadora** para alternar la energía rápidamente

## 📱 Responsive Design

El dashboard se adapta automáticamente a diferentes tamaños de pantalla:

- **Desktop**: Experiencia completa con todos los efectos 3D
- **Tablet**: Grid adaptativo manteniendo la funcionalidad
- **Mobile**: Interfaz optimizada con controles táctiles

## 🎯 Propósito Educativo

Este proyecto fue creado para demostrar:

### **Nivel Principiante**

- Estructura HTML semántica
- Propiedades CSS básicas de `transform`
- Eventos JavaScript simples

### **Nivel Intermedio**

- Transformaciones 2D combinadas
- Transiciones con timing functions
- Manipulación del DOM

### **Nivel Avanzado**

- Perspectiva y transformaciones 3D
- CSS custom properties dinámicas
- Arquitectura JavaScript modular
- Optimización de rendimiento

## 🎨 Paleta de Colores

- **Primary**: `#00ffff` (Cian brillante)
- **Secondary**: `#00ff88` (Verde neón)
- **Accent**: `#ff6b6b` (Rojo coral)
- **Background**: `linear-gradient(135deg, #0c0c0c, #1a1a2e, #16213e)`
- **Glass**: `rgba(0, 255, 255, 0.05)` con `backdrop-filter`

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Puedes:

1. **Reportar bugs** o sugerir mejoras
2. **Añadir nuevos efectos** de transformación
3. **Mejorar la accesibilidad** (motion-reduce, contraste)
4. **Optimizar el rendimiento** para dispositivos móviles

## 🏆 Créditos

**Desarrollado con ❤️ por [FemCoders Club](https://www.femcodersclub.com)**

Comunidad Líder de Mujeres en Tecnología

---

### 💡 **Tip para Desarrolladores**

Este dashboard es perfecto para aprender transformaciones CSS porque puedes:

1. **Ver el código fuente** para entender cada efecto
2. **Modificar los valores** en tiempo real usando DevTools
3. **Experimentar** con nuevas transformaciones
4. **Usar como base** para tus propios proyectos

¡Abre las DevTools y experimenta con las propiedades `transform` para ver la magia en acción! 🎭✨
