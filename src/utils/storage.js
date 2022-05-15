/**
 * Get value from storage for given key.
 *
 * @param {String} key
 * @returns {String}
 */
export function get(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

/**
 * Set key value pair in storage.
 *
 * @param {String} key
 * @param {String} value
 */
export function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Remove key value pair from storage.
 *
 * @param {String} key
 */
export function remove(key) {
  localStorage.removeItem(key);
}

/**
 * Clear storage.
 *
 * @returns {String}
 */
export function clear() {
  return localStorage.clear();
}
