# Tech Stack

## Overview

The application uses a modern TypeScript-based stack.

```text
Frontend
    ↓
Next.js + React + TypeScript
    ↓
Server Actions / API Routes
    ↓
Prisma ORM
    ↓
PostgreSQL
```

---

## Frontend

### Next.js

Next.js is the primary application framework.

Responsibilities:

* Application routing
* Server-side rendering
* Server components
* Server actions
* API routes
* Authentication integration
* Application deployment

### React

React is used to build the application interface.

### TypeScript

TypeScript provides static typing across the application.

---

## UI

### Tailwind CSS

Used for styling the application.

Benefits:

* Rapid UI development
* Responsive design
* Consistent styling
* Easy customization

### shadcn/ui

Used for reusable UI components.

Expected components include:

* Button
* Dialog
* Dropdown
* Input
* Select
* Table
* Tabs
* Badge
* Calendar
* Toast
* Avatar
* Command menu

---

## Backend

The first version uses the backend capabilities provided by Next.js.

### Server Actions

Used for server-side mutations such as:

```text
Create Task
Update Task
Delete Task
Create Project
Invite Member
Update Profile
Mark Notification Read
```

### API Routes

API routes are used where external clients or webhooks require HTTP endpoints.

Examples:

```text
/api/webhooks/stripe
/api/webhooks/clerk
/api/notifications
```

---

## Database

### PostgreSQL

PostgreSQL is the primary database.

It is suitable because the application contains highly relational data:

```text
Users
 ↓
Workspaces
 ↓
Projects
 ↓
Tasks
 ↓
Comments
 ↓
Notifications
```

---

## ORM

### Prisma

Prisma is used as the database ORM.

Responsibilities:

* Database schema
* Type-safe queries
* Migrations
* Relations
* Database access

---

## Authentication

### Clerk

Clerk is used for:

* User authentication
* User management
* Sessions
* Organizations
* Invitations
* User profiles

An alternative is Better Auth if authentication needs to be self-managed.

---

## Email

### Resend

Used for transactional emails.

Examples:

* Team invitations
* Password-related emails
* Task assignment
* Deadline reminders
* System notifications

---

## Payments

### Stripe

Stripe will be used when SaaS billing is introduced.

Potential plans:

```text
FREE
PRO
BUSINESS
```

Stripe responsibilities:

* Subscriptions
* Checkout
* Billing portal
* Payment processing
* Webhooks

---

## File Storage

### S3-Compatible Storage

Used for future file attachments.

Potential providers:

* AWS S3
* Cloudflare R2
* Supabase Storage

---

## Hosting

### Vercel

Used for application deployment.

Responsibilities:

* Next.js hosting
* CI/CD
* Environment variables
* Preview deployments
* Production deployments

---

## Database Hosting

### Neon

Neon can be used for managed PostgreSQL hosting.

Alternative:

* Supabase PostgreSQL

---

## Monitoring

### Sentry

Sentry will be used for:

* Error tracking
* Performance monitoring
* Production debugging
* Exception reporting

---

## Development Tools

Recommended tools:

```text
Git
GitHub
VS Code
ESLint
Prettier
Husky
```

---

## Complete Stack

| Category         | Technology                 |
| ---------------- | -------------------------- |
| Framework        | Next.js                    |
| Language         | TypeScript                 |
| UI               | React                      |
| Styling          | Tailwind CSS               |
| Components       | shadcn/ui                  |
| Backend          | Next.js Server Actions/API |
| ORM              | Prisma                     |
| Database         | PostgreSQL                 |
| Authentication   | Clerk                      |
| Email            | Resend                     |
| Payments         | Stripe                     |
| Storage          | S3-compatible              |
| Hosting          | Vercel                     |
| Database Hosting | Neon                       |
| Monitoring       | Sentry                     |
| Version Control  | Git + GitHub               |
