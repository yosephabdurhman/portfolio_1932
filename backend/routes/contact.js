const express = require('express');
const { body } = require('express-validator');
const { protect, authorize } = require('../middleware/auth');
const {
  submitContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact
} = require('../controllers/contact');

const router = express.Router();

// Validation middleware
const contactValidation = [
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('subject').trim().isLength({ min: 5, max: 100 }).withMessage('Subject must be between 5 and 100 characters'),
  body('message').trim().isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters')
];

// Public routes
router.post('/', contactValidation, submitContact);

// Protected routes (admin only)
router.use(protect);
router.use(authorize('admin'));

router.get('/', getContacts);
router.get('/:id', getContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router; 