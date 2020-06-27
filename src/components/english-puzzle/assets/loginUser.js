const loginUser = async (user) => {
  const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  console.log(rawResponse);
  const content = await rawResponse.json();

  console.log(content);
  return content;
};

export default loginUser;
