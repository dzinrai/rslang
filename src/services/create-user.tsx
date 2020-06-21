interface User {
  email: string;
  password: string;
}

const createUser = async (user: User) => {
  const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (rawResponse.status === 417) {
    throw new Error('Already registered!');
  }

  if (rawResponse.status === 422) {
    throw new Error('Incorrect e-mail or password');
  }

  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();

  localStorage.setItem('userId', content.id);

  return content;
};

export default createUser;
