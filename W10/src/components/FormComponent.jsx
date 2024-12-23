import React from 'react'

export default function FormComponent() {
  const setFirstName=(event)=>{
    console.log(event.target.value)
  }
  return (
    <form>
        First Name <input type="text" value="firstName" onChange={setFirstName}/>
        Last Name <input type="text" value="lastName" onChange={setFirstName}/>
        <input type="button" value="DisplayName" />
    </form>
  )
}
