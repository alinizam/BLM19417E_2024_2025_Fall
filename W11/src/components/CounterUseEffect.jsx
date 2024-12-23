import React,{useState,useEffect} from 'react'

export default function CounterUseEffect() {
    const [count,setState]=useState(0);
    const [countDependent,setStateDependent]=useState(0);
    const [countDependent1,setStateDependent1]=useState(0);
    
    useEffect(()=>{
       if (count%10==0){ 
           setStateDependent(count)
       }
    },[count]);

    useEffect(()=>{
        if (countDependent%100==0){ 
            setStateDependent1(count)
        }
     },[countDependent]);

    return(
    <div>
        <h1>Base {count}</h1>
        <h1>Dependent {countDependent}</h1>
        <h1>Dependent {countDependent1}</h1>
        <button onClick={()=>setState(count+1)}>Inc</button>
    </div>
  )
}
