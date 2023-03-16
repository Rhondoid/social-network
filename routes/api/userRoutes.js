const router = require('express').Router();

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