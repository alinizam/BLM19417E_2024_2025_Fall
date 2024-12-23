import React,{useRef,useState,useEffect} from 'react'

export default function StoreStateBetweenRender() {
  const preValue=useRef();
  const [value,setValue]=useState(null);
  useEffect(()=>{console.log(value);
                 preValue.current=value;
                },
            [value]);
  return (
    <div>
        <input type="text" onChange={(e)=>setValue(e.target.value)} />
        <p>{preValue.current}</p>
    </div>
  )
}
