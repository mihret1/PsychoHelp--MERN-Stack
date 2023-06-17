export default(users=[],action)=>{

    switch(action.type){
        case 'SIGNIN':
            return [...users,action.payload]
        case 'SIGNUP':
            return [...users,action.payload]
        default:
            return users    
    }

}