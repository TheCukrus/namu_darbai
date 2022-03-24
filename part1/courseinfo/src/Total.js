import React from "react";

const Total = (props) =>
{

  const total = props.course.parts.reduce((s, p) => s + p.exercises, 0)

  return (
    <div>
      <h4>Number of exercises {total} </h4>
    </div>
  )
}

export default Total;