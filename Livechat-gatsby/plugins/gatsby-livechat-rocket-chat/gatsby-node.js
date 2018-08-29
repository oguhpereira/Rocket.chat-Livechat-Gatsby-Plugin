const crypto = require("crypto");
const fetch = require("node-fetch");
const queryString = require("query-string");

exports.sourceNodes = (
  { boundActionCreators, createNodeId },
  configOptions
) => {
  const { createNode } = boundActionCreators;

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;

  // plugin code goes here...
  console.log("Testing my plugin", configOptions);

  const RocketLiveChat = () => {
    
        alert(oi)
    
  }

};

