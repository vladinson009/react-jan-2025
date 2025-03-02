import restApi from './restApi';

function getAll() {
  return restApi.get('/jsonstore/users');
}
function createUser(data) {
  return restApi.post('/jsonstore/users', data);
}
export default { getAll, createUser };
