import axios from "axios";

var baseURL;
if (
  process.env.REACT_APP_ENVIRONMENT &&
  process.env.REACT_APP_ENVIRONMENT === "PRODUCTION"
) {
  baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
  baseURL = "http://127.0.0.1:8000";
}

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
  //////////////////////////////
  // USERS
  /////////////////////////////

  signUp = async (user_name, email, password) => {
    const formData = new FormData();
    formData.append("user_name", user_name);
    formData.append("email", email);
    formData.append("password", password);
    const savedPost = await api
      .post("/users/signup/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };

  signIn = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const savedPost = await api
      .post("/users/signin/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };

  getUsers = async (token) => {
    const posts = await api
      .get("/users/", {
        data: {},
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return posts;
  };

  // ///////////////////////////////////////
  // Items
  // ///////////////////////////////////////

  getItems = async () => {
    let url = "/items";
    const items = await api
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return items;
  };

  // ///////////////////////////////////////
  // Carts
  // //////////////////////////////////////

  getCarts = async (token) => {
    let url = "/carts";
    const carts = await api
      .get(url, {
        data: {},
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return carts;
  };

  addCarts = async (token, quantity, item_id) => {
    let url = "/carts/add";
    const savedCart = await api
      .post(url, {
        data: {
          quantity: quantity,
          item: item_id,
        },
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedCart;
  };

  deleteCarts = async (id, token) => {
    const response = await api
      .delete("/carts/delete/" + id + "/", {
        data: {},
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };

  updateCarts = async (id, token) => {
    const response = await api
      .put("/carts/update/" + id + "/", {
        data: {},
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };

  ///////////////////////////////////////////
  // Reference Post
  //////////////////////////////////////////

  getPosts = async () => {
    const posts = await api
      .get("/posts/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return posts;
  };

  addPost = async (name, body, image) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("body", body);
    formData.append("image", image);
    const savedPost = await api
      .post("/posts/add/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };

  deletePost = async (id) => {
    const response = await api
      .delete("/posts/delete/" + id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };
}
