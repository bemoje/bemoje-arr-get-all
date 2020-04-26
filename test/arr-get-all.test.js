import arrGetAll from '../src/arr-get-all'

describe('arrGetAll', () => {
	test('works', () => {
		const arr = ['a', 'b', 'c']
		expect(arrGetAll(arr, [3])).toStrictEqual([undefined])
		expect(arrGetAll(arr, [1])).toStrictEqual(['b'])
		expect(arrGetAll(arr, [1, 2, 3])).toStrictEqual(['b', 'c', undefined])
	})
})
