const getUserWord = async ({ token, userId, wordId }) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  console.log(rawResponse);
  const content = await rawResponse.json();

  console.log(content);
};

export default getUserWord;
