# Klever Documentation

Welcome to the **Klever** open-source documentation repository! This project is built using [Next.js](https://nextjs.org/) to provide a fast, scalable, and modern platform for documenting Klever's products and services. We invite the community to contribute and help improve our documentation.

---

## Table of Contents
1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Running the Project](#running-the-project)
4. [How to Contribute](#how-to-contribute)

---

## Getting Started

### Prerequisites
- **Node.js** (version 20 or higher recommended)
- **npm** (comes bundled with Node.js) or [Yarn](https://classic.yarnpkg.com/) (optional)

Make sure you have Node.js installed on your machine. You can verify this by running:

```bash
node -v
```

If you do not have Node.js installed, you can download it from the official [Node.js website](https://nodejs.org/).

---

## Installation

1. **Clone the repository** (or download the ZIP)
   ```bash
   git clone https://github.com/klever-io/klever-docs.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd klever-docs
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

---

## Running the Project

To run the development server locally:

```bash
npm run dev
```

This starts the Next.js development server on [http://localhost:3000](http://localhost:3000).  
You can visit that URL in your browser to see the documentation site running locally.

---

## How to Contribute

We welcome and appreciate all contributions, big or small! Here’s how you can help:

1. **Fork the Repository**  
   Click the "Fork" button on the top right of this repository page to create a copy of this project in your GitHub account.

2. **Create a New Branch**  
   Once you have forked the project, create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature-or-bugfix-name
   ```

3. **Make Your Changes**  
   Edit the documentation files, add new pages, or fix any issues.

4. **Commit and Push**  
   Commit your changes with a clear message describing the update:
   ```bash
   git add .
   git commit -m "Add some awesome feature to the documentation"
   git push origin feature-or-bugfix-name
   ```

5. **Open a Pull Request**  
   Go to your fork on GitHub, and you’ll see a button to “Compare & pull request.” Open a PR against the original **klever-io/klever-docs** repository. Provide a clear description of the changes you've made and why they should be merged.

### Guidelines
- Provide a clear and concise commit message.
- Write clear and descriptive PR descriptions.
- Adhere to the project structure and formatting conventions.
- Ensure that your changes do not break the build (the site should still run locally with `npm run dev`).

---

## Additional documentation

- Contributing guide: [CONTRIBUTING.md](./CONTRIBUTING.md)
- Code of Conduct: [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- Security Policy: [SECURITY.md](./SECURITY.md)
