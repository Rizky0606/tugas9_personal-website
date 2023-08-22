// synchronous
// console.log("Start");

// for (let i = 0; i < 5; i++) {
//   console.log(`Langkah ${i + 1}`);
// }

// console.log("End");

// asynchronous
console.log("Start");

function end() {
  console.log("End");
}

function asyncFunc(iterasi, callback) {
  setTimeout(() => {
    console.log(`langkah ${iterasi + 1}`);
    callback();
  }, 3000);
}

for (let i = 0; i < 5; i++) {
  asyncFunc(i, () => {
    if (i === 4) {
      end();
    }
  });
}
