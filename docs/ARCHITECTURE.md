# System Architecture

## Architecture Style

The application will use a **modular monolith** architecture for the initial version.

This keeps development simple while allowing the application to scale.

```text
                         ┌─────────────────┐
                         │     Browser     │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │     Next.js     │
                         │                 │
                         │ React           │
                         │ Server Actions  │
                         │ API Routes      │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │     Prisma      │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   PostgreSQL    │
                         └─────────────────┘
```

---

## Application Modules

```text
src/
├── auth
├── users
├── workspaces
├── projects
├── tasks
├── notifications
├── admin
├── activity
└── billing
```

Each module should contain its own business logic and validation.

---

## Request Flow

Example: Creating a task.

```text
User
 ↓
Task Form
 ↓
Server Action
 ↓
Authentication Check
 ↓
Permission Check
 ↓
Input Validation
 ↓
Prisma
 ↓
PostgreSQL
 ↓
Create Activity Log
 ↓
Create Notification
 ↓
Return Result
```

---

## Security Architecture

Every protected operation should perform:

```text
Authentication
      ↓
Authorization
      ↓
Validation
      ↓
Database Operation
```

The frontend must never be trusted for authorization.

---

## Scalability

The initial application should remain a monolith.

If the application grows significantly, individual services can later be extracted.

Potential future services:

```text
Notification Service
Email Service
Search Service
Analytics Service
File Processing Service
```

This should only happen when actual scaling requirements justify the complexity.
