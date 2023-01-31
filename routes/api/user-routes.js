const router = require('express').Router();
const {
    createUser,
    readAllUsers,
    readSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/user-controller');

router.route('/').get(readAllUsers).post(createUser);

router.route('/:id').get(readSingleUser).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;