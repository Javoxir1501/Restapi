const mongoose = require("mongoose")
const schema = mongoose.Schema

const db = new schema({
    title: {
        type: String,
    },
    category: {
        type: String,
    },
    country: {
        type: String,
    },
    year: {
        type: Number,
    },
    director: {
        type: String,
    },
    imdb_score: {
        type: Number,
    }

})



module.exports = mongoose.model("Movies", db)