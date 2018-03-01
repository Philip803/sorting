function bubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 1; j < array.length; j++) {
            array = swap(array, j - 1, j);
        }
    }
    return array;
}

function swap(array, num1, num2) {
    if (array[num1] > array[num2]) {
        var temp = array[num1];
        array[num1] = array[num2];
        array[num2] = temp;
    }
    return array;
}