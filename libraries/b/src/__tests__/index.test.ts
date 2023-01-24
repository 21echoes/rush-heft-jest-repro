import { helloHelloWorld } from '../index';

describe('helloHelloWorld', () => {
	describe('When given a name', () => {
		it('returns a double greeting for that name', () => {
			const result = helloHelloWorld('Dolly');
			expect(result).toEqual('Hello Hello, Dolly!');
		});
	});

	describe('When not given a name', () => {
		it('returns a double greeting for everyone', () => {
			const result = helloHelloWorld();
			expect(result).toEqual('Hello Hello, World!');
		});
	});
});
