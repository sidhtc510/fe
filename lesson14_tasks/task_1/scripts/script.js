fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((item) => showCard(item.users));

const usrContainer = document.querySelector(".users_container");

function showCard(arr) {
  console.log(arr);
  arr.forEach(function ({
    image,
    email,
    firstName,
    lastName,
    company: {
      department,
      address: { address },
    },
    bank: { cardNumber, currency },
  }) {
    // console.log(person.company.address.address);

    const card = document.createElement("div");
    const usrImage = document.createElement("img");
    const usrFIO = document.createElement("p");
    const usrDepartment = document.createElement("p");
    const usrAddress = document.createElement("p");
    const usrBankNumber = document.createElement("p");
    const usrEmail = document.createElement("a");

    // usrImage.setAttribute("src", image);
    usrImage.src = image;
    // usrEmail.setAttribute("href", "mailto:"+email);
    usrEmail.href = "mailto:" + email;
    usrFIO.innerText = `${firstName} ${lastName} `;
    usrEmail.innerText = `${email} `;
    usrDepartment.innerText = `${department}`;
    usrAddress.innerText = `${address}`;
    usrBankNumber.innerText = `${cardNumber} ,  ${currency}`;

    card.append(usrImage, usrFIO, usrEmail, usrDepartment, usrAddress, usrBankNumber);
    usrContainer.append(card);
  });
}
