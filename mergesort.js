// function mergeSort(array) {
//     if (array.length <= 1) {
//         return array;
//     }
//     var middleIndex = Math.floor((array.length - 1) / 2);
//     //mergeSort(array.slice(0, middleIndex)).concat(mergeSort(array.slice(middleIndex, array.length)));
//     return compare(mergeSort(array.slice(0, middleIndex))), mergeSort(array.slice(middleIndex, array.length));

// }

// function compare(array1, array2) {
//     var newArray =[];
//     for (var i = 0; i < array2.length; i++) {
//         if (array1[i] > array2[i]) {
//             newArray.push(array2[i]);
//             newArray.push(array1[i]);
//         } else {
//             newArray.push(array1[i]); 
//             newArray.push(array2[i]);
//         }
//     }
//     return newArray;
// }

function split(wholeArray) {
    if (wholeArray.length === 1) {
        return wholeArray;
    }
    var middle = Math.floor((wholeArray.length) / 2);
    var firstHalf = wholeArray.slice(0, middle);
    var secondHalf = wholeArray.slice(middle);
    return [firstHalf, secondHalf];
}

function merge(array1, array2) {
    var newArray = [];
    while (array1.length && array2.length) {
        if (array1[0] > array2[0]) {
            newArray.push(array2[0]);
            array2 = array2.slice(1);
        } else {
            newArray.push(array1[0]);
            array1 = array1.slice(1);
        }
    }
    if (array1.length) {
        return newArray.concat(array1);
    } else {
        return newArray.concat(array2);
    }
    // while (array1.length) {
    //         newArray.push(array1[0]);
    //         array1 = array1.slice(1);
    // }
    // while (array2.length) {
    //         newArray.push(array2[0]);
    //         array2 = array2.slice(1);
    // }
    // return newArray;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var doubleArray = split(array);
    return (merge(mergeSort(doubleArray[0]), mergeSort(doubleArray[1])));
}