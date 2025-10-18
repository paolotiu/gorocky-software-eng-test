## Functional Requirements

### Authentication

Authentication is handled using Supabase Auth. Users should be able to sign up, log in, and log out.

### CRUD Operations

CREATE - Users create new reviews for books they have read.

READ - Users can view a list of all books and reviews

UPDATE - Users can edit their existing reviews.

DELETE - Users reviews get deleted when they mark a book as 'NOT STARTED'.

- Note: My implementation of CRUD is a bit cheeky since there isn't really a explicit Create, Update, Delete for reviews. Instead, reviews are created/updated/deleted as a side effect of changing the book status.

### Relational UI Features

- When viewing a book, users can see all reviews for that book.

### Access Control

Public Access: /leaderboard
Authenticated Access: /app/books, /app/books/[id]
RLS: Row level secutiry is enabled with no policies. Since I'm using Prisma without querying the Supabase client directly, I don't have to worry about adding permissions. Supabase acts like a normal Postgres database in this regard.

### Deployment

Deployed on Vercel with a Supabase backend.

### Technical Requirements

Framework: Next.js App Router
Database: Supabase Postgres
Database Client: Prisma
Language: Typescript
Styling: Tailwind

## Code Quality

Environment Variables: .env.local.example included
Database Schema: Prisma schema included
Responsive Design: UI works on desktop and mobile

## AI Usage

CoPilot was used to assist with some code snippets and suggestions, but the overall architecture, design, and implementation decisions were made by me.

## Database Design

An ER diagram of the database schema is included in the project root as `bookbuddy-erd.svg`.

## Accessibility

The application follows basic accessibility best practices, including proper use of semantic HTML elements, ARIA attributes where necessary, and ensuring sufficient color contrast. The website is navigable via keyboard, and form elements are properly labeled.
