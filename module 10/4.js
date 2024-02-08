const person = {
  name: "Jonas",
  introduce: () => {
    console.log("hello,", this.name);
  },
};
const person2 = {
  name: "Jonas",
  introduce: function () {
    console.log("hello,", this.name);
  },
};

person.introduce();
person2.introduce();
