import jwt from 'jsonwebtoken'



const auth=(req,res,next)=>{
    
 try{
    const token=req.headers.authorization.split(" ")[1]
    const isCustomToken=token.length<500
    if(token && isCustomToken){

        const decodedData=jwt.verify(token,'psychohelp')
        req.userId=decodedData?.id
        

    } else{
        const decodedData=jwt.decode(token)
        req.userId=decodedData?.sub
    } 
   next()
  
 }catch(error){
    console.log(error)}

}

export default auth








