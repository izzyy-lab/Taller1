# Taller1

## Descripción
Proyecto educativo basado en arquitectura feature-based que abarca conceptos fundamentales de JavaScript moderno, incluyendo manipulación del DOM, almacenamiento local, callbacks, promesas, async/await y destructuring.

## Estructura del Proyecto
```
Taller1/
public/
│
├── images/                 # Recursos estáticos (iconos, fotos de usuarios, etc.)
│
src/
│
├── features/               # Módulos independientes por tema
│   │
│   ├── destructuring/      # Ejercicios de desestructuración de objetos
│   │   ├── index.html
│   │   └── script.js
│   │
│   ├── callbacks/          # Ejercicios de funciones callback
│   │   ├── index.html
│   │   └── script.js
│   │
│   ├── promises/           # Manejo de promesas (.then / .catch)
│   │   ├── index.html
│   │   └── script.js
│   │
│   └── crud-async/         # Proyecto final: CRUD con Async/Await
│       └── script.js
│
├── shared/
│   └── css/                # Hojas de estilo globales y utilidades
│       └── styles.css
│
index.html              # Punto de entrada principal (Menú de navegación)
README.md
.gitignore
```

## Actividades

### Actividad de Repaso JS
Interfaz de usuario para registrar usuarios con correo, nombre y documento. Los datos se almacenan en localStorage y se visualizan en una tabla dinámica.

### Actividad 1: Eliminar y Editar
Agregar botones "Eliminar" y "Editar" en cada fila para gestionar registros.

### Actividad 2: Validación Única
Validar unicidad de correo electrónico y número de documento antes de insertar registros.

### Actividad 3: Callbacks
Búsqueda secuencial en dos bases de datos usando callbacks anidados para encontrar países.

### Actividad 4: Promises
Promesa que valida si una cadena termina en vocal (mayúscula o minúscula).

### Actividad 5: Async/Await
Función asíncrona que retorna el doble de un número después de 2 segundos.

### Actividad 6: Destructuring Objects
Extracción de propiedades de un objeto persona usando destructuring.

## Requisitos
- Navegador moderno con soporte ES6+
- Conocimientos básicos de JavaScript, HTML y CSS



##Autor: Felipe Echeverri David
