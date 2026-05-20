# 🚗 DriveFleet — Car Rental Platform

![DriveFleet Banner](https://github.com/user-attachments/assets/224fe59e-84b7-40a7-8403-ba47ac7772f6)

**Live Site:** [DriveFleet Car Rental Platform](https://drivefleet-client-ten.vercel.app/)

DriveFleet is a modern, full-stack car rental platform where users can browse, book, and manage car rentals with ease. Built with Next.js, Express.js, and MongoDB.

---

## ✨ Features

- 🔐 **Secure Authentication** — Users can register and log in securely using Better Auth. Sessions are managed with JWT tokens to protect private routes and API endpoints.

- 🚘 **Browse & Book Cars** — Users can explore a wide range of available cars with detailed information including brand, category, price per day, and availability status. Booking is just a few clicks away.

- 📋 **My Bookings Dashboard** — Each user has a personal bookings dashboard where they can view all their active and past bookings with trip details, dates, and pricing — and cancel bookings if needed.

- 🛠️ **Car Management (Add, Edit, Delete)** — Authenticated users can list their own cars for rent. They can add new cars with images, descriptions, and pricing, as well as edit or remove their listings at any time.

- 📊 **Booking Count Tracking** — Each car automatically tracks how many times it has been booked using MongoDB's `$inc` operator, giving car owners real-time insight into the popularity of their listings.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, Tailwind CSS, HeroUI |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Auth | Better Auth |
| Image Hosting | External URL based |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB connection URI

### Installation

```bash
# Clone the repository
git clone https://github.com/Sakibur59/PH-Assignment-9.git

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Environment Variables

**Client** (`.env.local`):
```env
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
```

**Server** (`.env`):
```env
MONGODB_URI=your_mongodb_uri
PORT=5000
```

### Run the App

```bash
# Start server
cd server
npm run dev

# Start client
cd client
npm run dev
```

---

## 📁 Project Structure

```
drivefleet/
├── client/          # Next.js frontend
│   ├── app/         # App router pages
│   ├── components/  # Reusable UI components
│   └── lib/         # Auth & utility helpers
└── server/          # Express backend
    └── index.js     # API routes
```

---

**Author:** [Md Sakibur Rahman](https://github.com/Sakibur59)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).