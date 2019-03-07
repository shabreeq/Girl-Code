validateUser = [
  check('email').isEmail().withMessage('Invalid Email.'),
  check('userPassword').isLength({ min: 6 }).withMessage('Password should be atleast 6 characters.'),
];

validateNewUser = [
  check('firstName').isLength({ min: 3 }).withMessage('FirstName should be at least 6 characters.'),
  check('lastName').isLength({ min: 3 }).withMessage('LastName should be at least 8 characters.'),
  check('email').isEmail().withMessage('Email not valid.'),
  check('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters.'),
  
  
];

