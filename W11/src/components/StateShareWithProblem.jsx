import React from "react";

export default function StateShareWithProblem(props) {
  return (
    <div>
      <StateShareWithProblem1 name={props.name} />
    </div>
  );
}

function StateShareWithProblem1(props) {
  return (
    <div>
      <StateShareWithProblem2 name={props.name} />
    </div>
  );
}
function StateShareWithProblem2(props) {
  return <div>the name is= {props.name} </div>;
}
