import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) =>
{
    const course = props.course;

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises} />
        </div>
    )
}

export default Course;