

export default (state,action) => {

    switch(action.type){
        case "ADD_WATCHLIST":
            return{
                ...state,
                watchlist:[...state.watchlist,action.payload]
            }
            default:
                return state
    }


}