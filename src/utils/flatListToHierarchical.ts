interface HierarchicalItem {
  [key: string]: any;
}

interface HierarchicalOptions {
  idKey?: string;
  parentKey?: string;
  childrenKey?: string;
}

export const flatListToHierarchical = (
  data: HierarchicalItem[] = [],
  {
    idKey = 'key',
    parentKey = 'parentId',
    childrenKey = 'children',
  }: HierarchicalOptions = {}
): HierarchicalItem[] => {
  const tree: HierarchicalItem[] = [];
  const childrenOf: { [id: string]: HierarchicalItem[] } = {};

  data.forEach((item) => {
    const newItem = { ...item };
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;

    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];

    if (parentId) {
      childrenOf[parentId] = childrenOf[parentId] || [];
      childrenOf[parentId].push(newItem);
    } else {
      tree.push(newItem);
    }
  });

  return tree;
};
