const { Thought, Reaction } = require('../models')

// CRUD
const createThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        res.json(newThought);

        await User.findOneAndUpdate({ _id: req.params.id }, { $push: { thoughts: newThought._id } });
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const readAllThoughts = async (req, res) => {
    try {
        const allThoughts = await Thought.find({}).exec(); // need exec to use await for .find()
        res.json(allThoughts);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const readSingleThought = async (req, res) => {
    try {
        const singleThought = await Thought.findOne({ _id: req.params.id }).exec(); // need exec to use await for .find()
        res.json(singleThought);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const updateThought = async (req, res) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
        res.json(updatedThought);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const deleteThought = async (req, res) => {
    try {
        const deletedThought = await Thought.findOneAndDelete({ _id: req.params.id });
        res.json(deletedThought);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

const createReaction = async (req, res) => {
    try {
        const newReaction = await Reaction.create(req.body);
        res.json(newReaction);

        const thought = await Thought.findOneAndUpdate(req.params.thoughtId, { $push: { reactions: newReaction } }, { new: true });
        res.json(thought);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const deleteReaction = async (req, res) => {
    try {
        const deletedReaction = await Reaction.findByIdAndDelete(req.params.reactionId);
        res.json(deletedReaction);

        const thought = await Thought.findOneAndUpdate(req.params.thoughtId, { $pull: { reactions: deletedReaction } }, { new: true });
        res.json(thought);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    createThought,
    readAllThoughts,
    readSingleThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
}