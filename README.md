# Wholesale Inventory & Billing System

##Project Overview

The **Wholesale Inventory & Billing System** is a full-stack web application developed to manage wholesale business operations efficiently. It helps shop owners maintain product inventory, manage customers, generate bills, and track sales reports in one place.

This project is designed using the **MERN Stack**:

* **MongoDB** – Database
* **Express.js** – Backend Framework
* **React.js** – Frontend Library
* **Node.js** – Runtime Environment

---

# Features

## Authentication

* User Login & Logout
* Protected Routes
* Secure Authentication using JWT

## Product Management

* Add Products
* Update Product Details
* Delete Products
* View Product Stock
* Search Products

## Customer Management

* Add Customers
* Edit Customer Details
* Delete Customers
* View Customer Purchase History

## Billing System

* Generate Bills
* Add Multiple Products to Bill
* Automatic Total Calculation
* Save Billing Records
* Print Invoice

## Reports

* Sales Report
* Stock Report
* Low Stock Alerts
* Revenue Tracking

## User Interface

* Responsive Dashboard
* Sidebar Navigation
* Modern UI Design
* Easy-to-Use Forms

---

#  Technologies Used

## Frontend

* React.js
* React Router DOM
* Axios
* CSS / Bootstrap

## Backend

* Node.js
* Express.js
* JWT Authentication
* Bcrypt.js

## Database

* MongoDB Atlas
* Mongoose

## Deployment

* Frontend: Vercel
* Backend: Render

---

# Project Structure

```bash
Wholesale-Inventory-System/
│
├── Backend/
│   ├── config/
│   ├── APIs/
│   ├── models/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├──context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├──store/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Installation Guide

##  Clone Repository

```bash
git clone https://github.com/vaishnavi-vudayagiri/wholesale-inventory.git
```

```bash
cd wholesale-inventory-system
```

---

# Backend Setup

## Install Dependencies

```bash
cd Backend
npm install
```

## Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=DSGHYTTKJHJVGHJKKJHjhgdf
```

## Start Backend Server

```bash
npm start
```

Server will run on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Install Dependencies

```bash
cd Frontend
npm install
```

## Start Frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication Routes

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

---

## Product Routes

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| GET    | `/api/products`     | Get All Products |
| POST   | `/api/products`     | Add Product      |
| PUT    | `/api/products/:id` | Update Product   |
| DELETE | `/api/products/:id` | Delete Product   |

---

## Customer Routes

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/api/customers`     | Get All Customers |
| POST   | `/api/customers`     | Add Customer      |
| PUT    | `/api/customers/:id` | Update Customer   |
| DELETE | `/api/customers/:id` | Delete Customer   |

---

## Billing Routes

| Method | Endpoint     | Description |
| ------ | ------------ | ----------- |
| POST   | `/api/bills` | Create Bill |
| GET    | `/api/bills` | Get Bills   |

---

# Screenshots

## Dashboard

* Product Summary
* Sales Analytics
* Inventory Overview

## Billing Page

* Generate Customer Bills
* Add Products to Cart

## Reports

* Sales Report
* Stock Report

---

#  Deployment

## Backend Deployment (Render)

1. Push backend code to GitHub.
2. Create new Web Service on Render.
3. Add environment variables.
4. Deploy backend.

## Frontend Deployment (Vercel)

1. Push frontend code to GitHub.
2. Import project in Vercel.
3. Add API URL.
4. Deploy frontend.

---

# Environment Variables

## Backend `.env`

```env
PORT=5000
MONGO_URI=mongodb://vaishnavi:d0utyn6Jn5ARn4OM@ac-njevjk0-shard-00-00.upm9q15.mongodb.net:27017,ac-njevjk0-shard-00-01.upm9q15.mongodb.net:27017,ac-njevjk0-shard-00-02.upm9q15.mongodb.net:27017/?ssl=true&replicaSet=atlas-tt75w1-shard-0&authSource=admin&appName=Cluster0
SECRET_KEY=DSGHYTTKJHJVGHJKKJHjhgdfjkhlkjlkhjhgfvfccfxfdxggjgjgyfthffgdxcvbkhkh
```

## Frontend `.env`

```env

VITE_API_URL=https://wholesale-inventory.onrender.com
```

---

# Future Enhancements

* Barcode Scanner Integration
* Email Invoice Feature
* GST Calculation
* Export Reports to Excel/PDF
* Admin & Employee Roles
* Dark Mode
* Mobile Application

---

# Contributing

Contributions are welcome.

## Steps:

1. Fork the repository
2. Create a new branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

## Deployment link -- https://wholesale-inventory-xi.vercel.app/

---
