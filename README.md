# Gym PWA — Aplicación para Clientes del Gimnasio 🏋️

Aplicación web progresiva desarrollada como complemento de **GymApp**, el sistema administrativo de gestión para gimnasio.

Mientras GymApp concentra las operaciones administrativas del negocio, **Gym PWA fue diseñada para proporcionar a los clientes acceso a información relacionada con su cuenta, membresía y actividad dentro del gimnasio**, separando la experiencia del usuario final del panel utilizado por el personal administrativo.

El proyecto fue desarrollado con **Laravel, PHP, JavaScript y tecnologías web**, siguiendo un enfoque responsive orientado principalmente a dispositivos móviles.

> **Estado del proyecto:** Proyecto funcional desarrollado como extensión de GymApp. Su arquitectura fue planteada con posibilidad de incorporar nuevas funcionalidades orientadas al cliente.

---

## 🎯 Objetivo

GymApp fue diseñado principalmente para el personal encargado de la administración del gimnasio.

Sin embargo, parte de la información generada por ese sistema también resulta útil para los socios.

Gym PWA surge como una aplicación complementaria con el objetivo de proporcionar al cliente una interfaz independiente desde la cual consultar información relacionada con su cuenta y actividad.

```text
┌─────────────────────┐
│       GymApp        │
│                     │
│ Sistema             │
│ administrativo      │
└──────────┬──────────┘
           │
           │ Información
           ▼
┌─────────────────────┐
│      Gym PWA        │
│                     │
│ Aplicación para     │
│ clientes            │
└─────────────────────┘
```

---

## 📱 Funcionalidades

La aplicación permite presentar al usuario información proveniente del ecosistema administrativo del gimnasio.

Entre las funciones contempladas se encuentran:

* Inicio de sesión del cliente.
* Consulta de información personal.
* Consulta del estado de la membresía.
* Visualización de información relacionada con el paquete contratado.
* Consulta de asistencias.
* Acceso a información generada desde el sistema administrativo.
* Visualización de contenido y anuncios dirigidos a clientes.

La aplicación fue planteada de manera que nuevas funciones pudieran incorporarse posteriormente sin integrarlas directamente en el panel administrativo.

---

## 🔗 Integración con GymApp

Gym PWA forma parte de un proyecto compuesto por dos aplicaciones con diferentes tipos de usuario:

### GymApp

Sistema utilizado por el personal del gimnasio para administrar:

* Socios.
* Membresías.
* Asistencias.
* Ventas.
* Inventario.
* Adeudos.
* Gastos.
* Reportes.
* Usuarios.
* Contenido para clientes.

### Gym PWA

Aplicación orientada al socio para consultar la información que le corresponde desde una interfaz independiente y optimizada para dispositivos móviles.

Esta separación permite mantener las funciones administrativas fuera de la aplicación del cliente y facilita ampliar ambos sistemas de manera independiente.

---

## 🔄 Flujo general de información

```text
           PERSONAL DEL GIMNASIO
                    │
                    ▼
          ┌───────────────────┐
          │      GymApp       │
          │                   │
          │ Administración   │
          └─────────┬─────────┘
                    │
                    ▼
          ┌───────────────────┐
          │     Datos del     │
          │      sistema      │
          └─────────┬─────────┘
                    │
              Sincronización
                    │
                    ▼
          ┌───────────────────┐
          │      Gym PWA      │
          │                   │
          │ Experiencia del   │
          │ cliente           │
          └─────────┬─────────┘
                    │
                    ▼
                 SOCIO
```

---

## 🛠️ Tecnologías utilizadas

### Backend

* PHP
* Laravel
* Arquitectura MVC
* Autenticación
* Manejo de sesiones
* Acceso a datos

### Frontend

* Blade
* HTML
* CSS
* JavaScript
* Diseño responsive

### Datos

* MySQL
* Integración con información generada por GymApp
* Sincronización de datos entre entornos

### Herramientas

* Git
* GitHub
* Composer
* NPM / Vite

---

## 💡 Diseño orientado a escalabilidad

Uno de los objetivos de separar Gym PWA del sistema administrativo fue permitir que la experiencia del cliente pudiera evolucionar independientemente.

La arquitectura permite plantear futuras funcionalidades como:

* Historial detallado de asistencias.
* Notificaciones sobre vencimiento de membresía.
* Renovación o pago de membresías.
* Rutinas de entrenamiento.
* Seguimiento de progreso.
* Reservas de clases o servicios.
* Promociones personalizadas.
* Notificaciones del gimnasio.

Estas funcionalidades representan posibilidades de evolución del sistema y no necesariamente forman parte de la versión actualmente implementada.

---

## 📷 Capturas

> Agregar capturas de la aplicación ejecutándose en dispositivos móviles.

---

## 📚 Contexto del proyecto

Gym PWA fue desarrollada como parte del mismo ecosistema que **GymApp**, un sistema administrativo para la operación de un gimnasio.

El proyecto permitió explorar la separación entre una aplicación administrativa y una aplicación destinada al usuario final, además del intercambio y sincronización de información entre diferentes componentes de un mismo sistema.

El repositorio se conserva como evidencia del desarrollo realizado y de los conocimientos adquiridos durante el proyecto.

---

## 🔗 Proyecto relacionado

**GymApp — Sistema administrativo para gimnasio**

Repositorio principal del sistema encargado de gestionar socios, membresías, asistencias, ventas, inventario, reportes y otras operaciones administrativas.

---

## 📄 Estado

Proyecto concluido y actualmente archivado.

El código representa las tecnologías, arquitectura y decisiones técnicas utilizadas durante su periodo original de desarrollo.
