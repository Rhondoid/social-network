const router = require('express').Router();
// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// // example seed data
// {
//   "username": "rhonda",
//   "email": "rhonda@gmail.com"
// }
// PUT to update a user by its _id

// DELETE to remove user by its _id
const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser, 
} = require('../../controllers/userController');
// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getOneUser).delete(deleteUser);

// /api/user/:userId
router.route('/:userId').put(updateUser);

// /api/user/:userId
router.route('/:userId:userId').delete(deleteUser);

// /api/user/:userId/thoughts/:userId/friends/:userID
// router.route('/.:thoughts:userId, :friends:userID').delete()

module.exports = router;