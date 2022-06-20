import React from "react";

export default function PurchaseHistory() {
  return (
    <>
      <div className="card mt-3">
        <img src="https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-22153.jpg?w=2000" 
        className="card-img-top" alt="..."
        style={{height:"25rem",objectFit:'cover'}} />
        <div className="card-body">
          <h5 className="card-title">PURCHASING HISTORY</h5>
          <p className="card-text">
            Here all your purchasing Items.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-footer text-muted">
      last updated - 2 days ago
  </div>
      </div>
    </>
  );
}
