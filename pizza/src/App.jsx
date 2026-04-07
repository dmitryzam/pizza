import Catalog from "./components/Catalog"
import Header from "./components/Header"
import { useState, useEffect } from "react"

function App() {
  const [productList, setProductList] = useState([]);
  useEffect(loadProducts, []);

  function loadProducts(){
    //fetch('http://10.0.20.34:3000/api/product')
    //fetch('localhost:3000')
    fetch('http://localhost:3000/api/v1/product')
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setProductList(products);
      })
  }

  return (
    <>
      <Header />
      <Catalog list={productList} />
    </>
  )
}

export default App
