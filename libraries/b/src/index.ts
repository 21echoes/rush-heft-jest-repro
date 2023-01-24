import { helloWorld } from '@my-repo/a';

export const helloHelloWorld = (name = 'World'): string => {
	return `Hello ${helloWorld(name)}!`;
};
