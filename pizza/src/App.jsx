import Catalog from "./components/Catalog"
import Header from "./components/Header"
import { useState, useEffect } from "react"
import Modal from "./components/Modal";

function App() {
  const [productList, setProductList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(loadProducts, []);

  function loadProducts(){
    //fetch('http://10.0.20.34:3000/api/product') // код в классе
    
    fetch('http://localhost:3000/api/v1/product')   // код для локалхоста
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setProductList(products);
      })
  }

  function openModal(id){
    const findProduct = productList.find((product) => product.id == id)
    if(findProduct != null){
      setProduct(findProduct);
    }

    setIsModalOpen(true);
  }

  function closeModal(){
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <Catalog openModal={openModal} list={productList} />
      {(isModalOpen) ? <Modal product={product} closeModal={closeModal} /> : <></>}
      
    </>
  )
}

export default App
