import React,{useState} from 'react'

export default function FormComponentWithState() {
  const [firstName,setFirstName]=useState(null);
  const [lastName,setLastName]=useState(null);

  const setFirstNameHandler=(event)=>{
    setFirstName(event.target.value);
  }
  const setLastNameHandler=(event)=>{
    setLastName(event.target.value);
  }
  const handleClick=(event)=>{
        if (firstName=="Ak"){
            setFirstName(null);
        }
  }
  return (
    <form>
        First Name <input type="text"   onChange={setFirstNameHandler}/>
        Last Name <input type="text"   onChange={setLastNameHandler}/>
        <input type="button" value="DisplayName" onClick={handleClick} />
        <h1>{firstName} {lastName}</h1>
    </form>
  )
}