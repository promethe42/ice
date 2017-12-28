var ice = require('./ice');

require('./bookmark.js');
require('./dom.js');
require('./icePlugin.js');
require('./icePluginManager.js');
require('./polyfills.js');
require('./selection.js');
require('./plugins/IceAddTitlePlugin/IceAddTitlePlugin.js');
require('./plugins/IceCopyPastePlugin/IceCopyPastePlugin.js');
require('./plugins/IceEmdashPlugin/IceEmdashPlugin.js');
require('./plugins/IceSmartQuotesPlugin/IceSmartQuotesPlugin.js');

module.exports = ice;
