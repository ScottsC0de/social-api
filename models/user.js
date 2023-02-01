const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'] // validate or required
        },
        thoughts: [{ type: Types.ObjectId, ref: 'Thought' }],
        friends: [{ type: Types.ObjectId, ref: 'User' }]
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;