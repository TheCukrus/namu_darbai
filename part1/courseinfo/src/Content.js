import React from "react";
import Part from "./Part";

const Content = (props) =>
{
    return (
        <div>
            <Part name1={props.part1.name} exercises1={props.part1.exercises} />
            <Part name2={props.part2.name} exercises2={props.part2.exercises}/> 
            <Part name3={props.part3.name} exercises3={props.part3.exercises}/>
        </div>
    )
}

export default Content;