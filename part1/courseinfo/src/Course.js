import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) =>
{
    const course = props.course;
    const course_view = [];
    for (let i = 0; i < course.length; i++)
    {
        course_view.push(<Header key={course_view.length} course={course[i].name} />)
        course_view.push(<Content key={course_view.length} part={course[i]} />)
        course_view.push(<Total key={course_view} course={course[i]} />)
    }

    return (
        <div>
            {course_view}
           
        </div>
    )
}

export default Course;