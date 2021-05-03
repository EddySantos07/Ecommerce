import React from "react";

import FetchProducts from "./Components/FetchProducts/FetchProducts";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {

    return (
      <div>
        fetch products
        <FetchProducts />
      </div>
    );
  }
}

export default App;
