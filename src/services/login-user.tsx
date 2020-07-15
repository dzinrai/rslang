interface User {
  email: string;
  password: string;
}

const loginUser = async (user: User) => {
  const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (rawResponse.status === 403) {
    throw new Error('Incorrect e-mail or password');
  }

  if (rawResponse.status === 404) {
    throw new Error('Not found');
  }

  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();

  localStorage.setItem('userId', content.userId);
  localStorage.setItem('userToken', content.token);

  sessionStorage.setItem('userId', content.userId);
  sessionStorage.setItem('userToken', content.token);

  return content;
};

export default loginUser;
