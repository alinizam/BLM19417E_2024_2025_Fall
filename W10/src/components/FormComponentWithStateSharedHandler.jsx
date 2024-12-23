import React,{useState} from 'react'

export default function FormComponentWithStateSharedHandler() {
   
  const [employees,setEmployees]=useState({firstName:null, lastName:null});
  

  const changeHandler=(event)=>{
    console.log(event.target.name, " ",event.target.value);
    setEmployees(employees=>({...employees,[event.target.name] : 
                                            event.target.value}));
  }
  
  const handleClick=(event)=>{
        if (employees.firstName=="Ak"){
            setEmployees({firstName : null});
        }
  }
  return (
    <form>
        First Name <input type="text" name="firstName"  onChange={changeHandler}/>
        Last Name <input type="text" name="lastName"   onChange={changeHandler}/>
        <input type="button" value="DisplayName" onClick={handleClick} />
        <h1>{employees.firstName} {employees.lastName}</h1>
    </form>
  )
}