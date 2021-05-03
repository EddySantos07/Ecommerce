import React, {createContext} from 'react';

const RelatedProductContext = React.createContext({
  relatedProducts: [],
  setRelatedProducts: () => {},
  displayModal: false,
  setDiplayModal: (bool) => {},
  sharedFeatures: {},
  setsharedFeatures: () => {}
});

export default RelatedProductContext;