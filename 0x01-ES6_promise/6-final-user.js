// Handle multiple promises
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((re) => (
      re.map((info) => ({
        status: info.status,
        value: info.status === 'fulfilled' ? info.value : String(info.reason),
      }))
    ));
}
