export const getUsers = (callback) => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => callback(json.users));
  };
  

  export const getSingleUsers = (callback, id) => {

    fetch("https://dummyjson.com/users/"+id)
      .then((res) => res.json())
      .then((json) => callback(json));
  };


  export const getCategories = (callback) => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((json) => callback(json));
  };