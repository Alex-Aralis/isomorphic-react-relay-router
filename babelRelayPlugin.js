var getBabelRelayPlugin = require('babel-relay-plugin');
var schema = require('./build/data/schema.json');

module.exports = getBabelRelayPlugin(schema.data);
