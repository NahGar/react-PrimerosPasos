import { getImagen } from "../../src/base-pruebas/11-async-await";

<<<<<<< HEAD
describe('Pruebas en 11-async-await.js', () => {

    test('getImagen debe retornar URL', async() => {

        const resp = await getImagen();
        console.log(resp);

        expect( resp ).not.toBe( 'No se encontro la imagen' );
=======
describe('Pruebas en 11-async-await', () => {

    test('getImagen debe retornar una URL de la imagen', async() => {

        const url = await getImagen();

        //console.log(url);

        expect( url ).toContain('https://');
>>>>>>> 64cf15ee0a480c797feab26cf0819655168ab8f1

    });

});