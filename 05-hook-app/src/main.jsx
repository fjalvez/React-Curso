import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import CounterWithCustomHooks from './01-useState/CounterWithCustomHooks'
//import { SimpleForm } from "./02-useEffect/SimpleForm";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FormWithCustomHook />
  // </React.StrictMode>
)