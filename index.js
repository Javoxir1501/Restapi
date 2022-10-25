const express = require("express")
const router = express.Router()
const movieDb = require("../model/movie")

//add

router.get("/api/movies", (req, res)=>{
    movieDb.find({}, (error, data)=>{
        res.send(data)
    })
})

router.post("/api/movies", (req, res)=>{
    const {title, category, country, director, imdb_score, year} = req.body
    const db = new movieDb({
        title: title,
        category: category,
        country: country,
        director: director,
        imdb_score: imdb_score,
        year: year
    })
    db.save()
})


// update

router.get("/api/movies/:id", (req, res)=>{
    movieDb.findById(req.params.id, (err, data)=>{
        res.send(data)
    })
})

router.put("/api/movies/:id", (req, res)=>{
    const {title, category, country, director, imdb_score, year}= req.body

    const db = {

        title: title,
        kategoriya: category,
        country: country,
        director: director,
        imdb_score: imdb_score,
        year: year
    }

    movieDb.findByIdAndUpdate(req.params.id, db, (err, data)=>{
        res.send(data)
    })
})

//delete

router.get("/api/movies/:id", (req, res)=>{
    movieDb.findById(req.params.id, (err, data)=>{
        res.send(data)
    })
})

router.delete("/api/movies/:id", (req, res)=>{
    const {title, category, country, director, imdb_score, year}= req.body

    const db = {
        
        title: title,
        kategoriya: category,
        country: country,
        director: director,
        imdb_score: imdb_score,
        year: year
    }

    movieDb.findByIdAndDelete(req.params.id, db, (err, data)=>{
        res.send(data)
    })
})


//top 10
router.get("/top/like", (req, res)=>{
    const promise = movieDb.find({}).sort({like: -1}).limit(5)
        promise.then(date=>{
            res.render("index", {
                title: "top like",
                data: data,
                searchs: "top likes"
            })
        }).catch(err=>{
            console.log(err);
        })
})








module.exports = router 