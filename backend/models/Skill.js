const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a skill name'],
    trim: true,
    maxlength: [50, 'Skill name cannot be more than 50 characters']
  },
  level: {
    type: Number,
    required: [true, 'Please provide a skill level'],
    min: [0, 'Level must be at least 0'],
    max: [100, 'Level cannot exceed 100']
  },
  icon: {
    type: String,
    default: '⚡'
  },
  category: {
    type: String,
    required: [true, 'Please provide a skill category'],
    enum: ['frontend', 'backend', 'database', 'devops', 'tools', 'other'],
    default: 'other'
  },
  type: {
    type: String,
    enum: ['skill', 'tool'],
    default: 'skill'
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better query performance
skillSchema.index({ category: 1, type: 1, isActive: 1 });
skillSchema.index({ order: 1 });

module.exports = mongoose.model('Skill', skillSchema); 