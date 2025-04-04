const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Existing routes:
router.get('/', auth, userController.getUsers);  // Now protected
router.get('/:id', auth, userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);

// New login endpoint
router.post('/login', userController.loginUser);

// Optional logout endpoint (client should delete token; this is more illustrative)
router.get('/logout', (req, res) => {
  // Since JWTs are stateless, simply instruct client to remove token.
  res.status(200).json({ message: 'Logout successful. Please delete your token on the client.' });
});

module.exports = router;