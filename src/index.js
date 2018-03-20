import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from './aws-exports';

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
Amplify.configure(aws_exports);
Analytics.record('siteVisitEvent');
