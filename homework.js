const arrOfNums = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];
const arrOfNums2 = [-1,-8,-2]
const arrOfNums3 = [1,7,3]
const arrOfNums4 = [1,undefined,3,5,-3]
const arrOfNums5 = [1,NaN,3,5,-3]


function findValues(arr) {
	let max = 0;
	let sum = 0;
	let min = 0;

	for (let i = 0; i < arr.length; i++) {
		const number = arr[i];
 	 	console.log('i - ', i);
 		console.log('number by index - ', arr[i]);
 	if (arr[i] === "NaN" || arr[i] === null || arr[i] === undefined) {
	continue;
	}
	if (arr[i] > max) {
 		max = arr[i]
   	}
   	if (min > arr[i]) {
 	    min = arr[i]
 	}
 	sum = sum + arr[i]
 }

return {
	min: min,
	max: max,
	sum: sum,
	}
}

console.log(findValues(arrOfNums));
console.log(findValues(arrOfNums2));
console.log(findValues(arrOfNums3));
console.log(findValues(arrOfNums4));
console.log(findValues(arrOfNums5));


//Created same functionality with do-while loop

// let i = 0;

// do {

// 	if (arrOfNums[i] > max) {
// 		max = arrOfNums[i]
// 	}
// 	if (min > arrOfNums[i]) {
// 		min = arrOfNums[i]
// 	} 
// 	sum = sum + arrOfNums[i]
// 	i+= 1;		
// } while (i < arrOfNums.length)