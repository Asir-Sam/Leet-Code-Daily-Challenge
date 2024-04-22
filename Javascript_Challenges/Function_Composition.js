/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let fn = functions;
    return (input) => {
        return fn.reduceRight(function (acc, fn){
             return fn (acc);
            },input)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
    