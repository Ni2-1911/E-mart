import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function CartSummary(props) {
  const { loggedIn } = useContext(AuthContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // remove Local storage problems
  React.useEffect(()=>{
    const data = window.localStorage.getItem('products');
    console.log(data);
  })
  return (
    <>
      {props.CartSize === 0 ? (
        <>
          <div
            className="card"
            style={{
              backgroundColor: "#D3D3D3",
              margin: "3rem",
              height: "60vh",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "6rem",
            }}
          >
            <h1>No item added in Cart</h1>
            <Link to="/Item" style={{ textDecoration: "none" }}>
              <button
                type="button"
                style={{
                  backgroundColor: "#20BEAD",
                  color: "white",
                  marginRight: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="btn position-relative"
              >
                <ion-icon
                  name="add-circle-outline"
                  style={{ color: "white" }}
                  size="large"
                ></ion-icon>{" "}
                GO TO PRODUCT
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div
            className="card"
            style={{
              border: "1px solid gray",
              marginTop: "5rem",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            <div className="card-header">PRODUCT SUMMARY</div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card-body">
                  <div class="grid">
  <h5 >TOTAL ITEMS</h5>
  <h5>TOTAL PRICE</h5>

</div>
                  </div>

                  <div style={{ display: "flex",alignItems: "center" }}>
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={handleShow}
                      >
                        BUY NOW
                      </button>
                    </Link>
                    {loggedIn === false && (
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>ALERT</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          you must be logged in to purchse Item 
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    )}

                    <Link to="/Item" style={{ textDecoration: "none" }}>
                      <button
                        type="button"
                        style={{
                          backgroundColor: "#20BEAD",
                          color: "white",
                          marginRight: "1rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className="btn position-relative m-3"
                      >
                        <ion-icon
                          name="add-circle-outline"
                          style={{ color: "white" }}
                          size="large"
                        ></ion-icon>{" "}
                        ADD PRODUCT
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col m-3">
                  <h5>ADD ADDRESS</h5>
                  <form className="row g-3">
                    <div className="col-12">
                      <label for="inputAddress" className="form-label">
                        Address Line 1*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label for="inputAddress2" className="form-label">
                        Address Line 2*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="inputCity" className="form-label">
                        City*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                    <div className="col-md-4">
                      <label for="inputState" className="form-label">
                        State*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputState"
                      />
                    </div>
                    <div className="col-md-2">
                      <label for="inputZip" className="form-label">
                        Zip*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

{
  /*  */
}
