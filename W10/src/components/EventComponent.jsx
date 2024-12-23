import React from 'react'

export default function EventComponent() {
  const clickHandler=function(){
    alert('HelloReact');
  }
  const clickHandlerLambda=()=>{alert('HelloclickHandlerLambda')} 
  return (
    <div>
        <button onClick={()=>{alert('Hello')}}> GiveMessageLambda</button>
        <button onClick={clickHandler}> GiveMessageFromReact</button>
        <button onClick={clickHandlerLambda}> GiveMessageFromReactLambda</button>

    </div>
  )
}
