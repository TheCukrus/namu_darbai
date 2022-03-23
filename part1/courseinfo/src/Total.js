import React from "react";

const Total = (props) =>
{
  console.log(props)
const parts = props.course.parts
  const total = parts.reduce((s, p) => s + p.exercises,0)
  console.log(total)
    return(
        <div>
      <h4>Number of exercises {total} </h4>
        </div>
    )
}

export default Total;