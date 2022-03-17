import React from "react";

const StatisticLine = (props) =>
{

    return(
        <div>
            <h3>{props.text} {props.value}</h3>
        </div>
    )
}

export default StatisticLine;