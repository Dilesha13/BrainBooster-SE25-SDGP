import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import M from 'materialize-css';
import classnames from 'classnames';

import questions from '../../questions.json';
import isEmpty from '../../utils/is-empty';

import correctNotification from '../../assets/audio/correct-answer.mp3';
import wrongNotification from '../../assets/audio/wrong-answer.mp3';
import buttonSound from '../../assets/audio/button-sound.mp3';