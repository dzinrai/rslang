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

  console.log('rawResponse: ', rawResponse);

  if (rawResponse.status === 417) {
    return { error: 'Already registred!' };
  }

  if (rawResponse.status === 422) {
    return { error: 'Incorrect e-mail or password' };
  }

  const content = await rawResponse.json();
  console.log('content: ', content);

  return content;
};

export default createUser;
