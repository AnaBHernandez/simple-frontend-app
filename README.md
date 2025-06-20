# simple-frontend-app

Este es un proyecto Frontend básico desarrollado con React, creado como parte de la Fase 4 del bootcamp.
Su objetivo principal es comunicarse con una API REST de Backend (desplegada en AWS) para demostrar la interacción entre el Frontend y el Backend en un entorno de nube.

## Características

* Aplicación React básica
* Realiza una llamada a un endpoint `/api/hello` de un Backend para obtener un mensaje.
* Configurado para desarrollo local con proxy a `http://localhost:5000` (puerto del Backend).

## Tecnologías Utilizadas

* React
* JavaScript
* HTML/CSS
* npm

## Ejecución Local (Desarrollo)

Para ejecutar la aplicación en tu entorno de desarrollo local:

1.  Asegúrate de que el Backend (`simple-backend-api`) esté ejecutándose en `http://localhost:5000`.
2.  Navega a la raíz de este proyecto en tu terminal:
    ```bash
    cd simple-frontend-app
    ```
3.  Instala las dependencias (si no lo has hecho ya):
    ```bash
    npm install
    ```
4.  Inicia el servidor de desarrollo de React:
    ```bash
    npm start
    ```
    La aplicación se abrirá automáticamente en tu navegador (normalmente en `http://localhost:3000`).

## Despliegue

Actualmente, el despliegue de esta aplicación está planificado para AWS Amplify.