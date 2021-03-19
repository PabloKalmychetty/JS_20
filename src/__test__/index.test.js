"use strict"
import { myltiply } from '../index.js';

xdescribe("test multiply", 
() => {
    it('myltiply 1 * 0 to equal 0', () => {
        const result = myltiply(1, 0)
        expect(result).toBe(0);
    }),
    it('myltiply 1 * 1 to equal 1', () => {
        const result = myltiply(1, 1)
        expect(result).toBe(1);
    });
});

xdescribe("test multiply 2", 
() => {
    it('myltiply 1 * 0 to equal 0', () => {
        const result = myltiply(1, 0)
        expect(result).toBe(0);
    }),
    it('myltiply 1 * 1 to equal 1', () => {
        const result = myltiply(1, 1)
        expect(result).toBe(1);
    });
});

import {getPifagor} from "../index.js";

xdescribe ('test for function getPifagor',  
    () => {
	it ("right triangle", () => {
		expect(getPifagor(4,3,5)).toBe("Это прямоугольный треугольник!")})
	it ("not right triangle", () => {
		expect(getPifagor(4,3,3)).toBe("Это не прямоугольный треугольник!")})
})

import {getMaxNum} from "../index.js";

xdescribe ('test for function getMaxNum',  
() => {
	it("max a", () => {
		expect(getMaxNum(3,2,1)).toBe("max is a")})
	it("max b", () => {
		expect(getMaxNum(1,3,2)).toBe("max is b")})
	it ("max c", () => {
		expect(getMaxNum(1,2,3)).toBe("max is c")})
})

import {evenNumber} from "../index.js";

xdescribe ('test for function evenNumber',  
() => {
    const num1 = 6;
    const num2 = 123;
	it("even", () => {
		expect(evenNumber(num1)).toBe(`Число ${num1} четное!`)})
	it("not even", () => {
		expect(evenNumber(num2)).toBe(`Число ${num2} нечетное!`)})
})