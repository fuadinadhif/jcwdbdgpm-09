// const myPromise = new Promise((resolve, reject) => {
//   if (1 !== 1) {
//     resolve("Promise success");
//   } else {
//     reject("Promise failed");
//   }
// });

/* -------------------------------- dot then -------------------------------- */
// myPromise
//   .then((data) => {
//     console.log("Hore, promise sukses!");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Huhu, promise gagal!");
//     console.log(error);
//   })
//   .finally(() => console.log("Promise finished"));

/* ------------------------------- async await ------------------------------ */
// async function handleMyPromise() {
//   try {
//     const data = await myPromise;
//     console.log("Hore, promise sukses!");
//     console.log(data);
//   } catch (error) {
//     console.log("Huhu, promise gagal!");
//     console.log(error);
//   } finally {
//     console.log("Promise finished");
//   }
// }

// handleMyPromise();

/* --------------------------- Real Implementation -------------------------- */
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
