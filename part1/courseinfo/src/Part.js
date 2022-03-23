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
            <p>
                {props.name4} {props.exercises4}
            </p>
        </div>
    )
}

export default Part;