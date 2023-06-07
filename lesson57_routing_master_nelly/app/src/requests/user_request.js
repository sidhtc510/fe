export const get_users = (callback) =>{
    (async () => {
        const resp = await fetch("https://api.escuelajs.co/api/v1/users");
        const data = await resp.json();
        callback(data);
    })();
}