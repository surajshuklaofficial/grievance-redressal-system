import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import App from './App';
import './global.css';
import reducers from './reducers';

const store=configureStore({
    reducer: reducers,
    middleware: [thunk]
})

ReactDom.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
)