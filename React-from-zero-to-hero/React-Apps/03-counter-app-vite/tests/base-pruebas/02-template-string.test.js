import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('test on 02-template-string', () => {

    test('getSaludo should return "Hola Daniel"', () => {
        const name = 'Daniel';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });

});