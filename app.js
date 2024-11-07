const express = require('express')

const Joi = require('joi')


const app = express();

 app.use(express.json());


 //create data vidly 

 const genres = [

    {
        id: 1,
        name: "Drama"

    },

    {

        id: 2 ,

        name: "Horor"

    },

    {
        id: 3 ,
        name: "Action"
    }
 ]
 // get vidly

 app.get('/api/vidly' , (req , res)=>{

    res.send(genres)
 })


 // get specifi vidly

 app.get('/api/vidly/:id' , (req , res)=>{

   const  genre =  genres.find(g=>g.id == parseInt(req.params.id));

    if(!genre) return res.status(400).send('Genres Are Not Found')

    res.send(genre)    
 })


 const validateGenres = (genre) =>{

      const schema = Joi.object({

        name: Joi.string().min(3).required()
      });


      return  schema.validate(genre)

 }

 app.post('/api/vidly' , (req ,res)=>{ 

    const {error} = validateGenres(req.body)

    if(error) return  res.status(400).send(error.details[0].message)

    const genre = {

        id: genres.length+1 ,
        name : req.body.name
    }

    genres.push(genre)

    res.status(201).send(genre)
 })


 app.put('/api/vidly/:id' , (req , res)=>{

    const {error} = validateGenres(req.body)

    if(error) return  res.status(400).send(error.details[0].message)

    const  genre =  genres.find(g=>g.id == parseInt(req.params.id));

    if(!genre) return res.status(400).send('Genres Are Not Found')

        genre.name = req.body.name

       res.send(genre)





 })

 app.delete('/api/vidly/:id' , (req ,res)=>{

    const  genre =  genres.find(g=>g.id == parseInt(req.params.id));

    if(!genre) return res.status(400).send('Genres Are Not Found')

   const index = genres.indexOf(genre)
   
   genres.splice(index , 1);

   res.send(`Genres-Deleted Successsfully`)




 })
 Port =9000

 app.listen(Port , ()=>{console.log(`Server running port ${Port}`)})