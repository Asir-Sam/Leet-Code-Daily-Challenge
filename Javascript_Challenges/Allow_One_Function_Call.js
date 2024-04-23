/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let call = 0;
    return function(...args){
        if(call > 0) return undefined
        else
        call++; return fn(...args);
    }
};

// Creating a closure function, so that on each invocation we can still have the access to the outer value\
// Each invocation the Value incremented 

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
