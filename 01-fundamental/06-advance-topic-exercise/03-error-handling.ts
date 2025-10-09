const myPromise = new Promise((resolve, reject) => {
  if (1 === 1) {
    resolve("Promise success");
  } else {
    reject("Promise failed");
  }
});

// 1. DOT THEN
// myPromise
//   .then((data) => {
//     console.log("Hore, promise sukses!");

//     throw new Error("Error yang dibuat-buat");

//     console.log(data);
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
//   })
//   .catch((error) => {
//     console.log("Huhu, promise gagal!");
//     console.log(error);
//   })
//   .finally(() => console.log("Promise finished"));

// 2. TRY CATCH
async function handleMyPromise() {
  try {
    const data = await myPromise;
    console.log("Hore, promise sukses!");

    throw new Error("Error yang dibuat-buat");

    console.log(data);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
  } catch (error) {
    console.log("Huhu, promise gagal!");
    console.log(error);
  } finally {
    () => console.log("Promise finished");
  }
}

/* ---------------------------------- NOTES --------------------------------- */
async function getUserData() {
  try {
    const response = await fetch("");

    if (response.ok !== true) {
      throw new Error();
    }

    console.log("Berhasil");
  } catch (error) {
    console.log(error);
  }
}
