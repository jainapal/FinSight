# FinSight Coding Guidelines

## General

- Use TypeScript everywhere.
- Prefer composition over inheritance.
- Keep components and functions small and focused.
- Never duplicate business logic.
- Follow the Single Responsibility Principle.

---

## Naming

### Components

PascalCase

Example

Button.tsx

ReportCard.tsx

UploadDialog.tsx

---

### Hooks

camelCase starting with use

useAuth.ts

useReports.ts

---

### Files

Feature-based organization.

Avoid generic names like:

utils.ts

helpers.ts

---

### Variables

camelCase

const userReport

const uploadedFile

---

### Constants

UPPER_SNAKE_CASE

MAX_FILE_SIZE

JWT_EXPIRES_IN

---

## React

- Pages should compose components.
- Components should not call APIs directly.
- API calls belong in services/.
- Global state only in Zustand.
- Server state only in TanStack Query.

---

## Backend

Controller

↓

Service

↓

Repository (later)

Never put business logic inside controllers.

---

## API

Always return

{
  success: true,
  data: {}
}

or

{
  success: false,
  message: ""
}

Never return plain strings.

---

## Database

Collections use singular models.

User

Report

Payment

Subscription

---

## Git

Commit messages

feat:

fix:

refactor:

docs:

style:

test:

chore:

Example

feat(auth): implement JWT authentication

---

## Branches

feature/authentication

feature/dashboard

feature/upload

bugfix/login

hotfix/payment

---

## Comments

Only explain WHY.

Never explain WHAT.

Bad

// increment i

Good

// Skip duplicate reports to avoid re-processing