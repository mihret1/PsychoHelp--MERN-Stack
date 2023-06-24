import jwt from 'jsonwebtoken'



const auth=(req,res,next)=>{
    
    const token=req.headers.authorization.split(" ")[1]
    const isCustomToken=token.length<500

    if(token && isCustomToken){

        const decodedData=jwt.decode(token,'psychohelp')




    }

}






