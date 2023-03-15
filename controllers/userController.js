const { ObjectId } = require('mongoose').Types;
const { User, Thoughts } = require('../models');

model.exports = {
//get all users
getUsers(req, res) {
    Users.find()
    .then(async (users) => {
      return res.json(studentObj);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
},
getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !student
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user,
              thoughts: await thought(req.params.userId),
              friends: await friends(req.params.userID),
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User does not exist' })
          : thought.findOneAndUpdate(
            { thoughts: req.params.userId },
            { $pull: { thoughts: req.params.userId } },
            { new: true }
            )
      )
      .then((course) =>
        !course
          ? res.status(404).json({
              message: 'User updated, no thoughts were updated',
            })
          : res.json({ message: 'User successfully updated' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such student exists' })
          : Course.findOneAndUpdate(
              { thoughts: req.params.thoughtsId },
              { $pull: { students: req.params.thoughtsId } },
              { new: true }
            )
      )
      .then((course) =>
        !course
          ? res.status(404).json({
              message: 'User deleted, thoughts were not deleted',
            })
          : res.json({ message: 'User successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};


