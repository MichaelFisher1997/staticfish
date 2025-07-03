# Staticfish Website

This repository contains the source code for the Staticfish website, a modern, responsive, and fast static site built with Astro and styled with Tailwind CSS. It features a custom contact form that forwards submissions via email using the Resend service.

## ✨ Features

- **Modern Tech Stack**: Built with [Astro](https://astro.build/) for performance and [Tailwind CSS](https://tailwindcss.com/) for a utility-first design.
- **Fully Responsive**: A clean, professional design that looks great on all devices.
- **Email Forwarding**: A secure contact form that uses the [Resend](https://resend.com/) API to forward submissions, managed via a serverless API route.
- **Containerized**: Dockerfiles for both development and production environments, ensuring consistency and ease of deployment.
- **Environment-Based Configuration**: Securely manages API keys and other settings using environment variables.

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Email Service**: [Resend](https://resend.com/)
- **Containerization**: [Docker](https://www.docker.com/)
- **Testing**: [Vitest](https://vitest.dev/)

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/get-started) (optional, for containerized setup)

### Local Development Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/MichaelFisher1997/staticfish.git
    cd staticfish
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    -   Create a `.env` file by copying the example file:
        ```sh
        cp .env.example .env
        ```
    -   Open the `.env` file and add your Resend API key and email addresses.

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The site will be available at `http://localhost:4322`.

### Docker Setup

1.  **Build the development image:**
    ```sh
    docker build -t staticfish-dev .
    ```

2.  **Run the development container:**
    ```sh
    docker run -p 4322:4322 -v .:/app --env-file .env staticfish-dev
    ```

3.  **For production, use the multi-stage Dockerfile:**
    ```sh
    docker build -f Dockerfile.prod -t staticfish-prod .
    docker run -p 4321:4321 --env-file .env staticfish-prod
    ```

## ⚙️ Available Scripts

| Command         | Action                                               |
| :-------------- | :--------------------------------------------------- |
| `npm run dev`   | Starts the local development server.                 |
| `npm run build` | Builds the site for production to the `./dist/` dir. |
| `npm run preview` | Previews the production build locally.               |
| `npm run test`  | Runs the test suite using Vitest.                    |
