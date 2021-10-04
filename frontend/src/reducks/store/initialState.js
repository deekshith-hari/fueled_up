const initialState = {
  posts: {
    list: [],
  },
  user: {
    user_name: "",
    email: "",
    token: "",
    token_expires_at: "",
  },
  items: {
    list: [],
  },
  carts: {
    list: [],
    subtotal: 0,
  },
  orders: {
    total_price: "",
    full_name: "",
    phone: "",
    address: "",
    pin: "",
    apt: "",
    city: "",
    state: "",
    subtotal: 0,
  },
};

export default initialState;
