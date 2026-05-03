# 🐄 QurbaniHat – Livestock Booking Platform

## 📌 Project Overview

QurbaniHat is a modern livestock marketplace web application where users can explore animals such as cows and goats for Qurbani. Users can view detailed information and place a booking after authentication.

The platform focuses on a clean UI, smooth user experience, and essential booking functionality without database persistence.

---

## 🌐 Live Website

🔗 https://your-live-link.vercel.app

---

## 🎯 Purpose

This project was built as part of Assignment 8 to demonstrate:

- Frontend development skills using Next.js
- Authentication system integration
- UI/UX design implementation
- State management and routing
- Responsive web design

---

## 🚀 Key Features

### 🏠 Home Page

- Hero section with banner and CTA
- Featured animals (4 items)
- Qurbani Tips section
- Top Breeds section
- Additional custom section (e.g., Why Choose Us)

### 🐄 Animal Listing

- View all animals
- Sort animals by price
- Clean and responsive card layout

### 📄 Animal Details

- Full animal information
- Booking form (Name, Email, Phone, Address)
- Success toast notification on booking
- Form reset after submission

### 🔐 Authentication

- Email & Password login/register
- Google authentication
- Error handling with toast messages
- Redirect after login/register

### 👤 User Profile

- View user information (name, email, photo)
- Update profile (name & photo)

### 🔒 Private Routes

- Protected routes:
  - Animal Details
  - My Profile
  - Update Profile

### 🎨 UI/UX

- Fully responsive (mobile, tablet, desktop)
- Modern and clean design
- Smooth animations

### ⚙️ Additional Features

- Toast notifications
- Loading states
- 404 Not Found page
- Environment variable security

---

## 🛠️ Technologies Used

### Frontend

- Next.js (App Router)
- React.js
- Tailwind CSS

### Authentication & Backend

- Firebase Authentication

### Packages

- react-hot-toast
- react-firebase-hooks
- animate.css (or Lottie)

---

## 📁 Project Structure

```
src/
 ├── app/
 ├── components/
 ├── data/
 ├── hooks/
 ├── lib/
 ├── providers/
 └── utils/
```

---

## 🔑 Environment Variables

Create a `.env.local` file and add:

```
NEXT_PUBLIC_API_KEY=your_api_key
NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_PROJECT_ID=your_project_id
NEXT_PUBLIC_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_APP_ID=your_app_id
```

---

## ⚡ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/qurbanihat.git

# Navigate to project folder
cd qurbanihat

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 📦 Deployment

This project is deployed on Vercel.

Steps:

1. Push code to GitHub
2. Import project into Vercel
3. Add environment variables
4. Deploy

---

## 📌 Routes

### Public Routes

- `/` → Home
- `/animals` → All Animals
- `/login`
- `/register`

### Private Routes

- `/details/[id]`
- `/my-profile`
- `/update-profile`

---

## ⚠️ Important Notes

- Booking data is not stored (as per requirements)
- No database or local storage used
- Ensure environment variables are properly configured

---

## 🧠 Challenges Faced

- Implementing protected routes in Next.js
- Managing Firebase authentication state
- Creating a clean and responsive UI
- Handling form validation and user feedback

---

## ✨ Future Improvements

- Add real database (MongoDB / Firebase Firestore)
- Payment integration
- Advanced filtering system
- Admin dashboard

---

## 👨‍💻 Author

**Shishir Karmokar**
🔗 LinkedIn: https://www.linkedin.com/in/shishirkarmokar/
📧 Email: [shuvroshishir.dev@gmail.com](mailto:shuvroshishir.dev@gmail.com)
💻 GitHub: https://github.com/shuvroshishir

---

## ⭐ Final Note

This project reflects a modern approach to building a full-featured web application with authentication, routing, and responsive design.

---
