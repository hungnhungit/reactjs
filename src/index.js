import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';

import App from './App'

const store = configureStore();


const appRoot = document.getElementById('root');




ReactDOM.render(<Provider store={store}><App/></Provider> , appRoot);
registerServiceWorker();
