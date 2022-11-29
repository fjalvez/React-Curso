import React from 'react'
import ReactDOM from 'react-dom/client'
//import CounterWithCustomHooks from './01-useState/CounterWithCustomHooks'
import { SimpleForm } from "./02-useEffect/SimpleForm";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SimpleForm />
  // </React.StrictMode>
)