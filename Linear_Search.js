/* Linear search */
/* Complexity T O(n) S O(1)*/ 
let arr = [8, 5, 9, 11, 2, 45,36, 89];
let target = 51;

function linearSearch(arr, target){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return 'target found at index ' + i;
        }
    }
    return 'target not found';
}

//console.log(linearSearch(arr, target));


