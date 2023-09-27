import { uploadPhoto, createUser } from './utils.js';

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
