function merge(array, start, mid, end) {
	const left = array.slice(start, mid + 1);
	const right = array.slice(mid + 1, end + 1);
	let i = 0, j = 0, k= start;

	while (i < left.length && j < right.length) {
		if (left[i] <= right[j])
			array[k++] = left[i++];
		else
			array[k++] = right[j++];
	}
	while (i < left.length) array[k++] = left[i++];
	while (j < right.length) array[k++] = right[j++];
}

function mergeSortRec(array, start, end) {
	if (start < end) {
		const mid = Math.floor((end + start) / 2);
		mergeSortRec(array, start, mid);
		mergeSortRec(array, mid + 1, end);
		merge(array, start, mid, end);
	}
}

export default function mergeSort(array) {
	const result = [...array];
	mergeSortRec(result, 0, result.length - 1);
	return result;
}
