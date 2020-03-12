const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: 
        },
        exercises: [
            {
                type: {
                    String,
                trim: true,
                required: "Enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    
                }

            }
        ]
    }
)