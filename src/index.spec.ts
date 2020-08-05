import {generate} from './index';

describe('idil', () => {
    it('should generate check digit', () => {
        expect(generate('12345678')).toEqual(2);
    });

    it('should throws for non digits', () => {
        expect(() => generate('1234a67')).toThrow();
    });

    it('should throws for too short id', () => {
        expect(() => generate('1234')).toThrow();
    });

    it('should throws for too long id', () => {
        expect(() => generate('123456789')).toThrow();
    });
});
