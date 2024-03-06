// Handle multiple successful promises
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((re) => {
      console.log(`${re[0].body} ${re[1].firstName} ${re[1].lastName}`);
    })
    .catch(() => console.error('Signup system offline'));
}
