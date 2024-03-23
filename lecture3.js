let arr = [12, 11, 25, 34, 49, 53, 77, 99, 51];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}

console.log("Second largest number in the array:", secondLargest);

let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    secondSmallest = smallest;
    smallest = arr[i];
  } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
    secondSmallest = arr[i];
  }
}

console.log("Second smallest number in the array:", secondSmallest);
