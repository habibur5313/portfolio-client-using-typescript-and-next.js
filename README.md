# 🌐 My Portfolio Website

A personal portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Express.js + Prisma**, featuring dynamic blog management, project showcase, and secure authentication for the owner.  

Live Demo: [https://md-habibur-rahman-portfolio.vercel.app](https://md-habibur-rahman-portfolio.vercel.app)

---

## 📝 Table of Contents

- [Overview](#-overview)  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Installation](#-installation)  
- [Usage](#-usage)  
- [API](#-api)   
- [Contact](#-contact)  

---

## 🌟 Overview

This project is a personal portfolio website with the following key functionalities:

- **Authentication & Authorization:** Secure login for the portfolio owner to manage content.
- **Dashboard:** Centralized control for managing blogs, projects, and personal content.
- **Blog Management:** Create, read, update, and delete blogs (Owner only).
- **About Me Section:** Display personal details, work experience, and skills (Public).  
- **Projects Showcase:** Highlight personal projects with descriptions, links, and features (Public).  
- **Responsive UI & polished UX:** Mobile-first and accessibility-friendly design.

---

## 🔥 Features

### Public Pages (Accessible to All Visitors)
- **Blogs:**  
  - View all blogs (ISR for fast updates).  
  - Individual blog pages dynamically generated using `getStaticPaths` + `revalidate`.
- **About Me Section:**  
  - Static personal information rendered with SSG for performance.  
- **Projects Showcase:**  
  - Display projects with thumbnails, descriptions, features, and live links.  

### Private Pages (Owner Only)
- **JWT-based Authentication:**  
  - Admin login only for the portfolio owner.  
  - Passwords hashed with bcrypt.
- **Owner Dashboard:**  
  - Manage blogs and projects dynamically.  
  - Rich text editor (React Quill) for content formatting.  

### UI/UX Enhancements
- Interactive components: carousels, cards, skeleton loaders, smooth transitions.  
- Lazy-loading for heavy assets.  
- Accessibility-compliant components and semantic HTML.  
- Clear error handling with toast notifications (toast).  

---

## 🛠️ Tech Stack

**Frontend:**
- Framework: Next.js  
- Language: TypeScript  
- Styling: Tailwind CSS, framer-motion, radix-ui components  
- Form & Validation: react-hook-form 
- Icons & Animations: lucide-react, react-icons, tw-animate-css  
- Notifications: sonner / react-hot-toast  

**Backend:**
- Framework: Node.js + Express.js  
- Database: PostgreSQL (Prisma ORM)  
- Auth:  bcrypt  
- Middleware: CORS
- Dev tools: ts-node-dev, TypeScript  

---

## 🚀 Installation

### Frontend
```bash
git clone https://github.com/habibur5313/portfolio-client-using-typescript-and-next.js
cd portfolio-client-using-typescript-and-next.js
npm install
npm run dev
````

### Backend

```bash
git clone https://github.com/habibur5313/portfolio-server-using-typescript-and-prisma
cd portfolio-server-using-typescript-and-prisma
npm install
npm run dev
```

> Make sure to set up your `.env` file for database connection.

---

## ⚡ Usage

- Navigate to `/login` to access the admin dashboard.  
- Use the following **owner credentials** for login:  

```

Email: [admin@example.com](mailto:admin@example.com)
Password: Admin123#

```

- After logging in, you can add or edit blogs and projects from the dashboard.  
- Public pages are accessible without login.

---

## 🌐 API

Base URL: [https://portfolio-serverr-sigma.vercel.app](https://portfolio-serverr-sigma.vercel.app)

**Endpoints:**

* `POST /auth/login` – Owner login
* `GET /blogs` – Get all blogs
* `GET /blogs/:id` – Get blog by ID
* `POST /blogs` – Create blog (Owner only)
* `PUT /blogs/:id` – Update blog (Owner only)
* `DELETE /blogs/:id` – Delete blog (Owner only)
* `GET /projects` – Get all projects
* `POST /projects` – Create project (Owner only)
* `PUT /projects/:id` – Update project (Owner only)
* `DELETE /projects/:id` – Delete project (Owner only)


## 📫 Contact

* **LinkedIn:** [https://www.linkedin.com/in/habibur-rahman13](https://www.linkedin.com/in/habibur-rahman13)
* **Facebook:** [https://www.facebook.com/habibur5231](https://www.facebook.com/habibur5231)
* **Email:** [habiburmamun313@gmail.com](mailto:habiburmamun313@gmail.com)

---

## 🔗 Links

* **Frontend GitHub:** [https://github.com/habibur5313/portfolio-client-using-typescript-and-next.js](https://github.com/habibur5313/portfolio-client-using-typescript-and-next.js)
* **Backend GitHub:** [https://github.com/habibur5313/portfolio-server-using-typescript-and-prisma](https://github.com/habibur5313/portfolio-server-using-typescript-and-prisma)
* **Live Site:** [https://md-habibur-rahman-portfolio.vercel.app](https://md-habibur-rahman-portfolio.vercel.app)

---

⭐ **Thank you for checking out my portfolio!**
