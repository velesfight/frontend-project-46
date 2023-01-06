const stringiJSON = (tree, format) => {
  if (format === 'json' || format === 'yaml') {
    return JSON.stringify(tree);
  }
  return tree;
};
export default stringiJSON;
