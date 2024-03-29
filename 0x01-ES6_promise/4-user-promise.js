// A Simple promise
export default function signUpUser(firstName, lastName) {
  // or return Promise.resolve({ firstName, lastName });
  return new Promise((resolve, reject) => {
    if (firstName && lastName) {
      resolve({ firstName, lastName });
    } else {
      reject(new Error('Required'));
    }
  });
}
