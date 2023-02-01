const { User, Thought } = require('../models')

// CRUD
const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const readAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({}).exec(); // need exec() to use await for .find()
        res.json(allUsers);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const readSingleUser = async (req, res) => {
    try {
        const singleUser = await User.findOne({ _id: req.params.id }).exec(); // need exec() to use await for .findOne()
        res.json(singleUser);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
        res.json(updatedUser);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
        res.json(deletedUser);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const addFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.params.id }, { $push: { friends: req.params.friendId } });
        res.json(user);

        const friend = await User.findByIdAndUpdate({ _id: req.params.friendId }, { $push: { friends: req.params.friendId } });
        res.json(friend);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

const deleteFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } });
        res.json(user);

        const friend = await User.findByIdAndUpdate({ _id: req.params.friendId }, { $pull: { friends: req.params.friendId } });
        res.json(friend);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    createUser,
    readAllUsers,
    readSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
};