import React, { useState } from 'react'
import './index.css'

const App = () => {

    const [score, setScore] = useState(0)
    return (
        <>
            <h1> Counter App is Here :-</h1>
            <h3> Counting is :- {score}</h3>
            <button onClick={() => (score < 25) ? setScore(score + 1) : ""}> Increament </button>
            <button onClick={() => setScore(score - 1)}> Decrement </button>
            <button onClick={() => setScore(0)}> Reset </button>
        </>
    );
}

export default App