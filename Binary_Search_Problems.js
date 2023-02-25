/* Flooring and Ceiling problem using Binary Search */
let arr2 = [1, 5, 7, 9, 11, 13, 15, 25, 50 ,79];

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

// console.log(binarySearch(arr2, 13));


/* Counting target value in times */

let arr3 = [1, 5, 7, 9, 11, 13, 13, 13, 13, 15, 25, 50 ,79];

function binarySearchCounting(arr3, target){
    let start = 0;
    let count = 0;
    let end = arr3.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr3[mid] === target){
            let i = mid;
            for(i; i < arr3.length && arr3[i] === target; i++){
                count++;
                if(arr3[i] != target){
                    break;
                }
            }
            i = mid;
            for(i = i - 1; i >= 0 && arr3[i] === target; i--){
                count++;
                if(arr3[i] != target){
                    break;
                }
            }
            return 'target found at index ' + mid + 'count ' + count;
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

console.log(binarySearchCounting(arr3, 13));