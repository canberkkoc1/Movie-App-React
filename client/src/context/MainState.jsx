import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const MainContext = createContext();

const initialState = {
    watchlist:[],
}


export const MainProvider = (props) => {

    const [state,dispatch] = useReducer(AppReducer,initialState)

    const addMovieWatchlist = (movie) => {

        dispatch({type:"ADD_WATCHLIST",payload:movie})
    }


    return (
        <MainContext.Provider value={{
            watchlist:state.watchlist,
            addMovieWatchlist
        }}>
            {props.children}
        </MainContext.Provider>
    )

}