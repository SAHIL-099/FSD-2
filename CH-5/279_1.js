// How to implement search and filtering in a REST API with Express.js ?

var express=require('express')
var router=express.Router()


var data=[{id:102,name:"sp",city:"ahmedabad"},
    {id:103,name:"ap",city:"ahmedabad"},
    {id:102,name:"dp",city:"surat"},
    {id:104,name:"sp",city:"mahesana"}
]

router.get("/:id",(req,res)=>{
    var ids=data.filter((i)=>i.id==req.params.id)
     res.send(ids)
})


router.get("/:name",(req,res)=>{
    var names=data.filter((n)=>n.name.toLowerCase()==req.params.name)
    res.send(names)
})


router.get("/:city",(req,res)=>{
    var citys=data.filter((c)=>c.city.toLowerCase()==req.params.city)
    res.send(citys)
})


module.exports=router;