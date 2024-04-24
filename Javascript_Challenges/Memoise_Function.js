/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cachedValue = {};
    return function(...args) {
        if(cachedValue.hasOwnProperty(args)) return cachedValue[args];
        else{ let result = fn(...args);  cachedValue[args] = result;
        return result;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */