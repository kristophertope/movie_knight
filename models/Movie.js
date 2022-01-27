const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: false,
        trim: true,
        maxlength: [200, 'Title must be no more than 200 characters']
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        unique: false,
        maxlength: 11
    },
    year: {
        type: Number,
        required: false,
        unique: false,
        trim: true,
        maxlength: [4, 'Please enter a valid year (YYYY)']
    },
    genre: {
        type: String,
        required: false,
        unique: false,
        trim: true,
        maxlength: [100, 'Genre must be no more than 100 characters']
    },
    mpaaRating: {
        type: String,
        required: false,
        unique: false,
        maxlength: 8
    },
    watched: {
        type: Boolean,
        required: false,
        unique: false
    },
    posterImg: {
        type: String,
        required: false,
        unique: false
    },
    userRating: {
        type: Number,
        required: false,
        unique: false,
        maxlength: 2
    },
    category: { //watch list, favorite, custom
        type: String,
        required: [true, 'Category is required'],
        unique: false,
        maxlength: [50, 'Category must be no more than 50 characters']
    },
    dateAdded: {
        type: Date,
        required: true,
        unique: false,
    },
    notes: {
        type: String,
        required: false,
        unique: false,
        trim: true,
        maxlength: [1000, 'Notes must be no more than 1,000 characters']
    }
})