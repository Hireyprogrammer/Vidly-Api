
# 🚀 Express.js Movie Genres API

A simple and powerful REST API for managing movie genres.

## Express.js
## Node.js

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

## 💻 Development

### Prerequisites
- Node.js (v12 or higher)
- npm

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

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/movie-genres-api](https://github.com/yourusername/movie-genres-api)

## 🙏 Acknowledgments

- [Express.js Documentation](https://expressjs.com/)
- [Joi Documentation](https://joi.dev/)
- [RESTful API Design Best Practices](https://restfulapi.net/)

---

<p align="center">Made with ❤️ by [Your Name]</p>
```

This README includes:

1. 📱 Clear installation instructions
2. 🎯 Detailed API endpoints documentation
3. 💻 Example requests and responses
4. 🔧 Development setup guide
5. 📚 Testing instructions
6. 🤝 Contributing guidelines
7. 🎨 Professional formatting with emojis
8. 🛡️ Technology badges
9. 📝 Comprehensive feature list
10. 🔍 Contact information and acknowledgments

The README is designed to be:
- Easy to understand for new users
- Comprehensive for developers
- Visually appealing on GitHub
- Professional and well-structured

Would you like me to modify or add any specific section?
