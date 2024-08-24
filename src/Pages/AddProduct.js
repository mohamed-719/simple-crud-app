import {useState} from "react";
import { json, useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  let navigate = useNavigate();
  
  
  // hear make function prevent Defalt to stop the relond - take the event 
  const formSubmit = (e) => {
      e.preventDefault();
      //when send data or any this  to server can used {body}
      const urlRes = "http://localhost:9000/porducts";
      fetch(urlRes, {
        method: "POST",
        //the header like option transction(Actvion) with the reqset like json
        headers: {
          "Content-Type" : "Aplication/json"
        },
        body: JSON.stringify({
          title,
          price
        })
      })
      .then((res) =>res.json())
      .then((data) => {console.log(data)
      navigate('/products');
      })
  }

  return(
    <>
    <h1>Add Product hear</h1>
    <form onSubmit={formSubmit}>
  <div className="mb-3">
    <label htmlFor="productTitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="productTitle" aria-describedby="Product title" placeholder="Product title"
    onChange={(e) => setTitle(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="productPrice" className="form-label">Price</label>
    <input type="number" className="form-control" id="productPrice" aria-describedby="Product Price" placeholder="Product price"
    onChange={(e) =>  setPrice(+e.target.value) }  />
  </div>
  <button type="submit" className="btn btn-primary">Add Product</button>
</form>
    </>
  )
}

export default AddProduct;