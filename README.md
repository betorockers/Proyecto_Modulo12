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

---
Proyecto realizado para el Módulo 12: Herramientas de Automatización.
