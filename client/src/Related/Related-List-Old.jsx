import React, {useContext} from 'react';
import RelatedListCard from './Related-List-Card.jsx';
import ProductContext from '../context.jsx';

var RelatedList = () => {
  const context = useContext(ProductContext);

  return (
    <div className='related-list'>
    {context.relatedProducts.map((product, ind) => {
      return (
        <RelatedListCard product={product} 
        photo={''} key={product.id}  
        photo={product.styles.photo} 
        price={product.styles.price}/>
      )
    })}
    </div>
  )

}

export default RelatedList;