const { Thought, reactionSchema } = require('../models')

// CRUD
const createThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        await User.findOneAndUpdate({ _id: req.params.id }, { $push: { thoughts: newThought._id } });
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
        const newReaction = new reactionSchema(req.body);
        const thought = await Thought.findOneAndUpdate(req.params.thoughtId, { $push: { reactions: newReaction } }, { new: true });
        res.json(thought);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const deleteReaction = async (req, res) => {
    try {
        const deletedReaction = await reactionSchema.findByIdAndDelete(req.params.reactionId);
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