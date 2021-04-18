export const initialState={
    user:null,
    messages:null
}

const reducer=(state, action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
            ...state,
            user:action.user
            }
            case 'REMOVE_USER':
                return{
                    ...state,
                    user:null
            }
            case 'SET_MESSAGES':
                return{
                    ...state,
                    messages:action.messages
                }
                default :
                return state
    }
}

export default reducer