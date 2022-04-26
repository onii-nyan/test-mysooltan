const initState = {
    lists:[]
}
const store =(state = initState, action)=>{
    switch(action.type){
        case 'GET_DATA':{
            return{
                ...state,
                lists: action.payload
            }
        }
        default:
            return state
    }
}



export default store