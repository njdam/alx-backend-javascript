// A function that return a Promise
export default function getResponseFromAPI() {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('API response data');
    }, 1000);
  });
}
