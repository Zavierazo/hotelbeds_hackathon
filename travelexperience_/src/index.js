import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('root'));

registerServiceWorker();
