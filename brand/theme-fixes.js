(function () {
  'use strict';

  function moveFeaturedVideo() {
    var video = document.getElementById('featured-video');
    if (!video) return;

    var sections = Array.prototype.slice.call(document.querySelectorAll('section.section'));
    var learning = sections.find(function (section) {
      return /what\s+you\s+will\s+learn/i.test(section.textContent || '');
    });
    if (learning && video.parentNode && video !== learning.nextElementSibling) {
      learning.parentNode.insertBefore(video, learning.nextElementSibling);
    }
  }

  function init() {
    moveFeaturedVideo();
    window.setTimeout(moveFeaturedVideo, 250);
    window.setTimeout(moveFeaturedVideo, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
