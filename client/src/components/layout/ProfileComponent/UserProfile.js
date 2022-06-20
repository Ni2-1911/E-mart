import React from "react";
import { Link } from "react-router-dom";
export default function UserProfile() {
  return (
    <>
      <div className="card text-center mt-3">
        <div className="card-body">
          <h5 className="">USER DETAILS</h5>
          <input
            className="form-control"
            type="text"
            placeholder="Disabled input"
            aria-label="Disabled input example"
            disabled
          />
          <a href="#" className="btn btn-primary my-2">
            Edit Details
          </a>
        </div>
        <hr />

        <div className="card-body">
          <h5 className="">PURCHASING DETAILS</h5>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/865/small_2x/isolated-of-shopping-cart-icon-free-vector.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <Link to="/Cart">
                    <button
                      type="button"
                      style={{
                        backgroundColor: "#20BEAD",
                        color: "white",
                        marginRight: "1rem",
                      }}
                      class="btn position-relative mt-4"
                    >
                      CART
                    </button>
                  </Link>

                  <Link to="/WishList">
                    <button
                      type="button"
                      style={{ backgroundColor: "#fb0066", color: "white" }}
                      class="btn position-relative mx-2 mt-4"
                    >
                      <ion-icon name="heart-sharp"></ion-icon>{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">last updated - 2 days ago</div>
      </div>
    </>
  );
}
