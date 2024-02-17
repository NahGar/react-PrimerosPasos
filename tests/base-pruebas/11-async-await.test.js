import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js', () => {

    test('getImagen debe retornar URL', async() => {

        const resp = await getImagen();
        console.log(resp);

        expect( resp ).not.toBe( 'No se encontro la imagen' );
    });
});