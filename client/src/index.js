import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/'

const store = createStore(reducers, [], reduxThunk);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


