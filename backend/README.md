# Portfolio Backend API

A robust Node.js/Express backend API for managing a personal portfolio website with authentication, contact form handling, project management, and admin dashboard.

## 🚀 Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **Contact Form Management**: Handle contact submissions with email notifications
- **Project Management**: CRUD operations for portfolio projects
- **Skills Management**: Manage technical skills and tools
- **Admin Dashboard**: Statistics and user management
- **Email Integration**: Automated email notifications using Nodemailer
- **Security**: Rate limiting, input validation, and security headers
- **Database**: MongoDB with Mongoose ODM

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/)

### Optional (for production)
- **MongoDB Atlas** account for cloud database
- **Gmail account** for email notifications

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
# Navigate to the backend directory
cd portfolio/backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
```bash
# Copy the example environment file
cp env.example .env
```

Edit the `.env` file with your configuration:

```env
# Server Configuration
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/portfolio

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=30d

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com

# Admin Configuration
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123

# File Upload Configuration
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads

# Security
BCRYPT_ROUNDS=12
```

### 4. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. The database will be created automatically when you run the application

#### Option B: MongoDB Atlas (Cloud)
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in your `.env` file

### 5. Email Setup (Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in your `.env` file

### 6. Initialize Database
```bash
# Run the setup script to create admin user and sample data
node setup.js
```

### 7. Start the Server
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Contact Endpoints

#### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'm interested in working with you..."
}
```

#### Get All Contacts (Admin)
```http
GET /api/contact?page=1&limit=10
Authorization: Bearer <admin_token>
```

### Project Endpoints

#### Get All Projects
```http
GET /api/projects?category=web&featured=true
```

#### Get Single Project
```http
GET /api/projects/:id
```

#### Create Project (Admin)
```http
POST /api/projects
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "title": "Project Title",
  "description": "Project description...",
  "category": "web",
  "technologies": ["React", "Node.js"],
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/example"
}
```

### Skills Endpoints

#### Get All Skills
```http
GET /api/skills?type=skill&category=frontend
```

#### Create Skill (Admin)
```http
POST /api/skills
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "React",
  "level": 85,
  "icon": "⚛️",
  "category": "frontend",
  "type": "skill"
}
```

### Admin Endpoints

#### Get Dashboard Stats
```http
GET /api/admin/stats
Authorization: Bearer <admin_token>
```

#### Get All Users
```http
GET /api/admin/users
Authorization: Bearer <admin_token>
```

## 🔧 Development

### Project Structure
```
backend/
├── config/          # Database configuration
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/          # Database models
├── routes/          # API routes
├── utils/           # Utility functions
├── server.js        # Main server file
├── setup.js         # Database setup script
└── package.json
```

### Available Scripts
```bash
npm run dev          # Start development server
npm start           # Start production server
npm test            # Run tests
node setup.js       # Initialize database
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/portfolio` |
| `JWT_SECRET` | JWT signing secret | Required |
| `JWT_EXPIRE` | JWT expiration time | `30d` |
| `EMAIL_HOST` | SMTP host | `smtp.gmail.com` |
| `EMAIL_PORT` | SMTP port | `587` |
| `EMAIL_USER` | Email username | Required |
| `EMAIL_PASS` | Email password | Required |
| `EMAIL_FROM` | From email address | Required |
| `ADMIN_EMAIL` | Admin email | Required |
| `ADMIN_PASSWORD` | Admin password | Required |

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt password encryption
- **Input Validation**: Express-validator for request validation
- **Rate Limiting**: API rate limiting to prevent abuse
- **Security Headers**: Helmet.js for security headers
- **CORS Protection**: Cross-origin resource sharing configuration
- **SQL Injection Protection**: Mongoose ODM protection

## 📧 Email Configuration

The backend uses Nodemailer for sending emails. To configure Gmail:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in your `.env` file

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production Deployment
1. Set `NODE_ENV=production`
2. Use a production MongoDB instance
3. Configure proper environment variables
4. Use a process manager like PM2

```bash
npm start
```

## 🧪 Testing

```bash
npm test
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

If you encounter any issues or have questions:

1. Check the documentation
2. Review the error logs
3. Create an issue on GitHub

## 🔄 Updates

To update the backend:

1. Pull the latest changes
2. Install new dependencies: `npm install`
3. Run database migrations if needed
4. Restart the server

---

**Happy Coding! 🎉** 