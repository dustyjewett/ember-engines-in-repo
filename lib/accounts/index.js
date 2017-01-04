/*jshint node:true*/

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'accounts',
  lazyLoading: false,
  isDevelopingAddon: function() {
    return true;
  }
});
