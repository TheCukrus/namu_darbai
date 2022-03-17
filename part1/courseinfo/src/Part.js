import React from "react";

const Part = (props) =>
{
    return (
        <div>
               <p>
                {props.name1} {props.exercises1}
            </p>

            <p>
                {props.name2} {props.exercises2}
            </p>
            <p>
                {props.name3} {props.exercises3}
            </p>
        </div>
    )
}

export default Part;