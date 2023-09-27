import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles the profile signup process by calling signUpUser and uploadPhoto functions.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The file name for uploading a photo.
 * @returns {Promise[]} An array of promises that represent the status and value of each operation.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName)
    .then((response) => ({ status: 'fulfilled', value: response }))
    .catch((error) => ({ status: 'rejected', value: error }));

  const photoPromise = uploadPhoto(fileName)
    .then((response) => ({ status: 'fulfilled', value: response }))
    .catch((error) => ({ status: 'rejected', value: error }));

  return Promise.all([userPromise, photoPromise]);
}
