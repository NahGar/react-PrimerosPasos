import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones',() => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user =  getUser();

        //expect( JSON.stringify(testUser) ).toBe( JSON.stringify(user) );
        //expect( testUser ).toEqual( user );
        expect( testUser ).toStrictEqual( user );
    });


    test('getUsuarioActivo debe retornar un objeto', () => {


        const nombre = "Pepe";

        const testUser = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect( testUser ).toStrictEqual( user );

    });

});