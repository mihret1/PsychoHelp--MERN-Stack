export default(auth=[],action)=>{

    switch(action.type){
        case 'SIGNIN':
            return [...auth,action.payload]
        case 'SIGNUP':
            return [...auth,action.payload]
        default:
            return auth    
    }

}