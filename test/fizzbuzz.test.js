import { describe, expect, it } from "vitest";
/**
 * Escribe una funcion que al pasarle un numero:
 *  - Devuelve "fizz" si es divisible por 3
 *  - Devuelve "buzz" si es divisible por 5
 *  - Devuelve "fizzbuzz" si es divisible por 3 y 5
 *  - Devuelve el mismo numero si no
 */
function fizzbuzz( number ) {
    if( typeof number !== 'number' ) throw new Error();
    if( Number.isNaN( number ) ) throw new Error();
    if( number % 3 === 0 && number % 5 === 0 ) return 'fizzbuzz';
    if( number % 3 === 0 ) return 'fizz';
    if( number % 5 === 0 ) return 'buzz';
    return number
}

describe("fizzbuzz", () => {
    it("should be a function", () => {
        expect(typeof fizzbuzz).toBe("function");
    });

    it("should throw if not number provided", () => {
        expect( () => fizzbuzz() ).toThrow( );
    })
})

describe('fizzbuzz1', () => {
    it('should return "fizz" if the number is divisible by 3', () => {
      expect(fizzbuzz(3)).toBe('fizz');
      expect(fizzbuzz(9)).toBe('fizz');
      expect(fizzbuzz(18)).toBe('fizz');
    });
  
    it('should return "buzz" if the number is divisible by 5', () => {
      expect(fizzbuzz(5)).toBe('buzz');
      expect(fizzbuzz(10)).toBe('buzz');
      expect(fizzbuzz(20)).toBe('buzz');
    });
  
    it('should return "fizzbuzz" if the number is divisible by 3 and 5', () => {
      expect(fizzbuzz(15)).toBe('fizzbuzz');
      expect(fizzbuzz(30)).toBe('fizzbuzz');
      expect(fizzbuzz(45)).toBe('fizzbuzz');
    });
  
    it('should return the same number if it is not divisible by 3 or 5', () => {
      expect(fizzbuzz(2)).toBe(2);
      expect(fizzbuzz(7)).toBe(7);
      expect(fizzbuzz(11)).toBe(11);
    });
  
    it('should throw an error if the input is not a number', () => {
      expect(() => fizzbuzz('test')).toThrow();
      expect(() => fizzbuzz(null)).toThrow();
      expect(() => fizzbuzz(undefined)).toThrow();
      expect(() => fizzbuzz(NaN)).toThrow();
    });
  });
