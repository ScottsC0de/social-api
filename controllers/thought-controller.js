const { User, Thought, reactionSchema } = require('../models')

// CRUD
const createThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        await User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { thoughts: newThought._id } }, { runValidators: true, new: true });
        res.json(newThought);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const readAllThoughts = async (req, res) => {
    try {
        const allThoughts = await Thought.find({}).exec(); // need .exec() to use await for .find()
        res.json(allThoughts);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const readSingleThought = async (req, res) => {
    try {
        const singleThought = await Thought.findOne({ _id: req.params.thoughtId }).exec(); // need .exec() to use await for .findOne()
        res.json(singleThought);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const updateThought = async (req, res) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { new: true });
        res.json(updatedThought);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const deleteThought = async (req, res) => {
    try {
        const deletedThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        res.json(deletedThought);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

const createReaction = async (req, res) => {
    try {
        const newReaction = await Thought.findOneAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true });
        res.json(newReaction);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const deleteReaction = async (req, res) => {
    try {
        const deletedReaction = await Thought.findOneAndUpdate(req.params.thoughtId, { $pull: { reactions: req.body } }, { new: true });
        res.json(deletedReaction);
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