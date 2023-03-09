// console.log("start");
// const list = fetch("https://api.sampleapis.com/countries/countries");
// console.log("data recived");
// console.log("countries > " + list);

// console.log("------------------------------------------------------------------");

// const listPromise = fetch("https://api.sampleapis.com/countries/countries");
// listPromise
//   .then((data) => data.json())
//   .then((countries) => {
//     console.log(countries);
//   }).catch(err => {
//     console.log('error ', err);
//   })

// console.log("------------------------------------------------------------------");

// console.log("hello1");
// const cofee = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(Error("your cofee is ready"));
//     }, 2000);
// });

// cofee.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// console.log("hello2");

// console.log("------------------------------------------------------------------");

const family = [
  { member: "mama", id: 111, coffee: "Latte" },
  { member: "papa", id: 222, coffee: "Espresso" },
  { member: "son", id: 333, coffee: "Capuccino" },
];

const getCofee = (member) => {
  const coffeePromise = fetch("https://api.sampleapis.com/coffee/hot");
  return coffeePromise
    .then(data => data.json())
    .then(list => {
      console.log("list  >>> ", list);
      const coffee =list.find(res => res.title === member.coffee)
      console.log(coffee);
      return{
        ...member, coffee
      }
    });
};

const getFamilyMember = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const member = family.find(res => res.id === id);
      //   console.log(member);
      if (member) {
        resolve(member);
      } else {
        reject(Error("Family member is not found"))
      }
    }, 1500);
  });
};

getFamilyMember(21).then((data) => {
    return getCofee(data);
 
}).then(newMember => {
    console.log('newmember > ', newMember);
}).catch(err => {
    console.log(err);
});
