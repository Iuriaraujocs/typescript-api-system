# Minimal REST API Boilerplate in TypeScript

This project aims to provide a **minimal development environment** for **rapid prototyping of APIs using TypeScript**, while maintaining **high code quality standards**.

It follows **SOLID principles** and a **layered architecture inspired by the MVC pattern**, designed to be **simple, intuitive, and easy to extend**, drawing inspiration from frameworks like **Laravel (PHP)**.

---

## Currently supports:

- **Routing system**
- **Controllers**
- **Models**
- **Repositories**
- **Migrations**

---

## Upcoming Features

- `.env` environment configuration  
- Support for other relational databases (MySQL / MariaDB)  
- Middleware support  
- **Caching** with Redis  
- **Service layer implementation**  
- **Email sending support**  
- **Unit testing integration**  
- **Dependency Injection (DI)**  
- **Custom exception handling**  
- **CLI commands** for fast generation of project components  
  _(controllers, models, repositories, migrations, etc.)_

---

## Philosophy

The main goal is to provide a **clean, lightweight foundation** for building REST APIs quickly —  
balancing **simplicity** and **code quality**, while encouraging **good architectural practices**.

This boilerplate is ideal for:
- Learning clean architecture concepts in TypeScript  
- Quickly bootstrapping new API projects  
- Serving as a base for more complex applications

---

## Tech Stack

- **TypeScript**
- **Node.js / Express**
- **TypeORM**
- **SQLite** (default database)

---

## Basic Usage
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Iuri-test00", "email": "iuri-test00@email.com"}'
---
```

## Next Steps (Planned CLI Tools)

A lightweight CLI will be added to streamline development, allowing developers to quickly scaffold project components:

```bash
# Examples (future support)
npm run make:controller UserController
npm run make:model User
npm run make:repository UserRepository
npm run make:migration CreateUsersTable
