const router = require("express").Router()
const List = require("../models/List")
const verify = require("../verifyToken")

// get list of movies
router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type
    const genreQuery = req.query.genre
    let list = []

    try {
        if (typeQuery) {
            if (genreQuery) {
                // if both type and genre are chosen, get list of movies that match both
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } }
                ])
            }
            else {
                // if only type is chosen, get list of movies that match type
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } }
                ])
            }
        }
        else {
            // if neither type nor genre are chosen, get random list of movies
            list = await List.aggregate([{ $sample: { size: 10 } }])
        }
        res.status(200).json(list)
    } catch (err) {
        res.status(500).json(err)
    }
})

// create list of movies
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body)

        try {
            const savedList = await newList.save()
            res.status(201).json(savedList)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
            res.status(403).json("You are not allowed to add a list!")
        }
})

// delete list of movies
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id)
            res.status(201).json("The list has been deleted!")
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
            res.status(403).json("You are not allowed to delete a list!")
        }
})

module.exports = router