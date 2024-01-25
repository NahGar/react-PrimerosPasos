import { useState } from 'react';
import PropTypes from 'prop-types';

const handleButton = ( valor ) => {
    //document.querySelector('#contador').innerHTML = Number(document.querySelector('#contador').innerHTML) + valor;
    value += valor;
}


export const CounterApp = ( {value} ) => {

    const [ counter ] = useState( 15 );

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
  