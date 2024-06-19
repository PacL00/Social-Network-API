const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'You need to provide a thought!',
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: 'You need to provide a username!'
    },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);