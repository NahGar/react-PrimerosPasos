import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 05-funciones',() => {

    test('getUser debe retornar un objeto', () => {

        const testAvenger = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const avenger =  usContext(testAvenger);

        //expect( JSON.stringify(testUser) ).toBe( JSON.stringify(user) );
        //expect( testUser ).toEqual( user );
        expect( avenger ).toStrictEqual( {
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});