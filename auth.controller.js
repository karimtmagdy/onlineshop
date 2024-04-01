import bcrypt from 'bcrypt'

export register= warpper(async(req,res)=>{
const {username,email, password}=req.body
const existsUser.findOne({email},{'__v':false})
if(existsUser){
res.status(400).json({status:'fail',message:'some went wrong'})
}
})

// for testing api

app.use('/categories',(req,res)=>{
if(!categories){
res.status(404).json({status:'fail', message:'not found'})
}
res.status(200).json({
status:'success', message:'get all categories',data: categories
})
})
