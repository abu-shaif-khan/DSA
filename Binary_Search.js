/* Binarry Search */

let arr2 = [1, 5, 7,9, 11, 13, 15, 25, 50 ,79];

function binarySearch(arr2, target){
    let start = 0;
    let end = arr2.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr2[mid] === target){
            return 'target found at index ' + mid;
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

// console.log(binarySearch(arr2, target));



/* Binary Search but finding out asscending or decending array */

/* let arr3 = [1, 5, 7,9, 11, 13, 15, 25, 50 ,79];
 */

let arr3 = [79, 50, 25, 15, 13, 11, 9, 7, 5, 1];
function binarySearchAssenDecending(arr2, target){
    let start = 0;
    let end = arr3.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr3[mid] === target){
            return 'target found at index ' + mid;
        }
        
        else{
            /* check array assending. if start value < end value*/
            if(arr3[start] < arr3[end]){ 
                if(arr3[mid] > target){
                    end = mid - 1;
                }
        
                else{
                    start = mid + 1;
                }
            }

            /* check array decending. if start value > end value */
            else{
                if(arr3[mid] > target){
                    start = mid + 1;
                }
        
                else{
                    end = mid - 1;
                }
            }
        }
    }

    return 'target not found';
}

console.log(binarySearchAssenDecending(arr3, 15));