import React,{useReducer} from 'react'

const reducer=(state,action)=>{
    if (action.type=="Inc"){
        return ({count:state.count+1});
    }else if(action.type=="Dec"){
        return ({count:state.count-1});
    }
    return 0;    
}
const initialState={count:0};

export default function StateWithReducerObject() {
    const [state,dispatch]=useReducer(reducer, initialState);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>{dispatch({type:"Inc"})}}>Inc</button>
            <button onClick={()=>{dispatch({type:"Dec"})}}>Dec</button>
        </div>
    )
}
