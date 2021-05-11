import React from "react";

import FetchProductsContainer from "./Redux/Containers/FetchProductContainer/FetchProductContainer";
import FetchProductsStylesContainer from './Redux/Containers/'


import Header from "./Components/Header/Header";
import ProductOverviewContainer from "./Redux/Containers/MainComponents/ProductOverviewContainer/ProductOverviewContainer";

import styles from './Styles/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <FetchProductsContainer />
        <FetchProductsStylesContainer />
        <div className="App">
          <Header />
          <ProductOverviewContainer />
          {/* related */}
          {/* QA */}
          {/* Reviews */}
          {/* footer */}
        </div>
      </>
    );
  }
}

export default App;
