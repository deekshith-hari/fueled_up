import React from "react";

export default function Checkout() {
  return (
    <>
      <section class="bg-checkout-data">
        <div class="product-details">
          <p class="shipment-details">Shipment Details</p>
          <p class="confirm">Please check your items and confirm it</p>
          <table>
            <tr>
              <td class="td-item">Yellow Sea Moss</td>
              <td class="td-quantity">1</td>
              <td class="td-price">$380.99</td>
            </tr>
            <tr>
              <td class="td-item">Burdock root</td>
              <td class="td-quantity">2</td>
              <td class="td-price">$120.99</td>
            </tr>
            <tr>
              <td class="td-item">Yellow Sea Moss</td>
              <td class="td-quantity">1</td>
              <td class="td-price">$380.99</td>
            </tr>

            <tr class="total">
              <td class="td-item">Total</td>
              <td class="td-quantity">3</td>
              <td class="td-price">$649.97</td>
            </tr>
          </table>
        </div>
        <div class="address-details">
          <form action="/">
            <label for="name">Full name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Recipients name"
            />

            <label for="name">Phone Number</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Phone Number"
            />

            <label for="name">Street address or P.O. Box</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Street address or P.O. Box"
            />

            <label for="name">PIN Code</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter PIN Code"
            />

            <label for="name">Apt, suit, unit, building, floor, etc</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Apt, suit, unit, building, floor, etc"
            />

            <label for="name">City</label>
            <input type="text" name="name" id="name" placeholder="Enter City" />

            <label for="name">State</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter State"
            />

            <input
              type="submit"
              name="submit"
              value="SUBMIT"
              class="checkout-btn"
            />
          </form>
        </div>
      </section>
    </>
  );
}
