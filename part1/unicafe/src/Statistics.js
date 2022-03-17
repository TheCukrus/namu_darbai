import React from "react";

const Statistics = (props) =>
{
    const good = props.good;
    const neutral = props.neutral;
    const bad = props.bad;

    if ((good === 0) && (neutral === 0) && (bad === 0))
    {
        return <p>No feedback given</p>
    }
        return (
            <div>
                <h3>good {good}<br />
                    neutral {neutral} <br />
                    bad {bad}<br />
                    all {good + neutral + bad}<br />
                    average {(good - bad) / (good + neutral + bad)}<br />
                    positive {good / (good + neutral + bad) * 100}%

                </h3>
            </div>
        )
}

export default Statistics;