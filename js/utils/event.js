/**
 * @copyright mkaidev 2024
 * @author mkai <mkaidev88@gmail.com>
 */

"use strict";

/**
 * Add event on multiple elements
 * @param {NodeList} $elements Nodelist of elements
 * @param {String} eventType Event type eg. "click"
 * @param {Function} callback Callback function
 */

export const addEventOnElements = function ($elements, eventType, callback) {
  $elements.forEach(($element) => {
    $element.addEventListener(eventType, callback);
  });
};
