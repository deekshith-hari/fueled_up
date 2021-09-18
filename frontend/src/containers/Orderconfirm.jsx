import React from "react";

export default function Orderconfirm() {
  return (
    <>
      <section class="bg-checkout-final">
        <p>- Thank you for your ordering -</p>
      </section>

      <section class="order-confirmation">
        <p>
          Thank you for your ordering. We received your request. Our staff will
          be contacting with you to tell next steps
        </p>

        <a href="/Home">
          <button>Back to Home</button>
        </a>
      </section>
    </>
  );
}
