import React, { useReducer } from "react"
export const BContext = React.createContext();
export const CContext = React.createContext();
const initialStateB = {
    on:true
}
const initialStateC = {
    on:false,
    enabled:true
}
const reducerB = (state = initialStateB,action) => {
    console.log('reducer run');
    switch(action.type){
        case 'TOGGLE_ON':
            return {on:!state.on};
        default:
            return state;
    }
}
const reducerC = (state = initialStateC, action) => {
    console.log('reducer run, action: ',action);
    switch(action.type){
        case 'TOGGLE_ON':
            return {...state,on:!state.on};
        case 'TOGGLE_ENABLED':
            return {...state,enabled:!state.enabled};
        default:
            return state;
    }
}

const Store = (props) => {
    const [stateB, dispatchB] = useReducer(reducerB,initialStateB);
    const [stateC, dispatchC] = useReducer(reducerC,initialStateC);
    return <BContext.Provider value={{state:stateB,dispatch:dispatchB}}>
        <CContext.Provider value={{state:stateC,dispatch:dispatchC}}>
            {props.children}
        </CContext.Provider>
    </BContext.Provider>
}
export default Store;
// sudhanshu.mittal.iitg@gmail.com 
// yugal@waxwing.ai