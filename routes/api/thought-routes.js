const router = require('express').Router();
const {
    createThought,
    readAllThoughts
    // readSingleThought,
    // updateThought,
    // deleteThought,
    // createReaction,
    // deleteReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(readAllThoughts).post(createThought);

// router.route('/:thoughtId').get(readSingleThought).put(updateThought).delete(deleteThought);

// router.route('/:thoughtId/reactions').post(createReaction);

// router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;