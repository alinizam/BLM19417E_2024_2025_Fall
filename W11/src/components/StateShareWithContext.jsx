import React,{createContext,useContext,useState} from "react";
const MyContext=createContext();

export default function StateShareWithContext(props) {
  const employee={firstName:"Ahmet",lastName:"Ak"};
  const f=()=>{return "Function is called"}; 
  const[count,setCount]=useState(5);
  return (
    <div>
    <MyContext.Provider value={count}>
       <StateShareWithContext1/>
     </MyContext.Provider>
    </div>
  );
}

function StateShareWithContext1(props) {
  return (
    <div>
      <StateShareWithContext2 />
    </div>
  );
}
function StateShareWithContext2(props) {
  const sValue=useContext(MyContext);
  //return <div>the name is= {sValue.firstName} {sValue.lastName} </div>;
  return <div>the name is= {sValue} </div>;
}
