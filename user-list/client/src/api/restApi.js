const baseUrl = 'http://localhost:3030';
function createOptions(method = 'get', body) {
  const result = {
    method,
    headers: {},
  };
  if (body) {
    result.headers['Content-type'] = 'application/json';
    result.body = JSON.stringify(body);
  }

  return result;
}

async function fetcher(url, options) {
  const response = await fetch(baseUrl + url, options);

  if (response.ok != true) {
    const error = await response.json();
    throw new Error(error.message);
  }
  if (response.status == 204) {
    return response;
  }
  return response.json();
}

function get(url) {
  return fetcher(url, createOptions());
}
function post(url, data) {
  return fetcher(url, createOptions('post', data));
}
function put(url, data) {
  return fetcher(url, createOptions('put', data));
}
function del(url) {
  return fetcher(url, createOptions('delete'));
}

export default { get, post, put, del };
