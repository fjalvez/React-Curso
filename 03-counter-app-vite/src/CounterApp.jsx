import { useState } from 'react';
import PropTypes from 'prop-types';


// Functional component
export const CounterApp = ( { value } ) => {

  const [counter, setCounter] = useState ( 15 );

  const handleAdd = () => {
    //setCounter( (c) => c + 1 );
    setCounter( counter + 1 );
  }

  const handleSubtract = () => {
    setCounter( counter - 1 );
  }

  const handleReset = () => {
    setCounter( 0 );
  }

  return (
    <>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>

    <button onClick={ handleAdd }> +1  </button>
    <button onClick={ handleSubtract }> -1  </button>
    <button onClick={ handleReset }> Reset  </button>
    </>
  )
}

CounterApp.propTypes = {
    counter: PropTypes.number.isRequired
}