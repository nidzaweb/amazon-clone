import React, { Children, createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();


export const StateProvider = ({initialState, reducer, children})=>(

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);



export const useStateContext = ()=> useContext(StateContext);


