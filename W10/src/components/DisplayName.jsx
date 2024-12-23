import React from 'react'
import SubDisplayName from './SubDisplayName';
import SubDisplayAge from './SubDisplayAge';

export default function DisplayName(props) {
    let isWorking;
    if (props.isEmployed){
        isWorking="Yes"
    }
   /* directly displaying props
    return (
    <div>Name {props.firstName} {props.lastName} 
    {props.age} {props.isEmployed} {isWorking}</div>
  )*/
    return(
        <div>
            <SubDisplayName name={props.firstName}/>
            <SubDisplayName name={props.lastName}/>
            <SubDisplayAge age={props.age}/>
        </div>
        
    )
}
