import React from "react";
import Tag from "./Tag";
import { useHistory, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function ViewProduct() {
  const objectProduct = localStorage.getItem("ViewProduct");
  const product = JSON.parse(objectProduct);

  const history = useHistory();
  const ViewProductObject = {
    name: product.name,
    price: product.price,
    tagsUI: product.tagsUI,
    image: product.imageLink,
  };
  const setDataToLocalStorage = () => {
    window.localStorage.setItem(
      "ViewProduct",
      JSON.stringify(ViewProductObject)
    );
    history.push(`/ViewProduct/${product.id}`);
  };
  const handleSetCartItem = () => {
    let products = [];
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    }
    let counter = 0;
    for (var i = 0; i < products.length; i++) {
      if (products[i].name === ViewProductObject.name) {
        counter += 1;
      }
    }
    if (counter === 0) {
      products.push({
        name: product.name,
        price: product.price,
        tagsUI: product.tagsUI,
        image: product.imageLink,
      });
    }
    localStorage.setItem("products", JSON.stringify(products));
    history.push(`/Cart`);
  };

  return (
    <>
      <div style={{ height: "5rem", width: "auto" }}></div>
      <div className="card mb-3" style={{ margin: "2rem" }}>    
        <div className="row g-0">
          <div className="col-md-5">
            <img
              className="img-fluid rounded-start"
              alt="NO image Found"
              src={product.image}
              style={{
                maxHeight: "70vh",
                minWidth: "40vw",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className=""> {product.name}</h3>
              <p className="card-text m-1">
                {product.tagsUI.map((item) => {
                  return <Tag value={item} />;
                })}
              </p>
              <hr />
              <div style={{ display: "flex" }}>
                <h5>PRICE : </h5>{" "}
                <h5 className="text-muted" style={{ marginLeft: "3px" }}>
                  {product.price} /-
                </h5>
              </div>
              <div style={{ display: "flex" }}>
                <h5>SHIPPING CHARGES : </h5>{" "}
                <h5 className="text-muted" style={{ marginLeft: "3px" }}>
                  {" "}
                  100 /-
                </h5>
              </div>
              <div style={{ display: "flex" }}>
                <h5>DISCOUNT : </h5>{" "}
                <h5 className="text-muted" style={{ marginLeft: "3px" }}>
                  {" "}
                  10%
                </h5>
              </div>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>

              <button type="button" class="btn btn-primary">
                BUY ITEM
              </button>
              <hr />

              <Button
                variant="outline"
                style={{ color: "#20BEAD", borderColor: "#20BEAD" }}
                onClick={handleSetCartItem}
              >
                ADD TO CART
              </Button>

              <Link to="/WishList">
                <button
                  type="button"
                  style={{ backgroundColor: "#fb0066", color: "white" }}
                  class="btn position-relative mx-2"
                >
                  <ion-icon name="heart-sharp"></ion-icon>{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
