import app from './app.js';
import jPlayerManager from './jplayer.js';

// Initialize modules
function init () {
  app.init();
  jPlayerManager.init();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
