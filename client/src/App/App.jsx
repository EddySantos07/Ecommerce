import React from "react";

import FetchProductsContainer from './Redux/Containers/FetchProductContainer/FetchProductContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        fetch products
        <FetchProductsContainer/>
      </div>
    );
  }
}

export default App;
