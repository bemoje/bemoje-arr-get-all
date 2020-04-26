/**
 * Retrieve all elements in provided indexes array.
 * @param {Array} arr - The array
 * @param {Array<number>} indexes - An array of indexes to get
 * @returns {Array} The corresponding elements
 */
function arrGetAll(arr, indexes) {
	const last = arr.length - 1;
	return indexes.map((index) => {
		return index <= last ? arr[index] : void 0
	})
}

export default arrGetAll;
