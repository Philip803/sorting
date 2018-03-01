describe('Merge Sort', function() {

    // beforeAll(function () {
    //     spyOn(swap()); // replace existing `tootsiepop['lick']` method
    //   });
    //   it('This is how many swaps it took', function () {
    //     bubbleSort();
    //     expect(swap.calls.count()).toEqual(3);
    //   });



    it('handles an empty array', function() {
        expect ( mergeSort([]) ).toEqual( [] );
    });

    it('handles an array with one element', function() {
        expect (mergeSort([1])).toEqual([1]);
    });

    it('handles arrays with multiple elements', function() {
        expect(mergeSort([4, 5, 3, 2, 7, 1, 9])).toEqual([1, 2, 3, 4, 5, 7, 9]);
    });
    it('handles arrays with multiple elements', function() {
        expect(mergeSort([4, 5, 3, 2, 7, 1, 9, 12, 13, 1])).toEqual([1, 1, 2, 3, 4, 5, 7, 9, 12, 13]);
    });
});

describe('split function', function() {
    it('splits an array', function() {
        expect (split([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([[1, 2, 3, 4], [5, 6, 7, 8]]);
    }) ;
});

describe('merge function', function() {
    it('merge an array', function() {  
        expect (merge([1, 2, 3, 5], [4, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    }) ;
    it('merge an array', function() {  
        expect (merge([1, 3, 6, 9], [4, 8, 10])).toEqual([1, 3, 4, 6, 8, 9, 10]);
    }) ;
    it('merge an array', function() {  
        expect (merge([1, 2, 3, 5], [1, 6, 7, 8])).toEqual([1, 1, 2, 3, 5, 6, 7, 8]);
    }) ;
});