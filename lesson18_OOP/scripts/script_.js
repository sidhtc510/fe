const obj1 = {
  username: "tolik",
  hello: () => {     // со стрелочной не работает. используй фанкшн декларейшн
    console.log(`hi, ${this.username}!`);
  },
};


const obj2 = {
    username: "tolik",
    hello: function() {     // со стрелочной не работает. используй фанкшн декларейшн
      console.log(`hi, ${this.username}!`);
    },
  };

  const obj3 = {
    username: "anton",
  };



obj3.hello = obj2.hello;

obj2.hello()
obj3.hello()
