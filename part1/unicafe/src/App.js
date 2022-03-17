import { useState } from "react";

function App()
{
  //save clicks of each button to its own state

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //functions for buttons
  const handle_good = () => setGood(good + 1);
  const handle_neutral = () => setNeutral(neutral + 1);
  const handle_bad = () => setBad(bad + 1)


  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handle_good}>good</button>
      <button onClick={handle_neutral}>neutral</button>
      <button onClick={handle_bad}>bad</button>

      <h1>statistics</h1>
      <h3>good {good}<br />
        neutral {neutral} <br />
        bad {bad}<br />
        all {good + neutral + bad}<br />
        average {(good - bad) / (good + neutral + bad)}<br />
        positive {good / (good + neutral + bad)*100}%

      </h3>

    </div>
  );
}

export default App;
