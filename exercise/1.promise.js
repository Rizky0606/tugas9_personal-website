// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     return res.json();
//   })
//   .then((json) => {
//     console.log(json);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const vip = false;
// const checkingVIP = new Promise((resolve, reject) => {
//   console.log("Checking VIP");
//   console.log("Harap tunggu sebentar");
//   if (vip) {
//     setTimeout(() => {
//       resolve("anda seorang vip");
//     }, 3000);
//   } else {
//     setInterval(() => {
//       reject("anda bukan seorang vip");
//     }, 3000);
//   }
// });

// checkingVIP
//   .then((res) => {
//     console.log(`ya, ${res}`);
//   })
//   .catch((res) => {
//     console.log(`tidak, ${res}`);
//   });

// console.log("End");

const member1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, [
    {
      id: 1,
      name: "Rizky Fauzi",
      isVip: true,
    },
  ]);
});

const member2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, [
    {
      id: 2,
      name: "Dandi Saputra",
      isVip: false,
    },
  ]);
});

Promise.all([member1, member2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
