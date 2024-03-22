import bcrypt from 'bcrypt'

export register= warpper(async(req,res)=>{
const {username,email, password}=req.body
const existsUser.findOne({email},{'__v':false})
if(existsUser){
res.status(400).json({status:'fail',message:'some went wrong'})
}
})