const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an exercise type"
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                time: Number,
                trim: true
            },
            weight: {
                type: Number,
                trim: true
            },

            reps: {
                type: Number,
                trim: true
            },
            sets: {
                type: Number,
                trim: true
            }

        }
    ]


});

workoutSchema.methods.makebuff = function() {
    this.exercises = `${this.exercises}...are gruelling!`
    return this.exercises;
};

const Exercises = mongoose.model("Exercises", workoutSchema);

module.exports = Exercises;