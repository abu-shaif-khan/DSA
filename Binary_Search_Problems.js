/* Flooring and Celling problem using Binary Search */
let arr2 = [1, 5, 7,9, 11, 13, 15, 25, 50 ,79];

function binarySearch(arr2, target){
    let start = 0;
    let end = arr2.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr2[mid] === target){
            return 'target found at index ' + mid + ' Floor: ' + arr2[mid - 1] + ' Celling: ' + arr2[mid + 1];
        }

        else if(arr2[mid] > target){
            end = mid - 1;
        }

        else{
            start = mid + 1;
        }
    }

    return 'target not found';
}

console.log(binarySearch(arr2, 13));
