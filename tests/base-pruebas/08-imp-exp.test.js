import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { default as heroesData } from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un héroe por Id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC'} );
    });

    test('getHeroeById debe retornar undefined si no existe Id', () => {

        const id = 99;
        const heroe = getHeroeById( id );

        expect( heroe ).toBeUndefined;
    });

    test('getHeroesByOwner debe retornar 3 héroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toEqual( 3 );

        expect( heroes ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },
        ]);

        expect( heroes ).toEqual( heroesData.filter( (h) => h.owner === owner ) );
    });

    test('getHeroesByOwner debe retornar 2 héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toEqual( 2 );

        expect( heroes ).toEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' },
        ]);

        expect( heroes ).toEqual( heroesData.filter( (h) => h.owner === owner ) );
    });
    
});
