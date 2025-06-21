const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');
const Project = require('./models/Project');
const Skill = require('./models/Skill');

const connectDB = require('./config/database');

const setupDatabase = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('📦 Connected to MongoDB');

    // Clear existing data (optional - comment out if you want to keep existing data)
    // await User.deleteMany({});
    // await Project.deleteMany({});
    // await Skill.deleteMany({});

    // Create admin user if it doesn't exist
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (!adminExists) {
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);
      
      await User.create({
        name: 'Admin User',
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        role: 'admin'
      });
      console.log('👤 Admin user created');
    } else {
      console.log('👤 Admin user already exists');
    }

    // Create sample projects if none exist
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      const sampleProjects = [
        {
          title: 'E-Commerce Platform',
          description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
          shortDescription: 'Modern e-commerce solution with full payment integration',
          image: '🛒',
          category: 'web',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          liveUrl: 'https://example.com',
          githubUrl: 'https://github.com/example',
          featured: true,
          order: 1
        },
        {
          title: 'Task Management App',
          description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
          shortDescription: 'Real-time task management with team collaboration',
          image: '📋',
          category: 'web',
          technologies: ['React', 'Firebase', 'Material-UI'],
          liveUrl: 'https://example.com',
          githubUrl: 'https://github.com/example',
          featured: true,
          order: 2
        },
        {
          title: 'Weather Dashboard',
          description: 'A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.',
          shortDescription: 'Interactive weather dashboard with real-time data',
          image: '🌤️',
          category: 'web',
          technologies: ['JavaScript', 'Weather API', 'Chart.js'],
          liveUrl: 'https://example.com',
          githubUrl: 'https://github.com/example',
          featured: false,
          order: 3
        }
      ];

      await Project.insertMany(sampleProjects);
      console.log('📁 Sample projects created');
    } else {
      console.log('📁 Projects already exist');
    }

    // Create sample skills if none exist
    const skillCount = await Skill.countDocuments();
    if (skillCount === 0) {
      const sampleSkills = [
        // Technical Skills
        { name: 'HTML/CSS', level: 90, icon: '🌐', category: 'frontend', type: 'skill', order: 1 },
        { name: 'JavaScript', level: 85, icon: '⚡', category: 'frontend', type: 'skill', order: 2 },
        { name: 'React', level: 80, icon: '⚛️', category: 'frontend', type: 'skill', order: 3 },
        { name: 'Node.js', level: 75, icon: '🟢', category: 'backend', type: 'skill', order: 4 },
        { name: 'Python', level: 70, icon: '🐍', category: 'backend', type: 'skill', order: 5 },
        { name: 'SQL', level: 80, icon: '🗄️', category: 'database', type: 'skill', order: 6 },
        { name: 'Git', level: 85, icon: '📝', category: 'devops', type: 'skill', order: 7 },
        { name: 'AWS', level: 65, icon: '☁️', category: 'devops', type: 'skill', order: 8 },
        
        // Tools
        { name: 'VS Code', level: 90, icon: '💻', category: 'tools', type: 'tool', order: 1 },
        { name: 'Figma', level: 75, icon: '🎨', category: 'tools', type: 'tool', order: 2 },
        { name: 'Postman', level: 80, icon: '📮', category: 'tools', type: 'tool', order: 3 },
        { name: 'Docker', level: 70, icon: '🐳', category: 'devops', type: 'tool', order: 4 },
        { name: 'MongoDB', level: 75, icon: '🍃', category: 'database', type: 'tool', order: 5 },
        { name: 'PostgreSQL', level: 70, icon: '🐘', category: 'database', type: 'tool', order: 6 }
      ];

      await Skill.insertMany(sampleSkills);
      console.log('⚡ Sample skills created');
    } else {
      console.log('⚡ Skills already exist');
    }

    console.log('✅ Database setup completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Start the backend server: npm run dev');
    console.log('2. Test the API endpoints');
    console.log('3. Connect your frontend to the backend');
    console.log('\n🔑 Admin credentials:');
    console.log(`Email: ${process.env.ADMIN_EMAIL}`);
    console.log(`Password: ${process.env.ADMIN_PASSWORD}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
};

// Run setup if this file is executed directly
if (require.main === module) {
  setupDatabase();
}

module.exports = setupDatabase; 