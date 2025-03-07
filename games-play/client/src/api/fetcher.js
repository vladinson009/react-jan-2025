import { getUserData } from '../utils/userData';

const host = 'http://localhost:3030';

async function fetcher(url, method, data) {
  const userData = getUserData();
  const options = {
    method,
    headers: {},
  };
  if (userData) {
    options.headers['X-Authorization'] = userData.accessToken;
  }
  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(host + url, options);
    if (response.ok == false) {
      if (response.status == 204) {
        return response;
      }
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw error.message;
  }
}

function get(url) {
  return fetcher(url, 'get');
}
function post(url, data) {
  return fetcher(url, 'post', data);
}
function put(url, data) {
  return fetcher(url, 'put', data);
}
function del(url) {
  return fetcher(url, 'delete');
}
export { get, post, put, del };
