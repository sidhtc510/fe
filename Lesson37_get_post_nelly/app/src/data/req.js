export const getUsers = (callback, loading) => {
  fetch("https://api.escuelajs.co/api/v1/users")
    .then((res) => res.json())
    .then((json) => callback(json))
    .catch(err=>console.log(err))
    .finally(()=>loading(false))
};

export const addUser = (new_user, callback) => {
  fetch("https://api.escuelajs.co/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(new_user),
  })
    .then((res) => res.json())
    .then((json) => callback(json));
};
