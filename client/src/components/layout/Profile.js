import React from "react";
import PurchaseHistory from "./ProfileComponent/PurchaseHistory";
import UserProfile from "./ProfileComponent/UserProfile";
export default function Profile() {
  return (
    <>
      <div class="container" style={{ marginTop: "5rem" }}>
        <div class="row">
          <div class="col-4">
            <UserProfile />
          </div>
          <div class="col-8">
            <PurchaseHistory />
          </div>
        </div>
      </div>
    </>
  );
}
