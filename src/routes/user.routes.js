const router = require('express').Router();
const {get, post} = require('../controllers/user.controller')
const {body, validationResult} = require('express-validator')
const {validation} = require('../middleware/validation')
 

router.get('/home',get);
router.post('/post',
body('username').notEmpty().withMessage('username field should not be empty')
.isString()
.isLength({min:5})
.withMessage('username should be at least 5 characters'),

body('email')
.isEmail()
.withMessage('should be in E-mail format')

.notEmpty()
.withMessage('Email field should not be empty'),

body('phone')
.isNumeric().withMessage('should be a phone number')
.notEmpty().withMessage('phone field should not be empty'),
validation, post);

module.exports = router;