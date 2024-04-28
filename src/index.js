import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from "./toolkitRedux";
import Toaster from "./components/utils/Toaster";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
            <Toaster />
        </Provider>
    </React.StrictMode>
);
