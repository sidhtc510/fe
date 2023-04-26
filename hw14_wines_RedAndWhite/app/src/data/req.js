export const wines_white = (callback) =>{
    fetch('https://api.sampleapis.com/wines/whites')
    .then(res=> res.json()).
    then(json =>callback(json))
}
export const wines_red = (callback) =>{
    fetch('https://api.sampleapis.com/wines/reds')
    .then(res=> res.json()).
    then(json =>callback(json))
}
