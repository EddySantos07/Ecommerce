import React from "react";

import FetchProductsContainer from "./Redux/Containers/FetchProductContainer/FetchProductContainer";
import FetchProductsStylesContainer from "./Redux/Containers/FetchProductsStylesContainer/FetchProductsStylesContainer";

import Header from "./Components/Header/Header";
import ProductOverviewContainer from "./Redux/Containers/MainComponents/ProductOverviewContainer/ProductOverviewContainer";

import styles from "./Styles/styles.css";

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
          <div className="RelatedContainer">RelatedContainer</div>
          {/* QA */}
          <div className="QAContainer">QAContainer</div>
          {/* Reviews */}
          <div className="ReviewsContainer">ReviewsContainer</div>
          {/* footer */}
          <div className="FooterContainer">FooterContainer</div>
        </div>
      </>
    );
  }
}

export default App;
