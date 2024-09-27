/**
 * @copyright mkaidev 2024
 * @author mkai <mkaidev88@gmail.com>
 */

"use strict";

/**
 * Convert object to url
 * @param {Object} urlObj url object
 * @returns url string
 */
export const urlEncode = (urlObj) => {
  return Object.entries(urlObj)
    .join("&")
    .replace(/,/g, "=")
    .replace(/#/g, "%23");
};
