async function ghData(callback) {
  const request = await fetch("https://api.github.com/users/sidhtc510");
  const json = await request.json();

  callback(json);
}

ghData(show);

function show(arr) {
    console.log(arr);
  const img = document.querySelector(".avatar");
  const aName = document.querySelector(".userName");
  const pRepos = document.querySelector(".repositories");
  img.src = arr.avatar_url;

aName.innerText = arr.name
aName.href = arr.html_url

pRepos.innerText = arr.public_repos

//   document.body.append(img);
}
