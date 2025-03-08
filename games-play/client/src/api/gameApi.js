import { get } from './fetcher';

function getAll() {
  return get('/data/games?sortBy=_createdOn%20desc');
}
function getLatestGame() {
  return get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}
function getById(gameId) {
  return get('/data/games/' + gameId);
}
export default { getAll, getLatestGame, getById };
