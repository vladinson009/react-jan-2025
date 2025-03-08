import { del, get, post, put } from './fetcher';

function getAll() {
  return get('/data/games?sortBy=_createdOn%20desc');
}
function getLatestGame() {
  return get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}
function getById(gameId) {
  return get('/data/games/' + gameId);
}
function create(userInput) {
  for (const key in userInput) {
    if (userInput[key] == '') {
      const name = key.at(0).toUpperCase() + key.slice(1);
      throw new Error(`${name} field is required!`);
    }
  }
  return post('/data/games', userInput);
}
function editById(gameId, userInput) {
  for (const key in userInput) {
    if (userInput[key] == '') {
      const name = key.at(0).toUpperCase() + key.slice(1);
      throw new Error(`${name} field is required!`);
    }
  }
  return put('/data/games/' + gameId, userInput);
}
function deleteById(gameId) {
  return del('/data/games/' + gameId);
}
function getCommentsById(gameId) {
  return get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}
function createComment(comment, gameId) {
  return post('/data/comments', { comment, gameId });
}
export default {
  getAll,
  getLatestGame,
  getById,
  create,
  editById,
  deleteById,
  getCommentsById,
  createComment,
};
