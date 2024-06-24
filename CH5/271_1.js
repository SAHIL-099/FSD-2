// Write an expressJS code in which RESTapi is created for json object named Places I love which 
// contains name,country,state,city and rating out of 10(no decimal points) is given.upon passing 
// ratings on the browser it should display the places having that rating.i.e. on 
// localhost:30001/a/10 should display all the places having 10 ratings.

const express = require('express');
const router=express.Router()

const obj = [
    { name: 'Eiffel Tower', country: 'France', city: 'Paris', rating: 10 },
    { name: 'Great Wall of China', country: 'China', city: 'Beijing', rating: 9 },
    { name: 'Taj Mahal', country: 'India', city: 'Agra', rating: 10 },
    { name: 'Grand Canyon', country: 'USA',  city: 'abc', rating: 8 },
    { name: 'Colosseum', country: 'Italy', city: 'Rome', rating: 9 },
    { name: 'Machu Picchu', country: 'Peru', city: 'Cusco Region', rating: 10 },
  ];
  

router.get("/:rating",(req,res)=>{
    res.set("content-type","text/html")
    var curr_data=obj.filter((cd)=>cd.rating==req.params.rating)
    for(i of curr_data)
        {
            res.write("<h1>"+i.name+" </h1><br>")
        }
        res.send()
})

module.exports=router;

