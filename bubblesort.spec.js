describe('Bubble Sort', function() {

    // beforeAll(function () {
    //     spyOn(swap()); // replace existing `tootsiepop['lick']` method
    //   });
    //   it('This is how many swaps it took', function () {
    //     bubbleSort();
    //     expect(swap.calls.count()).toEqual(3);
    //   });


    it('handles an empty array', function() {
        expect ( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with one element', function() {
        expect (bubbleSort([1])).toEqual([1]);
    });

    it('handles arrays with multiple elements', function() {
        expect(bubbleSort([4, 5, 3, 2, 7, 1, 9])).toEqual([1, 2, 3, 4, 5, 7, 9]);
    });
});



