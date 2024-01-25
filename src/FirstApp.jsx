//import {Fragment} from 'react';
import PropTypes from 'prop-types';

const newMessage = 'Nahuel';

export const FirstApp = ( { title, subTitle, numero } ) => {

    /*
    if(!title) {
      throw new Error("Falta indicar 'title'");
    }
    */

    return (
      //<Fragment>
      <>
        <h1> { title } </h1>
        <p> { subTitle } </p>
        <p> { numero } </p>
      </>
    )
}

const getMessage = () => {
  return "Este es el mensaje àèìòùñ";
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  title: 'No hay título',
  subTitle: 'No hay subtítulo',
  nombre: 'Nahuel',
  numero: 123
}