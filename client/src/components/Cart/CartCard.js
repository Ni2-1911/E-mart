import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tag from "../Items/Tag";
import { useHistory } from "react-router-dom";
import ViewProduct from "../Items/ViewProduct";
export default function CartCard(props) {
  const history = useHistory();
  const ViewProductObject = {
    name: props.name,
    price: props.price,
    tagsUI : props.tagsUI,
    tags: props.tags,
    image: props.imageLink,
  };
  const setDataToLocalStorage = () => {
    window.localStorage.setItem(
      "ViewProduct",
      JSON.stringify(ViewProductObject)
    );
    history.push(`/ViewProduct/${props.id}`);
  };
  const RemoveFromCarT = () => {
    console.log(ViewProductObject);
    props.RemoveFromcartObject(ViewProductObject);
  };
  return (
    <Card style={{}} className="my-3">
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
            name="heart-sharp"
            style={{ marginLeft: "9rem", color: "#fb0066", fontSize: "30px" }}
          ></ion-icon>
        </div>
        <Card.Text>
          {props.tagsUI.map((item) => {
            return <Tag value={item} />;
          })}
        </Card.Text>
        
        <div>
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={RemoveFromCarT}
          >
            REMOVE FROM CART
          </button>
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
