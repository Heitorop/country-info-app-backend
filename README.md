# 🌍 Country Info API

> A NestJS + TypeORM backend for country and holiday information, with user calendar management.

---

## 🚀 Features
- Get country info and available countries
- Fetch national holidays from Nager API
- Add holidays to a user's calendar
- User and calendar event management

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Docker & Docker Compose

### Installation
```bash
npm install
```

### Database Setup (Docker)
Start PostgreSQL with Docker Compose:
```bash
docker-compose up -d
```

### ⚡ Run Migrations
Before starting development, run migrations to set up the database schema:
```bash
npx ts-node ./node_modules/typeorm/cli.js migration:run -d src/data-source.ts
```

### 👤 Seed Users
To add sample users for testing:
```bash
npx ts-node src/seeds/user.seed.ts
```

### 🏃 Start the Project
```bash
npm run start:dev
```

---

## 📚 API Endpoints
- `GET /countries` — List available countries
- `GET /countries/:countryCode` — Get info for a specific country
- `POST /users/:userId/calendar/holidays` — Add holidays to user's calendar

---

## ⚠️ Notes
- **Always run migrations before development** to ensure your database is up to date.
- Use the user seeder to quickly add test users.
- Environment variables are managed in `.env`.

---

## 📝 License
MIT
