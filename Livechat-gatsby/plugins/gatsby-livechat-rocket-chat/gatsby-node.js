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
  console.log("Testing my plugin",configOptions );
  const nodeContentDigest = crypto
  .createHash('md5')
  .update(configOptions.key)
  .digest('hex')
  const nodeData = Object.assign({}, configOptions, {
      id: "1928",
      parent: null,
      children: [],
      internal: {
        type: `PixabayPhoto`,
        content: configOptions.key,
        contentDigest: nodeContentDigest,
      },
  })
  

  return( createNode(nodeData))

};

