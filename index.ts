
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
