import { expect, it, describe } from "vitest";
import { formatMoney } from "./money";

describe('FormatMoney', () =>{
    it('Converts 1999 in $19.99', ()=>{
        expect(formatMoney(1999)).toBe('$19.99')
    })
    it('Converts 1090 in $10.90', ()=>{
        expect(formatMoney(1090)).toBe('$10.90')
        expect(formatMoney(100)).toBe('$1.00')
    })
})