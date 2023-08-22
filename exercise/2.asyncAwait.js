const member = () => {
  return new Promise((resolve, reject) => {
    const time = 4000;
    if (time < 5000) {
      resolve("finished");
    } else {
      reject("time is up");
    }
  });
};

const runMember = async () => {
  try {
    const data = await member();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

runMember();
