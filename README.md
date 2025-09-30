## project name Education

## 📁 Project live link

- **Client:** https://education-clientside.web.app/
- **Server:** https://education-serverside-main-2.vercel.app/

## 🧪 How to Run Locally

## 📅 Project Description

EduCore is a full-stack Course Management System that allows users to browse, enroll, and manage educational courses in a clean and modern UI. It includes Firebase authentication, Firebase-based login (Email/Google/GitHub), protected routes, course management, seat-limit validation, and dynamic filtering.

## 🎯 Project Purpose

The main purpose of EduCore is to simulate a real-world course management system where users can explore educational content, enroll in courses, and manage their learning activities.

## 🌟 Key Features

- User Registration with Firebase + Validation
- Email/Password, Google, and GitHub login
- Protected routes using `PrivateRoute`
- Add/Edit/Delete Courses (CRUD)
- Enroll/Unenroll in courses (Max 3, Seat Limit enforced)
- Display of Latest & Popular Courses
- "My Enrolled Courses" & "Manage Courses" Dashboard
- Fully Responsive Layout
- Clean UI/UX with TailwindCSS
- Dynamic Route Title & Toast Notifications
- 404 Page, Loading Spinners, and Newsletter UI
- MongoDB + Express backend with Firebase Token

## 🚀 Functional Routes

### Public Pages

- `/` - Home (with Banner, Latest, Popular, Testimonials, Categories)
- `/courses` - All Courses
- `/course-details/:id` - Course Details with Enroll button
- `/contact` - Contact Page
- `/login` - Login with social logins
- `/register` - Registration page

### Private Pages

- `/add-course` - Add new course (Author only)
- `/edit-course/:id` - Edit existing course (Author only)
- `/manage-courses` - All courses added by logged-in user
- `/my-courses` - Enrolled courses of the user

## 🔐 Authentication & Authorization

- Firebase Authentication with updateProfile
- `verifyFirebaseToken` & `verifyTokenEmail` middlewares on server

## 📄 Tech Stack

### 🛠️ Client-side:

- react
- react-dom
- react-router
- firebase
- react-hot-toast
- react-icons
- sweetalert2
- react-slick
- swiper
- react-tooltip
- react-simple-typewriter
- react-spinners
- tailwindcss
- daisyui
- @tailwindcss/vite
- eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh
- vite, @vitejs/plugin-react

### 🛠️ Server-side:

- express
- cors
- dotenv
- firebase-admin
- mongodb

## 📊 Backend Endpoints

- `POST /api/jwt` - Generate token
- `GET /api/courses` - Fetch courses with `?filter=recent|popular`
- `GET /api/courses/:id` - Course details with author info
- `POST /api/courses` - Add course
- `PATCH /api/edit-course/:id` - Update course
- `DELETE /api/delete-course/:id` - Delete course
- `GET /api/my-courses?email=&filter=recent` - Own courses
- `POST /api/enroll` - Enroll / Unenroll (toggle)
- `GET /api/is-enrolled` - Check if enrolled
- `GET /api/my-enrollments?email=` - Enrolled courses
- `POST /api/users` - Register user (check+create)

Thank you Programming Hero for the challenge & guidance!

> ⚡ Inspired by real-world platforms like Coursera & Udemy.
