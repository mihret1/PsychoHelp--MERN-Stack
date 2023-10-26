
export default(state=[],action)=>{

    switch(action.type){
        case 'FETCH_ALL':
            return {
                ...state,
                posts:action.payload.data,
                currentPage:action.payload.currentPage,
                numberOfPage:action.payload.numberOfPage,

            }

        case 'CREATE':
            return [...state,action.payload]
            
        case 'UPDATE':
            return state.map((post)=>post._id ===action.payload._id ? action.payload :post)
            
        case 'DELETE':
            return state.filter((post)=>post._id !== action.payload._id) 

        case 'LIKE':
            return state.map((post)=>post._id===action.payload._id ? action.payload :post)    
        default:
            return state       
    }

}




