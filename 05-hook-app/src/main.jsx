import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import CounterWithCustomHooks from './01-useState/CounterWithCustomHooks'
//import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import FocusScreen from './04-useRef/FocusScreen';
//import Memorize from './06-memos/Memorize';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>
)