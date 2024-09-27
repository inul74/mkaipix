/**
 * @copyright mkaidev 2024
 * @author mkai <mkaidev88@gmail.com>
 */

"use strict";

/**
 * Imports
 */

import { urlEncode } from "./urlEncode.js";

/**
 * Update url
 * @param {Object} filterObj filter object
 * @param {String} searchType search type eg. 'videos' or 'photos'
 */

export const updateUrl = (filterObj, searchType) => {
  setTimeout(() => {
    const /** {String} */ root = window.location.origin;
    const /** {String} */ searchQuery = urlEncode(filterObj);

    window.location = `${root}/pages/${searchType}/${searchType}.html?${searchQuery}`;
  }, 500);
};
