const router = require('express').Router();
// GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "rhonda",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value
const {
  getThoughts,
  getOneThought,
  createThoughts,
  updateThoughts,
  deleteThoughts,
} = require('../../controllers/thoughtsController.js');

router.route('/').get(getThoughts).post(createThoughts);

router
  .route('/:thoughtsId')
  .get(getOneThought)
  .put(updateThoughts)
  .delete(deleteThoughts);

  module.exports = router;