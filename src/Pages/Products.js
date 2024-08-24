import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product.css";
import MySwal from "sweetalert2";

function Products() {
  //when call data by using useEffect bcause it resposble to event sideEffect
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  //hear make method to get all product when delete one product
  const getAllProducts = () => {
    fetch("http://localhost:9000/porducts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproducts(data);
      });
  };

  //hear use the variablis to delete data in local database
  const deleteProduct = (product) => {
    MySwal.fire({
      title: ` Are You Sure To Delete ? \n ${product.title}`,
      showCancelButton: true,
      //when click OK deleted the fethch
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/porducts/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            getAllProducts();
          });
      }
    });
  };

  return (
    <>
      <h1> Products page</h1>
      <Link type="button" class="btn btn-success mt-3" to={"/products/add"}>
        Add New Product
      </Link>
      <table className="table table-striped mt-5 product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            {/* <th>Description</th> */}
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                {/* <td>{product.description.slice(0, 20)}...</td> */}
                <td>{product.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      deleteProduct(product);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    type="button"
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                  <button type="button" className="btn btn-primary btn-sm">
                    Eidt
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Outlet/>
    </>
  );
}

export default Products;
