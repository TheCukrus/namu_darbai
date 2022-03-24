import React from "react";

const Part = (props) =>
{

    return (
        <div>
            {props.part.map((ele, i) => <p key={i}>{ele.name}{ele.exercises}</p>)}
        </div>
    )
}

export default Part;