/**
 * @copyright mkaidev 2024
 * @author mkai <mkaidev88@gmail.com>
 */

"use strict";

/**
 * Imports
 */

import { addEventOnElements } from "./utils/event.js";

/**
 * Segment button
 */

export const segment = function ($segment, callback) {
  const /** {NodeList} */ $segmentBtns =
      $segment.querySelectorAll("[data-segment-btn]");
  let /** {NodeElement} */ $lastSelectedSegmentBtn = $segment.querySelector(
      "[data-segment-btn].selected"
    );

  addEventOnElements($segmentBtns, "click", function () {
    $lastSelectedSegmentBtn.classList.remove("selected");
    this.classList.add("selected");
    $lastSelectedSegmentBtn = this;
    callback(this.dataset.segmentValue);
  });
};
