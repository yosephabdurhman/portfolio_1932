const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const Skill = require('../models/Skill');

const router = express.Router();

// @desc    Get all skills (public)
// @route   GET /api/skills
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { type, category } = req.query;
    let query = { isActive: true };

    if (type) {
      query.type = type;
    }

    if (category) {
      query.category = category;
    }

    const skills = await Skill.find(query).sort({ order: 1, level: -1 });

    res.status(200).json({
      success: true,
      count: skills.length,
      data: skills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// Protected routes (admin only)
router.use(protect);
router.use(authorize('admin'));

// @desc    Create new skill
// @route   POST /api/skills
// @access  Private/Admin
router.post('/', async (req, res) => {
  try {
    const skill = await Skill.create(req.body);

    res.status(201).json({
      success: true,
      data: skill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// @desc    Update skill
// @route   PUT /api/skills/:id
// @access  Private/Admin
router.put('/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!skill) {
      return res.status(404).json({
        success: false,
        error: 'Skill not found'
      });
    }

    res.status(200).json({
      success: true,
      data: skill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// @desc    Delete skill
// @route   DELETE /api/skills/:id
// @access  Private/Admin
router.delete('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        error: 'Skill not found'
      });
    }

    await skill.remove();

    res.status(200).json({
      success: true,
      message: 'Skill deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

module.exports = router; 