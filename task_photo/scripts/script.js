const tutors = [
  {
    id: 1,
    fullname: "Дмитрий Иванов",
    position: {
      title: "Специалист по вилкам",
      status: "Employee",
    },
    photo: "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/226/493/8.jpg",
  },
  {
    id: 2,
    fullname: "Иван Петров",
    position: {
      title: "Специалист по втулкам",
      status: "Employee",
    },
    photo:
      "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
  },
  {
    id: 3,
    fullname: "Ирина Соколова",
    position: {
      title: "Директор",
      status: "Manager",
    },
    photo:
      "https://n1s2.hsmedia.ru/40/28/aa/4028aa9e4bba86b8de98298945d10386/728x542_1_45a7e3ae7bb73e549b9d779d15a85c65@1200x894_0xac120003_245910781637699737.jpeg",
  },
];

const tutors_container = document.querySelector(".tutors_container");

tutors.forEach(function ({ fullname, position, photo }) {
  const cardElem = document.createElement("div");
  const avatarElem = document.createElement("div");
  const nameElem = document.createElement("p");
  const positionElem = document.createElement("p");
  const btnElem = document.createElement("button");

  const { title, status } = position;

  //   avatarElem.className = 'bgimg';
  //   avatarElem.classList.add('bgimg') - лучший выбор чем класснэйм

  nameElem.innerText = fullname;
  positionElem.innerText = title;
  avatarElem.style.backgroundImage = `url(${photo})`;
  btnElem.innerText = "Биография";

  cardElem.append(avatarElem, nameElem, positionElem, btnElem);
  tutors_container.append(cardElem);

//   if (status === "Manager") {
//     avatarElem.style.border = "2px solid #7fff00";
//   } else {
//     avatarElem.style.border = "2px solid #ff009d";
//   }

  avatarElem.style.border = status === "Manager" ? "2px solid #7fff00" : "2px solid #ff009d";
});
