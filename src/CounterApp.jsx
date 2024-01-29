import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ( {value} ) => {

    //counter es el valor y setCounter la función para modificarlo y renderizarlo
    const [ counter, setCounter ] = useState( value );

    const handleButton = ( valor ) => {
        //document.querySelector('#contador').innerHTML = Number(document.querySelector('#contador').innerHTML) + valor;
        
        if(valor === 0) { //reset
            setCounter( value );
            return;
        }
        setCounter( counter + valor );
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2 id="contador"> { counter } </h2>
        <button onClick= { (e) => { handleButton(1) } } >+1</button>
        <button onClick= { (e) => { handleButton(-1) } } >-1</button>
        <button onClick= { (e) => { handleButton(0) } } >Reset</button>
    </>);
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
  