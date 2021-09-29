import React from "react";

export default function Footer({ price }) {
  return (
    <footer>
      <div class="footer-div">
        <p>Subtotal: ${price}</p>
        <a href="/cart">
          <button>Check your Cart</button>
        </a>
      </div>
    </footer>
  );
}
