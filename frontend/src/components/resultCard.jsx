import React from 'react'

import './result.css'

const ResultCard = ({ wpm = 0, correct = 0, wrong = 0, correctCharacters = 0, totalKeystrokes = 0 }) => {

    return (

        <div className={wpm > 0 ? "result-container" : "hide-result"}>

            <div className="result-card">

                <div className="wpm-box">

                    <p className="wpm-value" title='Words per Minute: 1 word equal 5 correct keystrokes'>{wpm} <span className="wpm-unit">WPM</span></p>

                    <p className="wpm-label">(Words Per Minute)</p>

                </div>

                <div className="stats-box">

                    <table>

                        <tbody>
                            <tr>

                                <th>Keystrokes</th>

                                <td>(<span style={{ color: "green" }}>{correctCharacters}</span>/<span style={{ color: "red" }}>{totalKeystrokes-correctCharacters}</span>) {totalKeystrokes}</td>

                            </tr>

                            <tr>

                                <th>Accuracy</th>

                                <td>{totalKeystrokes > 0

                                    ? `${Math.round((correctCharacters / totalKeystrokes) * 100)}%`

                                    : "0%"}</td>

                            </tr>

                            <tr>

                                <th>Correct</th>

                                <td style={{ color: "green" }}>{correct}</td>

                            </tr>

                            <tr>

                                <th>Wrong</th>

                                <td style={{ color: "red" }}>{wrong}</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

};



export default ResultCard 