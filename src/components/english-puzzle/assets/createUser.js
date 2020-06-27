const createUser = async (user) => {
  const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  console.log(rawResponse);
  if (rawResponse.status === 417) {
    localStorage.setItem('registred', true);
    return { error: 'Already registred' };
  }
  if (rawResponse.status === 422) return { error: 'Incorrect e-mail or password' };
  const content = await rawResponse.json();
  console.log(content);
  // content.error
  localStorage.setItem('registred', true);
  return content;
};

export default createUser;
