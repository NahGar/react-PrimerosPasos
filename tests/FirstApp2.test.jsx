import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    /*
    test('debe de hacer match con el snapshot', () => {

        const subTitle = 'Subtitulando';
        const { container } = render( <FirstApp subTitle= { subTitle } /> );

        expect( container ).toMatchSnapshot();

    });
    */

    test('debe mostrar el título en un H1', () => {

        const title = 'Titulando';
        const { container, getByText, getByTestId } = render( <FirstApp title= {title} /> );

        expect( getByText(title) ).toBeTruthy();
        
        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toBe(title);
        //expect(h1.innerHTML).toContain(title);

        //evalua que existe
        //expect( getByTestId('test-title') ).toBeTruthy();
        expect( getByTestId('test-title').innerHTML ).toBe( title );

    });

    test('Debe mostrar el subtitulo enviado por props ', () => {
      
        const title = 'Titulando';
        const subTitle = 'No hay subtítulo';
        const { getAllByText } = render( 
            <FirstApp 
                title={title}
                subTitle={subTitle}
            /> 
        );

        expect( getAllByText(subTitle).length ).toBe(2);
    });
    

 });