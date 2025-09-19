// var TimeLimitedCache = function() {
    
// };

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
// TimeLimitedCache.prototype.set = function(key, value, duration) {
    
// };

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
// TimeLimitedCache.prototype.get = function(key) {
    
// };

/** 
 * @return {number} count of non-expired keys
 */
// TimeLimitedCache.prototype.count = function() {
    
// };

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

// TimeLimitedCache class (JavaScript)
class TimeLimitedCache {
    constructor() {
      this.cache = new Map();
    }
  
    set(key, value, duration) {
      const exists = this.cache.has(key);
  
      if (exists) {
        const { timerId } = this.cache.get(key);
        clearTimeout(timerId);
      }
  
      const timerId = setTimeout(() => {
        this.cache.delete(key);
      }, duration);
  
      this.cache.set(key, { value, timerId });
      return exists;
    }
  
    get(key) {
      const entry = this.cache.get(key);
      return entry ? entry.value : -1;
    }
  
    count() {
      return this.cache.size;
    }
  }
  