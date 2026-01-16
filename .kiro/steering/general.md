# General Project Standards & Tech Stack

## 1. Core Technology Stack
- **Frontend:** React with Next.js (utilize App Router and Server Components where applicable).
- **Backend:** Node.js with Express framework.
- **Database:** Relational database (PostgreSQL or MySQL). Use an ORM (like Prisma or Sequelize) or clean SQL queries as established in the codebase.
- **AI Integration:** OpenAI API using GPT models (e.g., gpt-4o, gpt-4-turbo).
- **AI Architecture:** Implementation of RAG (Retrieval-Augmented Generation) for personalized data processing.
- **Payments:** Stripe API integration for handling subscriptions and one-time payments.

## 2. Chatbot Implementation Details
- The core chatbot logic must be powered by **OpenAI GPT models**.
- When generating responses, the system must first query the RAG vector store to retrieve relevant personal or context-specific information.
- Ensure strict prompt engineering to maintain the assistant's persona and prevent hallucinations.

## 3. Coding Guidelines
- **Language:** Write all code and technical documentation in English.
- **Modularity:** Maintain strict separation between Frontend (`/frontend`) and Backend (`/backend`).
- **Clean Code:** Follow DRY (Don't Repeat Yourself) and SOLID principles. 
- **Error Handling:** Always implement try-catch blocks in backend controllers and use appropriate HTTP status codes.
- **Security:** Never hardcode Stripe secret keys or OpenAI API keys; always use environment variables (`.env`).

## 4. Stability & Anti-Regression
- **Pre-analysis:** Before modifying existing functions, analyze their dependencies across the entire workspace.
- **Consistency:** Maintain the existing naming conventions (e.g., camelCase for variables, PascalCase for React components).
- **Non-destructive updates:** When adding new features to the GPT/RAG pipeline, ensure that existing conversational flows and Stripe webhooks remain intact.