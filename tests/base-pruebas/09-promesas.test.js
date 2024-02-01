import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas',  () => {

    //usar la función done (u otro nombre) es una de las maneras para utilizar funciones async
    test('getHeroeByIdAsync debe de retornar un héroe', (done) => { 
       
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            });
    });

    test('getHeroeByIdAsync debe obtener un error si héroe no existe', (done) => { 
       
        const id = 99;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBeFalsy();

                done();
            })
            .catch( error => { 

                expect( error ).toBe( 'No se pudo encontrar el héroe id:' + id );

                done();
            });
    });

});