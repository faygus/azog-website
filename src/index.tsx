import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/components/App/App';
import * as serviceWorker from './serviceWorker';
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-theme.min.css';
import './assets/css/fontAwesome.css';
import './assets/css/hero-slider.css';
import './assets/css/tooplate-style.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
