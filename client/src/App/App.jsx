import React from "react";

import FetchProductsContainer from "./Redux/Containers/FetchProductContainer/FetchProductContainer";

import Header from "./Components/Header/Header";
import ProductOverviewContainer from "./Redux/Containers/MainComponents/ProductOverviewContainer/ProductOverviewContainer";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <FetchProductsContainer />
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
