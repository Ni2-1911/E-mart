import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tag from "./Tag";
import { useHistory, Link } from "react-router-dom";
export default function ItemCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const ViewProductObject = {
    name: props.name,
    price: props.price,
    tagsUI: props.tagsUI,
    image: props.imageLink,
  };
  const setDataToLocalStorage = () => {
    window.localStorage.setItem(
      "ViewProduct",
      JSON.stringify(ViewProductObject)
    );
    history.push(`/ViewProduct/${props.id}`);
  };
  const handleSetCartItem = () => {
    // console.log(props.tagsUI);
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
        name: props.name,
        price: props.price,
        tagsUI: props.tagsUI,
        image: props.imageLink,
        tags: [],
      });
    }
    localStorage.setItem("products", JSON.stringify(products));
    history.push(`/Cart/?cartsize=${products.length}`);
    props.BadgeData(products.length);
  };

  const [heartStyle, setHeartStyle] = React.useState("heart-outline");
  function HandleWishlist() {
    if (heartStyle === "heart-sharp") {
      setHeartStyle("heart-outline");
    } else {
      setHeartStyle("heart-sharp");
    }
  }
  return (
    <Card className="m-3" style={{ minWidth: "15rem" }}>
      <Card.Img
        variant="top"
        src={props.imageLink}
        alt="Image not available"
        style={{ height: "15rem", width: "100%", objectFit: "cover" }}
      />
      <Card.Body>
        <div style={{ display: "flex" }}>
          <Card.Title>{props.name}</Card.Title>

          <ion-icon
            name={heartStyle}
            style={{ marginLeft: "9rem", color: "#fb0066", fontSize: "35px" }}
            // onClick={HandleWishlist}
          ></ion-icon>
        </div>
        <Card.Text style={{ minHeight: "5rem" }}>
          {props.tagsUI.map((item) => {
            return <Tag value={item} />;
          })}
        </Card.Text>

        <div style={{ display: "flex" }}>
          <button
            type="button"
            class="btn btn-light my-1"
            style={{ display: "flex" }}
          >
            <ion-icon name="pricetag-outline" size="medium"></ion-icon>
            {props.price}/-
          </button>

          {/* <Link to="/WishList">
            <button
              type="button"
              style={{ backgroundColor: "#fb0066", color: "white" }}
              class="btn position-relative m-1"
            >
              <ion-icon name="heart-sharp"></ion-icon>{" "}
            </button>
          </Link> */}
        </div>
        <div>
          <Button
            variant="outline"
            style={{ color: "#20BEAD", borderColor: "#20BEAD" }}
            onClick={handleSetCartItem}
          >
            ADD TO CART
          </Button>
          <Button
            variant="success mx-2"
            style={{ backgroundColor: "" }}
            onClick={setDataToLocalStorage}
          >
            <ion-icon name="arrow-forward-sharp"></ion-icon>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
