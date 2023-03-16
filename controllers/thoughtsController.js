const { Thoughts, friends, reactions } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thoughts.findOne()
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));
    },
    getOneThought(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .then((thoughts) =>
            !thoughts
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json(course)
          )
          .catch((err) => res.status(500).json(err));
      },
      createThoughts(req, res) {
        Thoughts.create(req.body)
          .then((thoughts) => res.json(thoughts))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
      updateThoughts(req, res) {
        Thoughts.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(course)
          )
          .catch((err) => res.status(500).json(err));
      },
      deleteThoughts(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
          .then((thought) =>
            !course
              ? res.status(404).json({ message: 'No thought with that ID' })
              : Thoughts.deleteMany({ _id: { $in: thoughts.users } })
          )
          .then(() => res.json({ message: 'Thoughts and Users deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
};