import restApi from './restApi';

function getAll() {
  return restApi.get('/jsonstore/users');
}
function createUser(data) {
  return restApi.post('/jsonstore/users', data);
}
function updateByUserId(userId, data) {
  return restApi.put('/jsonstore/users/' + userId, data);
}
function deleteUser(userId) {
  return restApi.del('/jsonstore/users/' + userId);
}
export default {
  getAll,
  createUser,
  deleteUser,
  updateByUserId,
};
