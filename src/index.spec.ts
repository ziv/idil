import {generate, validate} from './index';

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

    it('should validate id (inline check digit)', () => {
        expect(validate('123456782')).toBeTruthy();
    });

    it('should validate id (argument check digit)', () => {
        expect(validate('12345678', 2)).toBeTruthy();
        expect(validate('12345678', '2')).toBeTruthy();
    });

    it('should validate falsy id check digit', () => {
        expect(validate('123456781')).toBeFalsy();
    });
});
