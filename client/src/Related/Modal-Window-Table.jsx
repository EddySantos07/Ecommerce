import React, {useContext} from 'react';
import ProductContext from '../context.jsx';

var ModalWindowTable = ({product, sharedFeatures}) => {
  const context = useContext(ProductContext);

  //recieves the sharedFeatures object from it's parent 
  //and renders each feature as table rows for the modal window
  var displayComparedFeatures = (feature) => {
      return (
        <tr>
          <th className='modal-table-feature-value'>{sharedFeatures[feature].currentProductValue}</th>
          <th className='modal-table-feature-name'>{feature}</th>
          <th className='modal-table-feature-value'>{sharedFeatures[feature].comparedProductValue}</th>
        </tr>
      )
  }

  return (
    <table className='related-modal-table'>
    <tbody>
      <tr>
        <th className='related-modal-table-title'>{context.currentProductDetails.name}</th>
        <th className='related-modal-table-title'></th>
        <th className='related-modal-table-title'>{product.name}</th>
      </tr>
      {Object.keys(sharedFeatures).map((feature) => {
        return (
          displayComparedFeatures(feature)
        )
      })}
    </tbody>
  </table>
  )

}

export default ModalWindowTable;
