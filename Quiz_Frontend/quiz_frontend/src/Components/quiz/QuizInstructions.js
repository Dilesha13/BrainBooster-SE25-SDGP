import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import answer from '../../assets/img/answer.png';
import fiftyFifty from '../../assets/img/fiftyFifty.PNG';
import hints from '../../assets/img/hints.PNG';
import options from '../../assets/img/options.PNG';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div className="instructions container">
            <h1>How to do BrainBooster Quiz</h1>
            <p>Ensure you read this guide from start to finish.</p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
                <li>Each game consists of 15 questions.</li>
                <li>
                    Every question contains 4 options.
                    
                    <img src={options} alt="Quiz App options example" />
                </li>
                <li>
                    Select the option which best answers the question by clicking (or selecting) it.
                    <img src={answer} alt="Quiz App answer example" />
                </li>
                <li>
                    Each game has 2 lifelines namely:
                    <ul id="sublist">
                        <li>2 50-50 chances</li>
                        <li>5 Hints</li>
                    </ul>
                </li>
                <li>
                    Selecting a 50-50 lifeline by clicking the icon
                    <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    will remove 2 wrong answers, leaving the correct answer and one wrong answer
                    <img src={fiftyFifty} alt="Quiz App Fifty-Fifty example"/>
                </li>
        
            </ul>
            <div>
                <span className="left"><Link to="/">No take me back</Link></span>
                <span className="right"><Link to="/play/quiz">Okay, Let's do this!</Link></span>
            </div>
        </div>
    </Fragment>
);

export default QuizInstructions;