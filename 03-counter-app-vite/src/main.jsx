import React from 'react';
import ReactDOM from 'react-dom/client';
import {FirstApp} from './FirstApp'

import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <FirstApp counter={ 18 }/>
 </React.StrictMode>
)