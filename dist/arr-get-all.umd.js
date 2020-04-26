(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['arr-get-all'] = factory());
}(this, (function () { 'use strict';

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

	return arrGetAll;

})));
