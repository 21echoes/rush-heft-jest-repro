import { helloWorld } from '../index';

describe('helloWorld', () => {
	describe('When given a name', () => {
		it('returns a greeting for that name', () => {
			const result = helloWorld('Dolly');
			expect(result).toEqual('Hello, Dolly!');
		});
	});

	describe('When not given a name', () => {
		it('returns a greeting for everyone', () => {
			const result = helloWorld();
			expect(result).toEqual('Hello, World!');
		});
	});
});
