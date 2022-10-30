const helloWorld = require('./index');

test('Функция должна вернуть строку', () => {
	const type = typeof helloWorld();

	expect(type).toBe('string');
});

test('Строка должна точно совпадать с "Hello, World"', () => {
	const res = helloWorld();

	expect(res).toBe('Hello, World');
});