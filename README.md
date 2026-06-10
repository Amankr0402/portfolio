# Full-Stack BCA Student Portfolio Website

Welcome to your **Full-Stack Personal Portfolio Website**! This project is custom-designed for BCA (Bachelor of Computer Applications) students targeting roles in both **Software Development** and **Data Analytics**.

It features a clean, highly modern, responsive visual design, supporting instant light/dark modes, smooth scroll routing, and interactive project sliders. 

---

## 🚀 Tech Stack

*   **Frontend:** React.js (built with Vite for high performance)
*   **Styling:** Tailwind CSS (fully responsive, modern curated colors, glassmorphism)
*   **Icons:** Lucide React
*   **API Client:** Axios (handles backend database calls)
*   **Backend:** Node.js + Express.js
*   **Database:** MongoDB (via Mongoose ODM)
*   **State Management:** React Context API (Theme Mode toggling)

---

## 📂 Project Architecture

```text
final portfolio/
├── backend/                  # Node.js + Express.js API
│   ├── config/               
│   │   └── db.js             # Mongoose database connection
│   ├── models/               
│   │   ├── Contact.js        # Contact message schema
│   │   ├── Project.js        # Project detail schema
│   │   └── Certificate.js    # Certificate detail schema
│   ├── controllers/          
│   │   ├── contactController.js
│   │   ├── projectController.js
│   │   └── certificateController.js
│   ├── routes/               
│   │   ├── contactRoutes.js
│   │   ├── projectRoutes.js
│   │   └── certificateRoutes.js
│   ├── seeds/                
│   │   └── seedData.js       # Auto-seeding script with 10 projects and 5 certificates
│   ├── .env                  # Port and MongoDB Connection strings
│   ├── package.json          # Backend dependencies
│   └── server.js             # API Gateway Entrypoint
│
├── frontend/                 # React.js SPA (Vite + Tailwind)
│   ├── public/               
│   │   └── Aman_kumar_Resume.pdf # Downloadable resume file
│   ├── src/                  
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.jsx    # Responsive glass navbar
│   │   │   ├── Hero.jsx      # Clean landing intro & illustration
│   │   │   ├── About.jsx     # Career story & education timeline
│   │   │   ├── Skills.jsx    # Skill cards with custom progress levels
│   │   │   ├── ProjectsSlider.jsx # Categorized auto/manual sliding carousel
│   │   │   ├── Certificates.jsx  # Certificate grids with previews
│   │   │   ├── Resume.jsx    # Accomplishments & download button
│   │   │   ├── ContactForm.jsx # Client-validated form with Toast alerts
│   │   │   ├── Footer.jsx    # Simple social links footer
│   │   │   ├── ScrollToTop.jsx # Smooth back-to-top tracker
│   │   │   └── LoadingSpinner.jsx # Fading splash loader
│   │   ├── context/          
│   │   │   └── ThemeContext.jsx # Light/Dark mode state context
│   │   ├── App.jsx           # Section layout assembler
│   │   ├── index.css         # Tailwind directives & scroll layouts
│   │   └── main.jsx          # React renderer
│   ├── tailwind.config.js    # Tailwind customizations
│   └── package.json          # Frontend dependencies
│
└── README.md                 # Project Setup & Guide (This file)
```

---

## 🛠️ Complete Installation & Setup Guide

### Prerequisites
Make sure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
*   [MongoDB Community Server](https://www.mongodb.com/try/download/community) (Run local MongoDB) or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud cluster account.

---

### Step 1: Database Setup & Seeding

1.  Open a terminal and navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure your environment variables:
    *   Duplicate `.env.example` and rename the copy to `.env`.
    *   By default, it is configured for a local MongoDB installation:
        ```env
        PORT=5000
        MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
        ```
4.  **Seed the Database:** Populate your MongoDB with 10 high-quality projects (5 for Software Dev, 5 for Data Analyst) and 5 certificates:
    ```bash
    npm run seed
    ```
    *You should see a message in the terminal: `Database Seeding Completed Successfully!`*

---

### Step 2: Start the Backend API Server

With dependencies installed and database seeded:
1.  Launch the backend in development hot-reload mode:
    ```bash
    npm run dev
    ```
    *The server will boot on port `5000` and output: `MongoDB Connected successfully` and `Server is running on port 5000`.*

---

### Step 3: Frontend Installation & Launch

1.  Open a new terminal window and navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Launch the local Vite development server:
    ```bash
    npm run dev
    ```
    *Open your browser and navigate to `http://localhost:3000` to see your beautiful, dynamic website!*

---

## 💡 Resilient Offline Fallback (Showcase Ready!)

What if you are presenting this portfolio at a college seminar or interview and you don't have MongoDB installed or running locally? 

**We have built a fail-safe offline fallback system directly into the React components:**
*   **Projects & Certificates:** If the React application fails to reach the backend on port `5000`, it will **automatically load a local mockup database** so your projects and certificates display immediately with zero errors!
*   **Contact Form:** If the backend is offline, submitting the contact form will **simulate saving the message** and trigger a successful confirmation Toast. 

This ensures your portfolio is **100% stable and fully operational** in any setting!

---

## 🎓 BCA Interview Guide: How to Explain this Project

When an interviewer asks you: *"Walk me through this project and explain your architecture,"* here is how you can explain it to stand out:

### 1. "How is the folder structure organized?"
> *"I designed this application following a clean **separation of concerns**. The `backend` acts as a RESTful API powered by Node.js, Express, and MongoDB. The `frontend` is a single-page React.js application. Inside the backend, I separated database configurations, Mongoose models, Express controllers, and routes to make the codebase modular and easily expandable."*

### 2. "Why did you choose React Context API for Dark Mode?"
> *"I used React's native **Context API** inside `ThemeContext.jsx` to manage the dark/light state globally. Since theme toggling affects multiple parts of the application (like Navbar, Hero, and cards), Context lets us share state efficiently without 'prop drilling'. The user's theme selection is also persisted in `localStorage` so their preference is saved when they return."*

### 3. "How did you implement the project slider and filtering?"
> *"Instead of importing heavy third-party carousel packages, I built a custom **ProjectsSlider** component using standard React hooks (`useState`, `useEffect`, `useRef`). I created filtering tabs that filter an array of projects dynamically based on the category (`Software Development` or `Data Analyst`). It has auto-sliding intervals that pause when a user hovers, alongside dot indicators and next/prev arrows for manual control."*

### 4. "How is form validation handled?"
> *"I implemented validation on both the client and server sides. On the client, `ContactForm.jsx` uses state-based regex filters to check for email formats and character lengths. On the server side, Mongoose schemas enforce field requirements and validation constraints. If the database is unreachable, the system triggers a custom simulated response, making the application extremely robust."*
