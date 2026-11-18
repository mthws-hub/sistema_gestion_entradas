# Sistema de venta de entradas - Innova ESPE 2026

Prototipo en JavaScript nativo para registrar la compra de entradas, calcular descuentos y controlar los cupos del evento Innova ESPE 2026 (Universidad de las Fuerzas Armadas - ESPE).

## Tecnologías
- HTML5
- JavaScript nativo (prompt(), alert() y console.log())

## Estructura del proyecto
```
APELLIDO_NOMBRE_JS/
├── index.html
├── js/
│   └── app.js
└── README.md
```
 
## Cómo ejecutarlo
1. Descargar o clonar el repositorio.
2. Abrir `index.html` en el navegador.
3. Abrir la consola (F12 → Console).
4. Presionar el botón **Iniciar sistema** y seguir el menú.

## Configuración inicial
| Concepto | Valor |
|---|---|
| Precio por entrada | $20 |
| Cupos iniciales | 50 |
| Descuento estudiantes | 30 % |
| Descuento docentes | 15 % |
| Descuento público general | 0 % |
| Máximo de entradas por compra | 5 |
 
## Funcionalidades
1. **Comprar entradas:** pide nombre, tipo de participante y cantidad; valida los datos, calcula subtotal, descuento y total, y actualiza los cupos solo si la compra es válida.
2. **Consultar cupos:** muestra los cupos y un mensaje (cupos disponibles / últimos cupos / evento agotado).
3. **Consultar ingresos:** entradas vendidas, ingresos acumulados y número de compras.
4. **Salir:** muestra un resumen final y termina el menú.
## Validaciones probadas
| Escenario | Resultado |
|---|---|
| 3 entradas, estudiante | Total $42.00 |
| 2 entradas, docente | Total $34.00 |
| 1 entrada, público general | Total $20.00 |
| 0 entradas | Compra rechazada |
| 6 entradas | Compra rechazada |
| Texto en lugar de cantidad | Compra rechazada |
| Más entradas que cupos restantes | Compra rechazada |
| Opción de menú inexistente | Mensaje de error |
| Opción 4 | Finaliza el sistema |
 
En toda compra rechazada, los cupos, ingresos y contadores permanecen sin cambios.
 
## Autor
PASTOR MATHEWS - Ingeniería en Software, ESPE
 