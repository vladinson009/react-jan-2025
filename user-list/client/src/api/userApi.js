import restApi from './restApi';

function getAll() {
  return restApi.get('/jsonstore/users');
}

export default { getAll };
