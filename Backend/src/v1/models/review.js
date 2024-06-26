const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    foodItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItem",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    rating: {
        type: Number,
        required: true
    }, 
    comments: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Comment",
        }
    ], 
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ]
},  {
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
    timestamps: true,
})

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review