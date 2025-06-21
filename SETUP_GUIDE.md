# 🚀 Portfolio Website Setup Guide

This guide will help you set up both the frontend and backend of your personal portfolio website.

## 📋 Requirements

### Required Software
1. **Node.js** (v16 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **MongoDB** (v5 or higher)
   - **Option A**: Local installation
     - Download from: https://www.mongodb.com/try/download/community
     - Install and start MongoDB service
   - **Option B**: MongoDB Atlas (Cloud - Recommended)
     - Sign up at: https://www.mongodb.com/atlas
     - Create a free cluster

3. **Git** (for version control)
   - Download from: https://git-scm.com/

### Optional Requirements
4. **Gmail Account** (for email notifications)
   - Enable 2-factor authentication
   - Generate App Password

## 🛠️ Step-by-Step Setup

### Step 1: Project Structure
Your project should look like this:
```
portfolio/
├── src/                    # Frontend React code
├── backend/               # Backend Node.js code
├── package.json           # Frontend dependencies
└── README.md
```

### Step 2: Frontend Setup

1. **Navigate to the project root:**
   ```bash
   cd portfolio
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

4. **Verify frontend is running:**
   - Open http://localhost:5173 in your browser
   - You should see your portfolio website

### Step 3: Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   # Copy the example environment file
   cp env.example .env
   ```

4. **Configure environment variables:**
   Edit the `.env` file with your settings:

   ```env
   # Server Configuration
   NODE_ENV=development
   PORT=5000
   FRONTEND_URL=http://localhost:5173

   # Database Configuration
   # For local MongoDB:
   MONGODB_URI=mongodb://localhost:27017/portfolio
   
   # For MongoDB Atlas (replace with your connection string):
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-here-change-this
   JWT_EXPIRE=30d

   # Email Configuration (Gmail)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=your-gmail@gmail.com

   # Admin Configuration
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=admin123

   # File Upload Configuration
   MAX_FILE_SIZE=5242880
   UPLOAD_PATH=./uploads

   # Security
   BCRYPT_ROUNDS=12
   ```

### Step 4: Database Setup

#### Option A: Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl start mongod
   ```

#### Option B: MongoDB Atlas (Recommended)
1. Go to https://www.mongodb.com/atlas
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Replace `MONGODB_URI` in your `.env` file

### Step 5: Email Setup (Gmail)

1. **Enable 2-Factor Authentication:**
   - Go to your Google Account settings
   - Enable 2-Step Verification

2. **Generate App Password:**
   - Go to Security settings
   - Generate an App Password for "Mail"
   - Use this password in your `.env` file

### Step 6: Initialize Database

1. **Run the setup script:**
   ```bash
   cd backend
   node setup.js
   ```

   This will:
   - Create an admin user
   - Add sample projects
   - Add sample skills

2. **Verify setup:**
   - Check console output for success messages
   - Note the admin credentials

### Step 7: Start Backend Server

1. **Start the backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Verify backend is running:**
   - Open http://localhost:5000/api/health
   - You should see: `{"status":"OK","message":"Portfolio API is running"}`

### Step 8: Test the Integration

1. **Test contact form:**
   - Go to your portfolio website
   - Navigate to the Contact section
   - Fill out and submit the contact form
   - Check if you receive email notifications

2. **Test API endpoints:**
   ```bash
   # Test health endpoint
   curl http://localhost:5000/api/health
   
   # Test projects endpoint
   curl http://localhost:5000/api/projects
   
   # Test skills endpoint
   curl http://localhost:5000/api/skills
   ```

## 🔧 Configuration Details

### Frontend Configuration
- **Port**: 5173 (Vite default)
- **API Base URL**: http://localhost:5000/api
- **CORS**: Configured to allow backend communication

### Backend Configuration
- **Port**: 5000
- **Database**: MongoDB
- **Authentication**: JWT
- **Email**: Nodemailer with Gmail
- **Security**: Rate limiting, validation, CORS

### Environment Variables Explained

| Variable | Purpose | Example |
|----------|---------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Backend server port | `5000` |
| `MONGODB_URI` | Database connection | `mongodb://localhost:27017/portfolio` |
| `JWT_SECRET` | JWT signing key | `your-secret-key` |
| `EMAIL_USER` | Gmail username | `your-email@gmail.com` |
| `EMAIL_PASS` | Gmail app password | `your-app-password` |
| `ADMIN_EMAIL` | Admin login email | `admin@example.com` |
| `ADMIN_PASSWORD` | Admin login password | `admin123` |

## 🚀 Running the Application

### Development Mode
1. **Terminal 1 - Frontend:**
   ```bash
   cd portfolio
   npm run dev
   ```

2. **Terminal 2 - Backend:**
   ```bash
   cd portfolio/backend
   npm run dev
   ```

3. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/api/health

### Production Mode
1. **Build frontend:**
   ```bash
   cd portfolio
   npm run build
   ```

2. **Start backend:**
   ```bash
   cd portfolio/backend
   npm start
   ```

## 🔑 Admin Access

After running the setup script, you can access the admin features:

- **Email**: admin@example.com
- **Password**: admin123

### Admin Features
- View contact form submissions
- Manage projects (CRUD)
- Manage skills (CRUD)
- View dashboard statistics
- Manage users

## 📧 Email Notifications

The backend will send emails for:
1. **Contact form submissions** - Notification to admin
2. **Confirmation emails** - Auto-reply to contact form users

### Email Setup Troubleshooting
- Ensure 2FA is enabled on Gmail
- Use App Password, not regular password
- Check firewall/antivirus settings
- Verify SMTP settings

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error:**
   - Check if MongoDB is running
   - Verify connection string
   - Check network connectivity

2. **Email Not Sending:**
   - Verify Gmail credentials
   - Check App Password
   - Review email settings

3. **CORS Errors:**
   - Check frontend URL in backend CORS config
   - Verify both servers are running

4. **Port Already in Use:**
   - Change port in `.env` file
   - Kill existing processes

### Debug Commands
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check MongoDB status
mongosh --eval "db.runCommand('ping')"

# Check if ports are in use
netstat -an | grep :5000
netstat -an | grep :5173
```

## 📚 Next Steps

1. **Customize Content:**
   - Update personal information in components
   - Add your own projects
   - Modify skills and experience

2. **Add Features:**
   - Image uploads for projects
   - Blog functionality
   - Analytics integration

3. **Deploy:**
   - Frontend: Vercel, Netlify, or GitHub Pages
   - Backend: Heroku, Railway, or DigitalOcean
   - Database: MongoDB Atlas

4. **Security:**
   - Change default passwords
   - Use strong JWT secrets
   - Enable HTTPS in production

## 📞 Support

If you encounter issues:
1. Check the console logs
2. Verify all requirements are installed
3. Review the configuration
4. Check the troubleshooting section

---

**Happy Coding! 🎉** 