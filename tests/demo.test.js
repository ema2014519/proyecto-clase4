
describe('Pruebas de demostración para CI', () => {

    test('Esta prueba debe PASAR', () => {
        const suma = 1 + 1;
        expect(suma).toBe(2);
    });

    test('Esta prueba debe FALLAR (propósito de demostración)', () => {
        const resta = 10 - 5;
        // Forzamos el fallo comparando con un valor incorrecto
        expect(resta).toBe(100);
    });

});
