import React from "react";
import Part from "./Part";

const Content = (props) =>
{
    return (
        <div>
            <Part name1={props.parts[0].name} exercises1={props.parts[0].exercises} />
            <Part name2={props.parts[1].name} exercises2={props.parts[1].exercises}/> 
            <Part name3={props.parts[2].name} exercises3={props.parts[2].exercises}/>
        </div>
    )
}

export default Content;