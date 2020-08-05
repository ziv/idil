
/**
 * Generates check digit for Israeli ID number
 *
 * @param id 6-8 length numeric string.
 */
export function generate(id: string): number {
    if (!/^\d{6,8}$/.test(id)) {
        throw new Error('id must have length of 6 to 8 digits only');
    }
    const sum = id.padStart(8, '0')
        .split('')
        .map(num => parseInt(num, 10))
        .map((v, i) => (i % 2) ? v * 2 : v)
        .reduce((a, v) => a + ((v > 9) ? v - 9 : v), 0);
    return (10 - sum % 10) % 10;
}

export function validate(id: string, check?: number | string): boolean {
    if (undefined === check) {
        if (!/^\d{7,9}$/.test(id)) {
            throw new Error('id with check digit must have length of 7 to 9 digits only');
        }
        check = id.slice(-1);
        id = id.slice(0, -1);
    }
    return generate(id) === parseInt(check as string, 10);
}
