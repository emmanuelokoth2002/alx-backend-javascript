import { uploadPhoto, createUser } from './utils.js';

/**
 * Handles the profile signup process.
 * @returns {Promise} A promise that resolves with the result of the signup process.
 */
export async function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error('Signup system offline');
    throw error;
  }
}
