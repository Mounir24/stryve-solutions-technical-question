const numbers = [3, 9, 12, 8, 10, 9, 9, 11, 12];

(() => {
    const res = []; // ARRAY AS RESULT OF COMBINATION OF NUMBERS
    const target = 42; // TARGET GOAL AS NUMBER
    let sum = 0; // SUM OF NUMBERS


    while (sum < target) {
        // LOOP OVER THE ARGS NUMBERS ARRAY
        numbers.forEach(num => {

            if (sum != target) {
                sum += num; //  SUM THE GIVEN NUMBER
                // ADD THE NUMBER TO OUR ARRAY 
                res.push(num);
            }
        });

        if (sum > 40 && sum <= 42) break; // BREAK THE LOOP IF WE REACH OUR GOAL
    }

    // 
    if (sum === target) console.log(res);
})();


/*(() => {
    const array = [];
    const target = 42;
    let result = 0;
    numbers.reduce((sum, acc) => {
        const response = sum + acc;
        result += response;
        console.log(response);

        if (sum !== target) {
            array.push(acc);
        } else {
            return array;
        }
    }, 0);
})();*/
