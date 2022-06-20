import axios from 'axios';

export const request = async () => {

  const response = await axios('https://api.github.com/users');

  return response.data
}

export const getUserInfo = async (login: string) => {
  const user = await  axios(`https://api.github.com/users/${login}`);
  const repos = await  axios(`https://api.github.com/users/${login}/repos`);
  return {
    user: user.data,
    repos: repos.data
  }
}

