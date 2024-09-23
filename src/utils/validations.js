/**
  * Validates if a string is not empty.
  * @param {string} string
  * @returns {boolean}
*/
export function isValidString (string) {
  return string && typeof string === 'string' && string.trim() !== '';
}
