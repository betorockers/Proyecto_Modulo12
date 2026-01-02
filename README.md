# Automatización QA - Módulo 12

Este repositorio contiene la suite de pruebas automatizadas para el proyecto final del curso **Test Automation Engineer**. El objetivo es validar la calidad del software mediante pruebas de interfaz web, servicios API y flujos de integración continua (CI/CD).

## Herramientas Utilizadas

- **Cypress:** Framework para pruebas de extremo a extremo (E2E) de la interfaz web.
- **Postman & Newman:** Diseño y ejecución automatizada de pruebas de API.
- **GitHub Actions:** Plataforma de CI/CD para la orquestación del pipeline.
- **Node.js & NPM:** Entorno de ejecución y gestión de dependencias.

## Estructura del Proyecto

- `tests/e2e/`: Pruebas de interfaz de usuario (Cypress).
- `tests/api/`: Colecciones de pruebas de API (Postman/Newman).
- `.github/workflows/`: Configuración del pipeline de CI/CD.
- `reports/`: Reportes generados tras la ejecución.

## Requisitos

- Node.js v18
- npm
- Git

## Instalación

```bash
npm install
```

## Ejecución de Pruebas

### Pruebas UI (Cypress)
```bash
npm run test:e2e
```

### Pruebas API (Newman)
```bash
npm run test:api
```

## Integración CI/CD

El flujo automatizado se encuentra definido en `.github/workflows/flujo-completo.yml`. Se ejecuta automáticamente al hacer push a la rama `main`.

## Historial de Mejoras del Pipeline (CI/CD)

Durante el desarrollo del proyecto, se realizaron varias optimizaciones al flujo de CI/CD para mejorar su robustez, eficiencia y para cumplir con todos los requisitos de la evaluación.

1.  **Ejecución en Paralelo de Pruebas**
    *   **Problema:** Inicialmente, las pruebas de UI y API se ejecutaban de forma secuencial.
    *   **Solución:** Se reestructuró el workflow para usar dos `jobs` independientes (`test-ui` y `test-api`), permitiendo que se ejecuten en paralelo. Esto acelera el feedback y cumple con un requisito del ejercicio práctico.

2.  **Corrección de Fallos en Pruebas UI (Cypress)**
    *   **Problema:** El job de Cypress fallaba en el entorno de GitHub Actions debido a la falta de dependencias del sistema operativo necesarias para ejecutar el navegador.
    *   **Solución:** Se reemplazaron los pasos manuales por la acción oficial `cypress-io/github-action@v6`. Esta acción se encarga de preparar el entorno correctamente, solucionando los fallos de ejecución.

3.  **Actualización de Acciones Obsoletas**
    *   **Problema:** El pipeline fallaba porque utilizaba `actions/upload-artifact@v3`, una versión que GitHub ha marcado como obsoleta.
    *   **Solución:** Se actualizaron todas las acciones (`upload-artifact`, `checkout`, `setup-node`) a su versión más reciente (`v4`), asegurando la compatibilidad y el mantenimiento a futuro del pipeline.

4.  **Optimización de la Instalación de Dependencias**
    *   **Problema:** El job de API instalaba `newman` de forma global, lo cual es ineficiente. Además, las dependencias se descargaban desde cero en cada ejecución.
    *   **Solución:** Se eliminó la instalación global y se configuró el `job` para usar la versión local definida en `package.json`. Adicionalmente, se habilitó el `cache` de `npm` para que las instalaciones futuras sean significativamente más rápidas.

---
Proyecto realizado para el Módulo 12: Herramientas de Automatización.
