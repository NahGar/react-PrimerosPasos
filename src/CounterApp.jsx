import { useState } from 'react';
import PropTypes from 'prop-types';




export const CounterApp = ( {value} ) => {

    const valorInicial = 15;

    //counter es el valor y setCounter la función para modificarlo y renderizarlo
    const [ counter, setCounter ] = useState( valorInicial );

    const handleButton = ( valor ) => {
        //document.querySelector('#contador').innerHTML = Number(document.querySelector('#contador').innerHTML) + valor;
        setCounter( counter + valor );
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2 id="contador"> { counter } </h2>
        <button onClick= { (e) => { handleButton(1) } } >+1</button>
        <button onClick= { (e) => { handleButton(-1) } } >-1</button>
    </>);
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
  