// const arr = [600, 435, 2, 45, 2, 89, 4, 1, 48, 334, 2, 0];
// const arr = [4, 7, 2, 5, 9, 4, 3];
const arr = [3, 2];

function posh(arr, left, right) {
	// console.log(Math.ceil((left + right) / 2);
	const pivot = arr[(left + right) / 2];
	while (left <= right) {
		while (arr[left] < pivot) {
			left++;
		}
		while (arr[right] > pivot) {
			right--;
		}

		if (left <= right) {
			const tmp = arr[left];
			arr[left] = arr[right];
			arr[right] = tmp;

			left++;
			right--;
		}
	}

	return left;
}

function qsh(arr, start, end) {
	if (start >= end) return;

	const rightStart = posh(arr, start, end);

	qsh(arr, start, rightStart - 1);
	qsh(arr, rightStart, end);
}

qsh(arr, 0, arr.length - 1);
console.log(arr);
