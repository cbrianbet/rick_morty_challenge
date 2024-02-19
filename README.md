# Rick & Morty App

## Project Overview

This project is a full-stack application using TypeScript, Next.js, and tailwindcss to build an app that interacts with the Rick & Morty API. The goal is to retrieve information about locations, residents, and episodes, allowing users to explore and interact with the data.

## API Choice

For this project, I have opted to implement a RESTful API to interact with the Rick & Morty API. Below are the reasons for this decision:

### Rationale

#### 1. Familiarity and Simplicity

The team is well-versed in RESTful API design, and REST aligns with the simplicity and familiarity of our stack. This decision ensures a smooth development process, leveraging the mature ecosystem of REST.

#### 2. My Expertise

Given my expertise in RESTful API development, choosing REST allows us to focus on building features efficiently without a significant learning curve associated with GraphQL.

#### 3. Clear Endpoint Structure

RESTful APIs follow a predictable endpoint structure, making it easier for both developers and clients to understand and navigate the API.

### Implementation

The REST API will be designed to handle requests for locations, residents, and episodes, providing the necessary endpoints to fulfill the requirements of the project. The API endpoints and their documentation will be made available for easy reference.

---

## Storage choice
For this project I used local storage to store notes. Below are the reasons for this decision:

### Rationale
Quick and easy to implement given the time factor.

Suitable for small to medium-sized applications.

No need for server-side implementation.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
