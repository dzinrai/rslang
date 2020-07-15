// eslint-disable-next-line

export async function getUserName(dispatchWords: any) {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  console.log('back:', content);
  const name = content.email.split('@')[0];
  dispatchWords({ type: 'setName', value: name });
  return content;
}
