const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const Contact = require('../models/Contact');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const User = require('../models/User');

const router = express.Router();

// All routes require authentication and admin role
router.use(protect);
router.use(authorize('admin'));

// @desc    Get dashboard statistics
// @route   GET /api/admin/stats
// @access  Private/Admin
router.get('/stats', async (req, res) => {
  try {
    const [
      totalContacts,
      unreadContacts,
      totalProjects,
      totalSkills,
      recentContacts,
      projectViews
    ] = await Promise.all([
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'unread' }),
      Project.countDocuments({ isActive: true }),
      Skill.countDocuments({ isActive: true }),
      Contact.find().sort({ createdAt: -1 }).limit(5),
      Project.aggregate([
        { $match: { isActive: true } },
        { $group: { _id: null, totalViews: { $sum: '$views' } } }
      ])
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalContacts,
        unreadContacts,
        totalProjects,
        totalSkills,
        recentContacts,
        totalViews: projectViews[0]?.totalViews || 0
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// @desc    Create admin user
// @route   POST /api/admin/users
// @access  Private/Admin
router.post('/users', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role: role || 'user'
    });

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// @desc    Update user
// @route   PUT /api/admin/users/:id
// @access  Private/Admin
router.put('/users/:id', async (req, res) => {
  try {
    const { name, email, role, isActive } = req.body;
    const updateData = { name, email, role, isActive };

    const user = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Prevent deleting the last admin
    if (user.role === 'admin') {
      const adminCount = await User.countDocuments({ role: 'admin' });
      if (adminCount <= 1) {
        return res.status(400).json({
          success: false,
          error: 'Cannot delete the last admin user'
        });
      }
    }

    await user.remove();

    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

module.exports = router; 