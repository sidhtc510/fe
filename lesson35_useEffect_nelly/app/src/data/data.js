export const getProducts = (callback) => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => callback(json.products));
};


export const getUsers = (callback) => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => callback(json.users));
  };
  