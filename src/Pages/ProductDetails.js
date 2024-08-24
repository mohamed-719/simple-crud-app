import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {useState} from "react";


function ProductDetails() {
  const {productID} = useParams();
  const [product , setproduct] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9000/porducts/${productID}`).then((res)=>(res).json()).then(product=>{
      console.log(product)
    setproduct(product)})
  },[])
  return (
    <>
    <h1>
    {product.title}
    </h1>
    </>
  )
}


export default ProductDetails;