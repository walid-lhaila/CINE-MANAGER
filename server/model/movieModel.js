import mongoose from "mongoose";

var moviesSchema = new mongoose.Schema({
    title: {
        type : String,
        required: true,
    },

    description: {
        type : String,
        required: true,
    },

    picture: {
        type: String,
        required: true,
    }
})

const movieDb = mongoose.model('movies', moviesSchema);

export default movieDb;