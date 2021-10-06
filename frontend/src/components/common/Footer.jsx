import React, { useEffect, useState } from "react";

export default function Footer({ price }) {
  let pageUrl = window.location.toString();
  const [showCheckoutButton, setShowCheckoutButton] = useState(true);

  useEffect(() => {
    if (pageUrl.includes("cart")) {
      setShowCheckoutButton(false);
    }
  }, []);

  return (
    <footer>
      <div class="footer-div">
        <p>Subtotal: ${price}</p>
        {showCheckoutButton ? (
          <a href="/cart">
            <button>Check your Cart</button>
          </a>
        ) : (
          <a href="/checkout">
            <button>Checkout</button>
          </a>
        )}
      </div>
    </footer>
  );
}
