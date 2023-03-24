const users_container = document.querySelector('.users_container');
const add_user_form = document.querySelector('.add_user_form');

function getUsers(){
  fetch('https://api.escuelajs.co/api/v1/users')
  .then(function(res){
    return res.json()
  })
  .then(function(json){
    cards_render(json)
  })
}

getUsers();

function cards_render(users){
  users_container.innerText = '';
  users.forEach(function({ name, email, avatar }){
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const emailElem = document.createElement('a');
    const avatarElem = document.createElement('img');

    titleElem.innerText = `Name: ${name}`;
    emailElem.innerText = email;

    emailElem.href = `mailto:${email}`;
    avatarElem.src = avatar;
    avatarElem.alt = name;

    cardElem.classList.add('cardElem');

    cardElem.append(avatarElem, titleElem, emailElem);
    users_container.append(cardElem);
  })
}


add_user_form.addEventListener('submit', function(event){
  event.preventDefault();
  const { name, email, avatar } = event.target;
  addUser({
    name: name.value,
    email: email.value,
    avatar: avatar.value,
    password: 'password',
    role: 'admin'
  });
  event.target.reset()
});

function addUser(obj){
  fetch('https://api.escuelajs.co/api/v1/users', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  .then(function(res){
    return res.json()
  })
  .then(function(json){
    console.log(json)
    getUsers();
  })
}