import React,{useReducer} from 'react'

const reducer=(state,action)=>{
    if (action.type=="Inc"){
        console.log(state);
        return (state+1);
    }else if(action.type=="Dec"){
        return(state-1);
    }
    return 0;    
}
const initialState=0;

export default function StateWithreducer() {
    const [count,dispatch]=useReducer(reducer, initialState);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{dispatch({type:"Inc"})}}>Inc</button>
            <button onClick={()=>{dispatch({type:"Dec"})}}>Dec</button>
        </div>
    )
}
