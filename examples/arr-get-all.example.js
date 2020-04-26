import arrGetAll from '../src/arr-get-all'

const arr = ['a', 'b', 'c']

arrGetAll(arr, [3])
//=> [undefined]

arrGetAll(arr, [1])
//=> ['b']

arrGetAll(arr, [1, 2, 3])
//=> ['b', 'c', undefined]
