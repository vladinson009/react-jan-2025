function getUserData() {
  const data = localStorage.get('userData');
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
}
function setUserData(userData) {
  localStorage.set('userData', JSON.stringify(userData));
}
function clearUserData() {
  localStorage.removeItem('userData');
}

export { getUserData, setUserData, clearUserData };
