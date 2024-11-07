
# 🚀 Express.js Movie Genres API

A simple and powerful REST API for managing movie genres.

1. **Express.js**
2. **Node.js**

## 📖 Overview

This API allows you to manage movie genres with basic CRUD operations. Perfect for learning RESTful API concepts or as a starting point for a larger movie management system.

## ⚡ Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/movie-genres-api.git
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the server**
```bash
npm start
```

The server will start on port 9000. You'll see the message:
```bash
Server running port 9000
```

## 🛠️ API Endpoints

### Get All Genres
```http
GET http://localhost:9000/api/vidly
```

### Get Single Genre
```http
GET http://localhost:9000/api/vidly/:id
```

### Create Genre
```http
POST http://localhost:9000/api/vidly
```
Body:
```json
{
    "name": "Action"
}
```

### Update Genre
```http
PUT http://localhost:9000/api/vidly/:id
```
Body:
```json
{
    "name": "Horror"
}
```

### Delete Genre
```http
DELETE http://localhost:9000/api/vidly/:id
```

## 📝 Example Responses

### Success Response
```json
{
    "id": 1,
    "name": "Drama"
}
```

### Error Response
```json
{
    "message": "Genres Are Not Found"
}
```

## 🔧 Technologies Used

- Express.js
- Node.js
- Joi (for validation)

## 📋 Features

- ✅ Get all movie genres
- ✅ Get specific genre by ID
- ✅ Create new genres
- ✅ Update existing genres
- ✅ Delete genres
- ✅ Input validation
- ✅ Error handling


### Installation Steps
1. Clone the repo
2. Install NPM packages
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm start
   ```

## 🧪 Testing

Test the API using Postman or curl:

```bash
# Get all genres
curl http://localhost:9000/api/vidly

# Create new genre
curl -X POST http://localhost:9000/api/vidly \
     -H "Content-Type: application/json" \
     -d '{"name": "Comedy"}'
```

## 📚 API Documentation

### Genre Object

```json
{
    "id": 1,
    "name": "Drama"
}
```

### Validation Rules
- Genre name must be at least 3 characters long
- Genre name is required





