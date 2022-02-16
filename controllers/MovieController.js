const Movie = require('../models/MovieModel')

// CREATE A MOVIE
const create=(req,res) => {
    if(!req.body){
        res.status(400).send({
            message: 'There was a problem with the request. Please try again'
        })
    }

    const movie={
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
    }

    Movie.create(movie)
    .then((data) =>{
        res.status(200).send(data)
    })
    .catch(err =>{
        res.status(500).send({message:"There was a problem creating the movie", error: err.message})
    })
}

// FIND ALL MOVIES
const findAll=(req,res) =>{
    Movie.findAll({raw: true, order: [['id', 'ASC']]})
    .then((data) =>{
        res.status(200).send(data)
    })
    .catch(err =>{
        res.status(500).send({message:err.message})
    })
}

// FIND MOVIE BY ID
const findByID=(req,res) =>{
    if(!req.params.id){
        res.status(400).send({message:"Movie not found"})
    }
    Movie.findAll({raw: true, where:{
        id: req.params.id
    }})
    .then((data) =>{
        res.status(200).send(data)
    })
    .catch(err =>{
        res.status(500).send({message:err.message})
    })
}

// UPDATE MOVIE
const update = (req, res) =>{
    if(!req.body.likes){
        res.status(400).send({
            message: 'There was a problem with the request. Please try again'
        })
    }
    Movie.update(req.body, {where:{
        id: req.params.id
    }})
    .then((data) =>{
        res.status(200).send(data)
    })
    .catch(err =>{
        res.status(500).send({message:err.message})
    })
}


// DELETE MOVIE
const remove = (req, res) =>{
    Movie.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((data) =>{
        console.log(data)
        res.status(200).send({message:"Deleted successfully"})
    })
    .catch(err =>{
        res.status(500).send({message:err.message})
    })
}

module.exports={
    create,
    findAll,
    findByID, 
    update, 
    remove
}