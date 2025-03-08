import { post } from './fetcher';

function login(userInput) {
  if (userInput.email == '' || userInput.password == '') {
    throw new Error('All fields are required!');
  }
  return post('/users/login', userInput);
}
function register(userInput) {
  try {
    if (userInput.email == '' || userInput.password == '') {
      throw new Error('All fields are required!');
    }
    if (userInput.password != userInput['confirm-password']) {
      throw new Error('Passwords does not match!');
    }
    return post('/users/register', userInput);
  } catch (error) {
    throw error.message;
  }
}

export default {
  login,
  register,
};
