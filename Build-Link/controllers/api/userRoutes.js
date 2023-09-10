const router = require('express').Router();
const { User } = require('../../models');

// Register a new user
router.post('/', async (req, res) => {
  try {
    // Create a new user in the database
    const userData = await User.create(req.body);

    // Save user session upon successful registration
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Respond with user data
      res.status(200).json(userData);
    });
  } catch (err) {
    // Handle registration errors
    res.status(400).json(err);
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    // Find user by email
    const userData = await User.findOne({ where: { email: req.body.email } });

    // If user doesn't exist, return an error
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Check if the entered password is valid
    const validPassword = await userData.checkPassword(req.body.password);

    // If password is invalid, return an error
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Save user session upon successful login
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_name = userData.name;
      req.session.logged_in = true;

      // Respond with user data and success message
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    // Handle login errors
    res.status(400).json(err);
  }
});

// User logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Destroy user session upon logout
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    // If user is not logged in, return a 404 error
    res.status(404).end();
  }
});

// Other user-related routes (e.g., user profile, update user details, etc.)

module.exports = router;
