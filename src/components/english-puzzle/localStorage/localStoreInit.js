function localStoreInit() {
  const registred = localStorage.getItem('registred');
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  return { registred, token, userId };
}

export default localStoreInit();
