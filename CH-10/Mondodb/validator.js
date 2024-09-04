const mg=require('mongoose')
const validator=require('validator')
mg.connect("mongodb://127.0.0.1:27017/validation")
.then(()=>{console.log("connected")})
.catch((err)=>{console.error(err)})

mg.pluralize(null)
const myschema=new mg.Schema({
    name:{type:String,
        required:[true,'Name is required'],
        maxlength:[20,'must be less than 20'],
        minlenght:[5,"must be grater than 5"],
        trim:true,
        uppercase:true,
        validate:{validator:(v)=>{return validator.isAlphanumeric(v)}} 
       },
    email:{type:String,
        required:true,
        unique:true,
        validate:{validator:(v)=>{return validator.isEmail(v)}}
    },
    quantity:{type:Number,
        min:0,
        max:[5,'max 5 quantity allowed'],
        default:1}
    
    })

    const product=mg.model('product',myschema)

    const createproduct=async()=>{
        try{
            const product1=new product({ 
                name:"product3", 
                email:"test3@gmail.com",
                quantity:2
        })
        const result=await product1.save()
    }
    catch(e){
        console.error(e)
    }
}

createproduct()