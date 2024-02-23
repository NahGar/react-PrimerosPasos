import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    test('debe de hacer match con el snapshot', () => {

        const subTitle = 'Subtitulando';
        const { container } = render( <FirstApp subTitle= { subTitle } /> );

        expect( container ).toMatchSnapshot();

    });

    test('debe mostrar el título en un H1', () => {
u
        const title = 'Titulando';
        const { container, getByText } = render( <FirstApp title= {title} /> );

        expect( getByText(title) ).toBeTruthy();
        
        const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toBe(title);
        expect(h1.innerHTML).toContain(title);

    });

 });