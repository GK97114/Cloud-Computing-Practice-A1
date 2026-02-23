# Product API

A simple RESTful API built with Node.js, Express, and SQLite for managing product data.

This project demonstrates basic backend development concepts including routing, data persistence, and CRUD operations using a lightweight database.

## Features

- Root endpoint with welcome message
- Create a product
- Retrieve all stored products
- SQLite database for persistence
- JSON request and response handling

## Product Schema

Each product contains:

- `id` - Auto-generated integer
- `name` - String
- `price` - Number

## Folder Architecture

backend/
│
├── controllers/
│   └── productController.js
├── db/
│   └── database.js
├── routes/
│   └── productRoutes.js
├── index.js
├── products.db
├── package.json
└── README.md

## Technology Stack

- Node.js
- Express
- SQLite (better-sqlite3)
- Railway for deployment

## Production Workflow

- [x] Initialize project with npm
- [x] Install Express and SQLite dependencies
- [x] Create database connection and table schema
- [x] Implement root endpoint
- [x] Implement product creation endpoint
- [x] Implement product retrieval endpoint
- [x] Test locally
- [] Push to GitHub
- [] Deploy to Railway

## Commit Types Documentation
- I will follow Conventional Commits syntax; <type>(optional scope): <short description>
- feat = New Feature/Functionality
- fix = Bug fix
- chore = Non-feture changes (build, tooling)
- docs = documentation changes
- style = formatting
- refactor = code restructuring without changing behavior
- test = add or update tests