function getUserData() {
  const data = localStorage.getItem('userData');
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
}
function setUserData(userData) {
  localStorage.setItem('userData', JSON.stringify(userData));
}
function clearUserData() {
  localStorage.removeItem('userData');
}

export { getUserData, setUserData, clearUserData };
